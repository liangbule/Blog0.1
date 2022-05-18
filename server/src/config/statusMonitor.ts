/*
 * @Author: your name
 * @Date: 2021-09-09 23:03:12
 * @LastEditTime: 2021-09-10 00:00:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Blog0.1/server/src/config/statusMonitor.ts
 */
export default {
    pageTitle: 'Nest.js Monitoring Page',
    port: 3000,
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
  };