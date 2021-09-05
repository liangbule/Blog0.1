/*
 * @Author: liangbule
 * @Date: 2021-09-05 13:10:45
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-05 13:24:57
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { ArticleController } from './roles-guard.controller';
import { ArticleService } from './roles-guard.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class RolesGuard {}
