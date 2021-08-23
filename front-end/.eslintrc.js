/*
 * @Descripttion: 
 * @version: 
 * @Author: liangbule
 * @Date: 2021-08-23 21:24:23
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-23 21:25:25
 */
module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      '@nuxtjs', // 该规则对应这个依赖： @nuxtjs/eslint-config
      'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
      'nuxt/no-cjs-in-config': 'off'
    }
  }
  