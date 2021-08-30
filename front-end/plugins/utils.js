/*
 * @Author: liangbule
 * @Date: 2021-08-29 16:33:52
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 20:33:53
 * @Description: 
 */

import Vue from 'vue';
import * as utils from '../utils';

Vue.prototype.$utils = utils;


export default ({ app }) => {
  app.$utils = utils;
}