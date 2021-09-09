/*
 * @Author: your name
 * @Date: 2021-09-09 23:03:12
 * @LastEditTime: 2021-09-09 23:45:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Blog0.1/server/src/config/statusMion.js
 */
const portNumber = parseInt(process.env.PORT) || 3000;
const statusMonitorConfig = {
    pageTitle: 'Nest.js 监控', // Default title
    port: portNumber,
    path: '/status',
    ignoreStartsWith: '/healt/alive',
    spans: [
      {
        interval: 1, // Every second
        retention: 60, // Keep 60 datapoints in memory
      },
      {
        interval: 5, // Every 5 seconds
        retention: 60,
      },
      {
        interval: 15, // Every 15 seconds
        retention: 60,
      },
    ],
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      responseTime: true,
      rps: true,
      statusCodes: true,
    },
    healthChecks: [],
}
export default statusMonitorConfig