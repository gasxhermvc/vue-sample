module.exports = {
  resolve: {
    alias: {
      // If using the runtime only build
      vue$: 'vue/dist/vue.runtime.esm.js' // 'vue/dist/vue.runtime.common.js' for webpack 1
      // Or if using full build of Vue (runtime + compiler)
      // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 1 }
      //     },
      //     'postcss-loader'
      //   ]
      // }
    ]
  },
  // plugin omitted
}