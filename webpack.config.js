const baseConfig = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
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