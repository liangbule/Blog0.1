/*
 * @Author: liangbule
 * @Date: 2021-08-29 16:33:52
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 20:32:56
 * @Description: 
 */

export default ({app: {router}, store}) => {
  /* 每次路由变更时进行pv统计 */
  router.afterEach((to, from) => {
    /* 告诉增加一个PV */
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}