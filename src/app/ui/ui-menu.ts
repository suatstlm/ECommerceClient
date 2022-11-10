import { NbMenuItem } from "@nebular/theme";

export class UiMenu {
}
export const MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/ui/home',
    },
    {
      title: 'Products',
      icon: 'list-outline',
      link: '/ui/products',
      home: true,
    },
    {
      title: 'Carts',
      icon: 'shopping-cart-outline',
      link: '/ui/carts',
      home: true,
    }
  ];
