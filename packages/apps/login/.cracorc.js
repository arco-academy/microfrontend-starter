const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "login",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App.tsx",
          },
          remotes: {
            "@mcf-core": "core@https://3000-arcoacademy-microfronte-b4dfayo2z8a.ws-us47.gitpod.io/remoteEntry.js"
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});