/*
 * @Author: liangbule
 * @Date: 2021-08-29 11:40:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 23:42:48
 * @Description: 
 */
import { Module ,MiddlewareConsumer,RequestMethod, UseFilters} from '@nestjs/common';
// 使用中间件
import {LoggerMiddleware} from './common/logger.middlewaer'
// 导入模块
import { ArticleModule } from './modules/article/article.module'
import {RolesGuard} from './modules/roles-guard/roles-guard.module'
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import {GlobalExceptionFilter}  from './core/filters/global-exceptoin.filter'
import { StatusMonitorModule } from 'nest-status-monitor'
import statusMonitorConfig from './config/statusMonitor'
// meail
import * as path from 'path'

// 局部使用
@UseFilters(new GlobalExceptionFilter())
@Module({
  imports: [
    StatusMonitorModule.setUp(statusMonitorConfig),
    // EmailModule,
    ArticleModule,
    RolesGuard,
    EmailModule,
  ],
  controllers: [EmailController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    // 添加中间件
    consumer
    .apply(LoggerMiddleware)
    .exclude({path:'article',method: RequestMethod.POST}) // 排除
    .forRoutes('article')
  }
}
