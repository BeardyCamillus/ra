import { DriftPage, ForzaPage, HomePage, TimeAttackPage } from "../components";

export const routes = [
  { path: '/*', element: HomePage },
  { path: '/ra_router_menu/drift', element: DriftPage },
  { path: '/ra_router_menu/timeattack', element: TimeAttackPage },
  { path: '/ra_router_menu/forza', element: ForzaPage },
]