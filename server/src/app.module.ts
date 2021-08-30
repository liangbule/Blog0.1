/*
 * @Author: liangbule
 * @Date: 2021-08-29 11:40:06
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 20:55:37
 * @Description: 
 */
import { Module } from '@nestjs/common';
// 导入模块
import { ArticleModule } from './modules/article/article.module'


@Module({
  imports: [ArticleModule],
})
export class AppModule {}
