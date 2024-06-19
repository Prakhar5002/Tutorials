import Cart from '@app/screens/cart';
import images from '@app/assets/images/images';
import Home from '@app/screens/home';

export const MAIN_TAB_CONFIG = [
  {id: 0, name: 'Home', screen: Home, icon: images.home},
  {id: 1, name: 'You', screen: Cart, icon: images.home},
  {id: 2, name: 'More', screen: Cart, icon: images.home},
  {id: 3, name: 'Cart', screen: Cart, icon: images.home},
  {id: 4, name: 'Menu', screen: Cart, icon: images.home},
];
