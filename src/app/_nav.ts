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
    url: '/data-structure/linked-list',
    icon: 'fa fa-list-ul'
  },
  {
    name: 'Stack',
    url: '/data-structure/stack',
    icon: 'fa fa-stack-exchange'
  },
  {
    name: 'Queue',
    url: '/data-structure/queue',
    icon: 'fa fa-quora'
  },
  {
    name: 'Hashing',
    url: '/data-structure/hashing',
    icon: 'fa fa-th-list'
  },
  {
    name: 'Matrix',
    url: '/data-structure/matrix',
    icon: 'fa fa-table'
  },
  {
    title: true,
    name: 'Algorithm'
  },
  {
    name: 'Analysis of Algorithm',
    url: '/algorithm/analysis-of-algorithm',
    icon: 'fa fa-hourglass-start'
  },
  {
    name: 'Searching',
    url: '/algorithm/searching',
    icon: 'fa fa-search'
  },
  {
    name: 'Sorting',
    url: '/algorithm/sorting',
    icon: 'fa fa-sort-amount-asc'
  },
  {
    name: 'Divide & Conquer',
    url: '/algorithm/divide-conquer',
    icon: 'icon-puzzle'
  },
  {
    name: 'Backtracking',
    url: '/algorithm/backtracking',
    icon: 'fa fa-braille'

  },
  {
    name: 'Graph',
    url: '/algorithm/graph',
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
        url: 'interview-questions/front-end/html',
        icon: 'devicon-html5-plain'
      },
      {
        name: 'CSS',
        url: 'interview-questions/front-end/css',
        icon: 'devicon-css3-plain'
      },
      {
        name: 'JavaScript',
        url: 'interview-questions/front-end/javascript',
        icon: 'devicon-javascript-plain'
      },
      {
        name: 'SASS',
        url: 'interview-questions/front-end/sass',
        icon: 'devicon-sass-original'
      },
      {
        name: 'TypeScript',
        url: 'interview-questions/front-end/typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        name: 'React',
        url: 'interview-questions/front-end/react',
        icon: 'devicon-react-original'
      },
      {
        name: 'Angular',
        url: 'interview-questions/front-end/angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'Grunt',
        url: 'interview-questions/front-end/grunt',
        icon: 'devicon-grunt-line'
      },
      {
        name: 'Webpack',
        url: 'interview-questions/front-end/webpack',
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
        url: 'interview-questions/back-end/csharp',
        icon: 'devicon-csharp-plain'
      },
      {
        name: 'ADO.NET',
        url: 'interview-questions/back-end/adonet',
        icon: 'devicon-dot-net-plain'
      },
      {
        name: 'ASP.NET MVC',
        url: 'interview-questions/back-end/aspnetmvc',
        icon: 'devicon-dot-net-plain'
      },
      {
        name: 'ASP.NET Core',
        url: 'interview-questions/back-end/aspnetcore',
        icon: 'devicon-dotnetcore-plain'
      },
      {
        name: 'NodeJS',
        url: 'interview-questions/back-end/nodejs',
        icon: 'devicon-nodejs-plain'
      }
    ]
  },
  {
    name: 'MiddleWare',
    url: '/middleware',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'WebAPI',
        url: 'interview-questions/middleware/webapi',
        icon: 'fa fa-cogs'
      },
      {
        name: 'ExpressJS',
        url: 'interview-questions/back-end/expressjs',
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
        url: 'interview-questions/databases/sqlserver',
        icon: 'devicon-microsoftsqlserver-plain'
      },
      {
        name: 'MongoDB',
        url: 'interview-questions/databases/mongodb',
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
        url: 'interview-questions/cloudservrices/aws',
        icon: 'devicon-amazonwebservices-original'
      },
      {
        name: 'Azure',
        url: 'interview-questions/cloudservrices/azure',
        icon: 'fa fa-cloud'
      }
    ]
  }
];
