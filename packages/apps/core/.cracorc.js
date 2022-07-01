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
          name: "core",
          filename: "remoteEntry.js",
          exposes: {
            './Count': './src/context/count.tsx',
          },
          remotes: {
            "@mcf-login": "login@https://3001-arcoacademy-microfronte-b4dfayo2z8a.ws-us47.gitpod.io/remoteEntry.js"
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