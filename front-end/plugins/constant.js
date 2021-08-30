/*
 * @Author: liangbule
 * @Date: 2021-08-29 16:33:52
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 20:33:07
 * @Description: 
 */

import Vue from 'vue';
import * as constant from '../constant/common';

Vue.$constant = Vue.prototype.$constant = constant;

export default ({ app }) => {
  app.$constant = constant;
}