/*
 * @Author: liangbule
 * @Date: 2021-09-05 12:47:08
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-05 13:53:39
 * @Description:
 */
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles:string []) => SetMetadata('roles',roles);