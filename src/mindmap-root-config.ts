import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication(
  "@mindmap/poc-react",
  () => System.import("@mindmap/poc-react"),
  (location) => location.pathname === "/poc-react"
);

registerApplication(
  "@mindmap/poc-angular",
  () => System.import("@mindmap/poc-angular"),
  (location) => {
    return location.pathname.startsWith("/poc-angular");
  }
);

registerApplication(
  "@mindmap/poc-vue",
  () => System.import("@mindmap/poc-vue"),
  (location) => {
    return location.pathname.startsWith("/poc-vue");
  }
);

applications.forEach(registerApplication);
layoutEngine.activate();
start();
