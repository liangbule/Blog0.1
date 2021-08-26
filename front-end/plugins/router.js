/*
 * @Descripttion: 
 * @version: 
 * @Author: liangbule
 * @Date: 2021-08-25 23:30:18
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-26 21:51:53
 */

export default ({ app, $axios, store }) => {
  app.router.beforeEach((to, from, next) => {
    next();
  })
}