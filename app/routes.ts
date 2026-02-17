import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("pages/leagues-page.tsx"), route("league/:leagueId", "pages/league-page.tsx"),] satisfies RouteConfig;
