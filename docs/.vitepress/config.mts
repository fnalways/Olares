import { defineConfig,UserConfig,DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { en } from "./en";
import { zh } from "./zh";
import { redirects } from "./theme/redirects";
import _ from "lodash";
//import defaultConfig from 'vitepress-versioning-plugin';

// Paths collected during transformPageData so sitemap.transformItems can
// filter them out without re-reading frontmatter from disk.
const noindexPaths = new Set<string>();

// Version-less production origin for the docs site. Used for both the sitemap
// hostname and per-page canonical URLs. relativePath never contains the
// version segment (that comes from `base`/deploy), so every versioned build
// emits the same canonical here — pointing /docs/<version>/* back at the
// latest version served at /docs/*.
const DOCS_ORIGIN = "https://www.olares.com/docs/";

// Resolve an extensionless route through the permanent (301) redirect map so a
// canonical never points at a URL that just redirects elsewhere. The clearest
// case is the home page: `docs/index.md` lives at `/` but `/` 301s to
// /manual/overview, so its canonical should be the overview page. Pages renamed
// within this build are handled the same way. sync-redirects.mjs guarantees the
// map has no chains, so a single hop is enough. Temporary (302) redirects are
// intentionally left unresolved — that URL may come back, so we don't bake it
// into a canonical.
const redirectMap = redirects as Record<string, string>;
function resolveCanonicalRoute(routePath: string): string {
  const dest = redirectMap["/" + routePath];
  return dest ? dest.replace(/^\/+/, "") : routePath;
}

 

function defineVersionedConfig2(
  defaultConfig: UserConfig<DefaultTheme.Config>
): UserConfig<DefaultTheme.Config> {
  let config = _.defaultsDeep(defaultConfig);

  if( !process.env.BASE_URL || !process.env.VERSIONS || !process.env.LATEST_VERSION ) {
    return config;
  }

  const versions =  process.env.VERSIONS?.split(",");
  const latestVersion = process.env.LATEST_VERSION || versions![versions!.length - 1];
  console.log(versions, latestVersion);

  for( const locale of Object.keys(config.locales) ) {
    let themeConfig = config.locales[locale]!.themeConfig!;

    themeConfig?.nav?.push(     
          {
            component: 'VersionSwitcher',
            // Optional props to pass to the component
            props: {
              versions,
              latestVersion,
            }
          }
    );
  }
  
  return config;
}



// https://vitepress.dev/reference/site-config
export default defineVersionedConfig2(withMermaid({
  title: "Olares",
  description: "Let people own their data again",
  lang: "en",
  locales: {
    root: {
      label: "English",
      ...en,
    },
    zh: {
      label: "简体中文",
      ...zh,
    },
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "DZ6H2FVQGO",
        apiKey: "e5257d88b605dc0e5b82b12854aea9a5",
        indexName: "olares",
        searchParameters: {
          queryLanguages: ["zh", "en"],
          facetFilters: ['version:' + (process.env.CURRENT_VERSION || "main")]
        },
        locales: {
          zh: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
  },

  transformPageData(pageData) {
    // Extensionless, version-less route for this page. relativePath never
    // includes the version segment (that comes from `base`/deploy), so every
    // versioned build derives the same value. Mirrors the sitemap item.url
    // logic so canonical hrefs and noindex keys line up.
    const routePath = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '');

    // Opt a page out of Google/Bing/Algolia indexing by adding `noindex: true`
    // to its frontmatter. Implemented here (rather than per-file `head`) so
    // we don't shift source line numbers, which would break `@include` ranges
    // in files that embed this one as a snippet.
    if (pageData.frontmatter?.noindex) {
      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.push([
        'meta',
        { name: 'robots', content: 'noindex, nofollow' },
      ]);
      // Store the extensionless route so this matches the sitemap item.url
      // regardless of `cleanUrls` (which drops the .html from item.url).
      noindexPaths.add(routePath);
      // Don't also emit a canonical: noindex + canonical send Google mixed
      // signals. The page is opting out of indexing entirely.
      return;
    }

    // Canonical points at the version-less docs root, i.e. the latest version
    // served at /docs/*. Every versioned build emits this same href, so old
    // versions under /docs/<version>/* consolidate their duplicate-content
    // signals onto the latest version instead of competing with it. Each
    // language self-canonicals (zh -> zh, en -> en) since relativePath keeps
    // the locale prefix.
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: DOCS_ORIGIN + resolveCanonicalRoute(routePath) },
    ]);
  },

  sitemap: {
    hostname: DOCS_ORIGIN,
    transformItems: (items) =>
      // Drop noindex pages from sitemap.xml so crawlers don't even discover
      // them via the sitemap. The meta tag above is what ultimately removes
      // them from search engine indexes; this just avoids the extra hit.
      items.filter((item) => {
        // Normalize to the extensionless route so the comparison holds whether
        // or not cleanUrls is enabled.
        const p = item.url.replace(/^\/+/, '').replace(/\.html$/, '');
        return !noindexPaths.has(p);
      }),
  },
  lastUpdated: true,
  cleanUrls: true,
  base: process.env.BASE_URL || "/",
  vite: {
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
    define: {
      'process.env.VERSIONS': JSON.stringify(process.env.VERSIONS || JSON.stringify([])),
      'process.env.LANGUAGES': JSON.stringify(process.env.LANGUAGES || JSON.stringify([])),
      // Deploy path prefix without version (e.g. /docs). Versioned builds set
      // BASE_URL=/docs/1.12.4/ so site.base alone cannot yield /docs/ for links.
      __SITE_PATH_PREFIX__: JSON.stringify(process.env.SITE_PATH_PREFIX || ''),
      __CURRENT_DOC_VERSION__: JSON.stringify(process.env.CURRENT_VERSION || ''),
    }
  },
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-G98641Y6R0",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G98641Y6R0');`,
    ],
    [
      "meta",
      {
         name:"docsearch:version",
         content: process.env.CURRENT_VERSION || "main"
      },
    ],
    // 引入 Material Design Icons
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,200,0..1,-50..200",
      },
    ],
  ],
}));
