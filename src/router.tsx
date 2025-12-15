import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
  NotFoundRoute,
} from '@tanstack/react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DomainPage } from './pages/DomainPage';
import { SkillPage } from './pages/SkillPage';
import { LanguagePage } from './pages/LanguagePage';
import { NotFoundPage } from './pages/NotFoundPage';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFoundPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const domainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/domain/$domainId',
  component: DomainPage,
});

const skillRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skill/$skillId',
  component: SkillPage,
});

const languageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/language/$languageId',
  component: LanguagePage,
});

const routeTree = rootRoute.addChildren([indexRoute, domainRoute, skillRoute, languageRoute]);

export const router = createRouter({
  routeTree,
  notFoundRoute,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
