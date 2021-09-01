import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  Patch,
  Delete,
  UseFilters,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import path = require('path/posix');
import {ApiQuery,ApiResponse,ApiParam,ApiBody } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import {Hellow,UserRole} from './classes/article'
import {GlobalExceptionFilter}from '../../core/filters/global-exceptoin.filter'
// 模块入口
@Controller('article')
// 局部使用
// @UseFilters(new GlobalExceptionFilter())
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  
  // 查询
  @Get()
  @ApiQuery({name:'name',required: false})
  @ApiQuery({name:'role',enum: UserRole})
  @ApiResponse({ // 返回
    status:200,
    description: 'get......描述',
    type: Hellow
  })
  getArticle(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    if(!id){
      throw new HttpException(
        {status: HttpStatus.BAD_REQUEST,message: '请求参数id必传',error:'id 是 必传'},
        HttpStatus.BAD_REQUEST
      );
      
    }
    return this.articleService.getArticle(id);
  }
  // 创建
  @Post()
  save(@Body() { message }): string {
    return this.articleService.saveArticle(message);
  }

  // 更新
  @Patch(':id')
  @ApiParam({name: 'id'})
  @ApiBody({description: '请输入message'})
  uptate(@Param() {id},@Body() {message}): string {
    return this.articleService.uptateArticle(id,message);
  }
  // 删除
  @Delete()
  remove(@Query() {id}): string{
    return this.articleService.removeArticle(id)
  }
}
