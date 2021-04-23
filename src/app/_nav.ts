import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  /*{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },*/
  {
    title: true,
    name: 'Data Structure'
  },
  {
    name: 'Array',
    url: '/data-structure/array',
    icon: 'fa fa-bars'
  },
  {
    name: 'Linked List',
    url: '/theme/typography',
    icon: 'fa fa-list-ul'
  },
  {
    name: 'Stack',
    url: '/theme/typography',
    icon: 'fa fa-stack-exchange'
  },
  {
    name: 'Queue',
    url: '/theme/typography',
    icon: 'fa fa-quora'
  },
  {
    name: 'Hashing',
    url: '/theme/typography',
    icon: 'fa fa-th-list'
  },
  {
    name: 'Matrix',
    url: '/theme/typography',
    icon: 'fa fa-table'
  },
  {
    title: true,
    name: 'Algorithm'
  },
  {
    name: 'Analysis of Algorithm',
    url: '/base/forms',
    icon: 'fa fa-hourglass-start'
  },
  {
    name: 'Searching',
    url: '/base/cards',
    icon: 'fa fa-search'
  },
  {
    name: 'Sorting',
    url: '/base/carousels',
    icon: 'fa fa-sort-amount-asc'
  },
  {
    name: 'Divide & Conquer',
    url: '/base/collapses',
    icon: 'icon-puzzle'
  },
  {
    name: 'Backtracking',
    url: '/base/navbars',
    icon: 'fa fa-braille'

  },
  {
    name: 'Graph',
    url: '/base/paginations',
    icon: 'fa fa-line-chart'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Interview Questions',
  },
  {
    name: 'Front End',
    url: '/front-end',
    icon: 'fa fa-desktop',
    children: [
      {
        name: 'HTML',
        url: '/html',
        icon: 'devicon-html5-plain'
      },
      {
        name: 'CSS',
        url: '/css',
        icon: 'devicon-css3-plain'
      },
      {
        name: 'JavaScript',
        url: '/javascript',
        icon: 'devicon-javascript-plain'
      },
      {
        name: 'SASS',
        url: '/sass',
        icon: 'devicon-sass-original'
      },
      {
        name: 'TypeScript',
        url: '/typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        name: 'React',
        url: '/sass',
        icon: 'devicon-react-original'
      },
      {
        name: 'Angular',
        url: '/sass',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'Grunt',
        url: '/grunt',
        icon: 'devicon-grunt-line'
      },
      {
        name: 'Webpack',
        url: '/webpack',
        icon: 'devicon-webpack-plain'
      }
    ]
  },
  {
    name: 'Back End',
    url: '/backend',
    icon: 'fa fa-anchor',
    children: [
      {
        name: 'C#',
        url: '/csharp',
        icon: 'devicon-csharp-plain'
      },
      {
        name: 'ADO.NET',
        url: '/adonet',
        icon: 'devicon-dot-net-plain'
      },
      {
        name: 'ASP.NET MVC',
        url: '/aspnetmvc',
        icon: 'devicon-dot-net-plain'
      },
      {
        name: 'ASP.NET Core',
        url: '/aspnetcore',
        icon: 'devicon-dotnetcore-plain'
      },
      {
        name: 'NodeJS',
        url: '/nodejs',
        icon: 'devicon-nodejs-plain'
      }
    ]
  },
  {
    name: 'MiddleWare',
    url: '/front-end',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'WebAPI',
        url: '/csharp',
        icon: 'fa fa-cogs'
      },
      {
        name: 'ExpressJS',
        url: '/aspnetmvc',
        icon: 'devicon-express-original'
      }
    ]
  },
  {
    name: 'Databases',
    url: '/databases',
    icon: 'fa fa-database',
    children: [
      {
        name: 'SQL SERVER',
        url: '/sqlserver',
        icon: 'devicon-microsoftsqlserver-plain'
      },
      {
        name: 'MongoDB',
        url: '/mongodb',
        icon: 'devicon-mongodb-plain'
      }
    ]
  },
  {
    name: 'Cloud Services',
    url: '/cloudservrices',
    icon: 'fa fa-cloud',
    children: [
      {
        name: 'AWS',
        url: '/aws',
        icon: 'devicon-amazonwebservices-original'
      },
      {
        name: 'Azure',
        url: '/azure',
        icon: 'fa fa-cloud'
      }
    ]
  }
];
