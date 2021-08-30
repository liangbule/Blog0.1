import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  Patch,
  Delete
} from '@nestjs/common';
import path = require('path/posix');
import { ArticleService } from './article.service';
// 模块入口
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  
  // 查询
  @Get()
  getArticle(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.articleService.getArticle(id);
  }
  // 创建
  @Post()
  save(@Body() { message }): string {
    return this.articleService.saveArticle(message);
  }

  // 更新
  @Patch(':id')
  uptate(@Param() {id},@Body() {message}): string {
    return this.articleService.uptateArticle(id,message);
  }
  // 删除
  @Delete()
  remove(@Query() {id}): string{
    return this.articleService.removeArticle(id)
  }
}
