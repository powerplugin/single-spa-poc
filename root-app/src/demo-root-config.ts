import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () =>
    System.import(
      "http://localhost:8001/main.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@demo/navbar",
//   app: () => System.import("@demo/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
