exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-particles-js/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
