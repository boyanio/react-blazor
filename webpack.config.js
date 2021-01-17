const baseConfig = {
  mode: "production",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};

const commonConfig = Object.assign({}, baseConfig, {
  name: "common",
  entry: "./src/common/index.ts",
  output: {
    filename: "common.js",
    path: __dirname + "/build/apps"
  },
});

const reactConfig = Object.assign({}, baseConfig, {
  name: "react",
  entry: "./src/react/index.tsx",
  output: {
    filename: "react-app.js",
    path: __dirname + "/build/apps/react"
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "ChatMessageRepository": "ChatMessageRepository"
  }
});

module.exports = [commonConfig, reactConfig];