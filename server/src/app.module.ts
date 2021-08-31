/*
 * @Author: liangbule
 * @Date: 2021-08-29 11:40:06
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-01 00:33:06
 * @Description: 
 */
import { Module ,MiddlewareConsumer,RequestMethod} from '@nestjs/common';
// 使用中间件
import {LoggerMiddleware} from './common/logger.middlewaer'
// 导入模块
import { ArticleModule } from './modules/article/article.module'


@Module({
  imports: [ArticleModule],
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
