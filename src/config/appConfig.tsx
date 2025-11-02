const APP_CONFIG = {
  routes: {
    onboarding: '/onboarding',
    survey: '/onboarding/survey',
    splash: '/onboarding/splash',
    home: '/',
    bookList: '/book-list',
    bookDetail: {
      path: '/book-list/:id/:type',
      link: (id: string, type: 'home' | 'gift') => `/book-list/${id}/${type}`,
    },
    gift: '/gift',
    bookstore: '/bookstore',
    bookStoreDetail: {
      path: '/bookstore/:name',
      link: (name: string) => `/bookstore/${name}`,
    },
    wish: '/wish',
    mypage: '/mypage',
    error: '/404',
  },
} as const;

export const ROUTES = APP_CONFIG.routes;
