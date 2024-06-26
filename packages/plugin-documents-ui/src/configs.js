module.exports = {
  srcDir: __dirname,
  name: "documents",
  scope: "documents",
  port: 3120,
  exposes: {
    "./routes": "./src/routes.tsx",
    "./printButton": "./src/containers/PrintButton.tsx",
  },
  routes: {
    url: "http://localhost:3120/remoteEntry.js",
    scope: "documents",
    module: "./routes",
  },
  cardDetailAction: "./printButton",
  menus: [
    {
      text: "Documents",
      to: "/settings/documents",
      image: "/images/icons/erxes-09.svg",
      location: "settings",
      scope: "documents",
      action: "documentsAll",
      permissions: ["manageDocuments"],
    },
  ],
};
