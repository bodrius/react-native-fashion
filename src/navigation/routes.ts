export enum Routes {
  HOME_SCREEN = 'HOME_SCREEN',
  PAN_GESTURE = 'PAN_GESTURE',
  SNAP_CHAT_SCREEN = 'SNAP_CHAT_SCREEN',
  VIDEO_VERTICAL_SCREEN = 'VIDEO_VERTICAL_SCREEN',
  VIDEO_HORIZONTAL_SCREEN = 'VIDEO_HORIZONTAL_SCREEN',
  RN_BIOMETRIC = 'RN_BIOMETRIC',

  SWIPE_STACK = 'SWIPE_STACK',
  SWIPE_SCREEN = 'SWIPE_SCREEN',
  RIGHT_SWIPE_SCREEN = 'RIGHT_SWIPE_SCREEN',

  FLATLIST_SEPARATOR = 'FLATLIST_SEPARATOR',
}

export const routeData = [
  {
    name: 'Pan Gesture',
    routeName: Routes.PAN_GESTURE,
  },

  {
    name: 'Snap Chat View',
    routeName: Routes.SNAP_CHAT_SCREEN,
  },

  {
    name: 'Swipe Stack',
    routeName: Routes.SWIPE_STACK,
  },

  {
    name: 'Video Carousel (Vertical)',
    routeName: Routes.VIDEO_VERTICAL_SCREEN,
  },

  {
    name: 'Video Carousel (Horizontal)',
    routeName: Routes.VIDEO_HORIZONTAL_SCREEN,
  },

  {
    name: 'RN Biometric',
    routeName: Routes.RN_BIOMETRIC,
  },

  {
    name: 'FlatList Separator',
    routeName: Routes.FLATLIST_SEPARATOR,
  },
];
