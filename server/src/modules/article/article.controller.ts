/*
 * @Author: liangbule
 * @Date: 2021-08-29 17:42:18
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-29 17:42:58
 * @Description: 
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './article.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
