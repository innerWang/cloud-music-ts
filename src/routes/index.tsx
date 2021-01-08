import { Suspense, lazy, LazyExoticComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Home from 'layouts/HomeLayout';

const SuspenseComponent = (Component: LazyExoticComponent<any>) => (
  props: object
) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

const LazyLoadedRecommend = lazy(() => import('views/Recommend'));
const LazyLoadedToplist = lazy(() => import('views/Toplist'));
const LazyLoadedArtist = lazy(() => import('views/Artist'));
const LazyLoaded404 = lazy(() => import('views/404Page'));

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: SuspenseComponent(LazyLoadedRecommend),
      },
      {
        path: '/discover/toplist',
        component: SuspenseComponent(LazyLoadedToplist),
      },
      {
        path: '/discover/artist',
        component: SuspenseComponent(LazyLoadedArtist),
      },
      {
        path: '*',
        component: SuspenseComponent(LazyLoaded404),
      },
    ],
  },
];
