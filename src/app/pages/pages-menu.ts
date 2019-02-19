import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Ackten Dashboard',
    icon: 'nb-bar-chart',
    link: '/pages/ackten-dashboard',
    home: true,
  },
  {
    title: 'Status Dashboard',
    icon: 'nb-gear',
    link: '/pages/status-dashboard',
  },
  {
    title: 'SETTINGS',
    group: true,
  },
  {
    title: 'Setup Wizard',
    icon: 'nb-coffee-maker',
    link: '/pages/setup-wizard',
  },
  {
    title: 'Profile',
    icon: 'nb-person',
    link: '/pages/profile',
  },
];
