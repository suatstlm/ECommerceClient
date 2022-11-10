export class AdminMenu {
}
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'pie-chart-outline',
    link: '/admin/dashboard',
  },
  {
    title: 'Products',
    icon: 'list-outline',
    link: '/admin/products',
    home: true,
  },
  {
    title: 'Orders',
    icon: 'shopping-cart-outline',
    link: '/admin/orders',
    home: true,
  },
  {
    title: 'Customers',
    icon: 'people-outline',
    link: '/admin/customers',
    home: true,
  }
];

