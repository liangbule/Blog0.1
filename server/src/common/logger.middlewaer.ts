/*
 * @Author: liangbule
 * @Date: 2021-09-01 00:02:33
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-01 00:09:56
 * @Description: 
 */
import { Injectable,NestMiddleware} from '@nestjs/common'
import { Request,Response} from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next: () => void ){
        const { method,path} = req
        console.log('log',`${method} ${path}`);
        next()
    }
}