import {
  PanGestureScreen,
  HomeScreen,
  LeftScreen,
  RightScreen,
  BottomScreen,
  SecondBottomScreen,
} from '../screens';

export enum Routes {
  HOME_SCREEN = 'HOME_SCREEN',
  PAN_GESTURE = 'PAN_GESTURE',
}

export const routeData = [
  {
    name: 'HOME',
    routeName: Routes.HOME_SCREEN,
    component: HomeScreen,
  },

  {
    name: 'Pan Gesture',
    routeName: Routes.PAN_GESTURE,
    component: PanGestureScreen,
  },
];
