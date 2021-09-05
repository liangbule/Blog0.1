/*
 * @Author: liangbule
 * @Date: 2021-09-04 11:16:29
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-05 11:55:43
 * @Description: 管道
 */

import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class ParseIntPipe implements PipeTransform<string>{
    async transform(value:string , metadata: ArgumentMetadata){
        const val = parseInt(value,10)
        if(isNaN(val)){
            throw new BadRequestException("Validation falid");
        }
        return val
    }
}