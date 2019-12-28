const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Vuttr',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Vuttr',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/marco/projetos/projetosemcurso/rocketseat/vuttr',
          templates:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/node_modules/docz-core/dist/templates',
          docz: '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz',
          cache:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/.cache',
          app:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app',
          appPackageJson:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/package.json',
          gatsbyConfig:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/gatsby-config.js',
          gatsbyBrowser:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/gatsby-browser.js',
          gatsbyNode:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/gatsby-node.js',
          gatsbySSR:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/gatsby-ssr.js',
          importsJs:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app/imports.js',
          rootJs:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app/root.jsx',
          indexJs:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app/index.jsx',
          indexHtml:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app/index.html',
          db:
            '/home/marco/projetos/projetosemcurso/rocketseat/vuttr/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
