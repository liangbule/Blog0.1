/*
 * @Author: liangbule
 * @Date: 2021-08-29 11:40:06
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-05 13:24:29
 * @Description: 
 */
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bootstrap from './bootstrap'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import {GlobalExceptionFilter}  from './core/filters/global-exceptoin.filter'
import {Validation} from './common/pipes/validation.pipe'
// 局部使用
async function main() {
  const app = await NestFactory.create(AppModule)
  // 全局抛出异常 过滤器
  app.useGlobalFilters(new GlobalExceptionFilter())
  // 全局管道
  // app.useGlobalPipes(new Validation())
  app.useGlobalPipes(new ValidationPipe())
  await bootstrap(app);
  await app.listen(3000)
}
main();
