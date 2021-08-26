/*
 * @Author: liangbule
 * @Date: 2021-08-26 22:29:26
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-26 22:45:24
 */

export function getElementToPageTop(el) {
  if (el.parentElement) {
    return this.getElementToPageTop(el.parentElement) + el.offsetTop
  }
  return el.offsetTop
}