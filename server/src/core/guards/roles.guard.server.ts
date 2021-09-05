/*
 * @Author: liangbule
 * @Date: 2021-09-05 12:22:09
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-05 13:31:30
 * @Description: 
 */
import { Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector,) {}

    canActivate (context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const {user} = request.query;
        

        return !!roles.find(role => role === user)
    }
}
