/*
 * @Author: liangbule
 * @Date: 2021-08-29 17:42:19
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 21:48:43
 * @Description: 
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticle(id): any {
    return `You token ${id}`
  }
  saveArticle(message): string{
    return `You message ${message}`
  }
  uptateArticle(id,message): string{
    return `You message ${message} 是 ${id}`
  }
  removeArticle(id): string{
    return `You 删除的id是 ${id}`
  }
  }
