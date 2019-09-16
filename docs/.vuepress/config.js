module.exports = {
  locales: {
    '/': {
      lang: 'vi-VN',
      title: 'Vuejx',
      description: 'Hướng dẫn sử dụng VueJX-RestHeard'
    },
    '/en': {
      lang: 'English',
      title: 'Vuejx',
      description: 'The community guide to VueJX-RestHeard'
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-146655336-1'
      }
    ]
  ],
  // serviceWorker: true,
  themeConfig: {
    logo: '/logo.png',
    docsDir: 'docs',
    repo: 'https://github.com/vuejx/restheart',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'Tiếng việt',
        selectText: 'Ngôn ngữ',
        editLinkText: 'Chỉnh sửa trang này trên GitHub!',
        nav: [
          {
            text: 'Phụ lục',
            link: '/guide/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Mô hình',
            collapsable: false,
            children: [
              '/guide/lifecycle/structure.md',
              '/guide/lifecycle/configuration.md'
            ]
          },
          {
            title: 'API',
            collapsable: false,
            children: [
              {
                title: 'GraphQL',
                collapsable: false,
                children: [
                  '/guide/api/graphql_data.md',
                  '/guide/api/graphql_count.md',
                  '/guide/api/graphql_aggs.md'
                ]
              },
              {
                title: 'RESTful API',
                collapsable: false,
                children: [
                  '/guide/api/rest_data.md',
                  '/guide/api/rest_aggs.md'
                ]
              },
              {
                title: 'OAI-PMH',
                collapsable: false,
                children: [
                  '/guide/api/oaipmh.md',
                ]
              }
            ]
          },
          {
            title: 'Hướng dẫn sử dụng',
            collapsable: false,
            children: [
              '/guide/cms/permission.md',
              {
                title: 'Người dùng là quản trị hệ thống',
                collapsable: true,
                children: [
                  '/guide/cms/system.md',
                  {
                    title: 'Tạo cơ sở dữ liệu',
                    collapsable: true,
                    children: [
                      '/guide/cms/vuejx_db/info.md',
                    ]
                  },
                  {
                    title: 'Tạo scope',
                    collapsable: true,
                    children: [
                      '/guide/cms/scope/info.md',
                    ]
                  },
                  {
                    title: 'Tạo projection',
                    collapsable: true,
                    children: [
                      '/guide/cms/projection/info.md',
                    ]
                  },
                  {
                    title: 'Tạo Site dữ liệu',
                    collapsable: true,
                    children: [
                      '/guide/cms/vuejx_site/info.md',
                    ]
                  },
                  {
                    title: 'Tạo Page hiển thị',
                    collapsable: true,
                    children: [
                      '/guide/cms/vuejx_page/info.md',
                    ]
                  },
                  {
                    title: 'Tạo thống kê báo cáo',
                    collapsable: true,
                    children: [
                      '/guide/cms/aggrs/info.md',
                    ]
                  },
                  {
                    title: 'Tạo validator dữ liệu',
                    collapsable: true,
                    children: [
                      '/guide/cms/schema/info.md',
                    ]
                  },
                  {
                    title: 'Tạo OAI-PMH Config',
                    collapsable: true,
                    children: [
                      '/guide/cms/oai_pmh_config/info.md',
                    ]
                  },
                  {
                    title: 'Định nghĩa mức độ truy cập',
                    collapsable: true,
                    children: [
                      '/guide/cms/open_access/info.md',
                    ]
                  },
                  {
                    title: 'Định nghĩa trạng thái dữ liệu',
                    collapsable: true,
                    children: [
                      '/guide/cms/storage/info.md',
                    ]
                  },
                  {
                    title: 'Định quyền truy cập',
                    collapsable: true,
                    children: [
                      '/guide/cms/permission/info.md',
                    ]
                  },
                  {
                    title: 'Định nhóm danh mục',
                    collapsable: true,
                    children: [
                      '/guide/cms/dict_collection/info.md',
                    ]
                  },
                  {
                    title: 'Định dữ liệu danh mục',
                    collapsable: true,
                    children: [
                      '/guide/cms/dict_item/info.md',
                    ]
                  },
                  {
                    title: 'Định chức vụ - role',
                    collapsable: true,
                    children: [
                      '/guide/cms/role/info.md',
                    ]
                  },
                  {
                    title: 'Quản lý tài khoản - profile',
                    collapsable: true,
                    children: [
                      '/guide/cms/account/info.md',
                    ]
                  }
                ]
              },
              {
                title: 'Người dùng cá nhân',
                collapsable: true,
                children: [
                  '/guide/cms/manual.md',
                ]
              }
            ]
          }
        ]
      }
    },
    '/en': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
    }
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/,png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/,png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:image', content: '/cover.png' }]
  ]
}
