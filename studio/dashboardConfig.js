export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2c948ee3ba0170123b1ecb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ns3hmw9y',
                  apiId: '2a9a221f-d6da-42bd-862b-72a299772670'
                },
                {
                  buildHookId: '5e2c948ee3ba0170123b1ecc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wiqp6r1f',
                  apiId: '4e3f4ee0-4df8-4199-b72a-b467ebbed18b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kronkake/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wiqp6r1f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
