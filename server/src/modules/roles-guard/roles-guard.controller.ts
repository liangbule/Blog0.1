/*
 * @Author: liangbule
 * @Date: 2021-09-05 13:10:45
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-06 00:38:08
 * @Description: 
 */
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
  UseGuards,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import path = require('path/posix');
import { ApiTags, ApiParam, ApiBody ,ApiBearerAuth} from '@nestjs/swagger';
import { ArticleService } from './roles-guard.service';
import { RolesGuard } from '../../core/guards/roles.guard.server';
import { Roles } from '../../core/decorators/roles.decorator';
// 模块入口
@ApiBearerAuth()
@ApiTags()
@UseGuards(RolesGuard)
@Controller('/roles-guard')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
  ) {}

  // 查询
  @Get()
  @Roles('admin')
  getArticle(@Query() { id }): string {
    // if (!id) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.BAD_REQUEST,
    //       message: '请求参数id必传',
    //       error: 'id 是 必传',
    //     },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    return this.articleService.getArticle(id);
  }
  // 创建
  @Post()
  save(@Body() { message }): string {
    return this.articleService.saveArticle(message);
  }

  // 更新
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  uptate(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    console.log(typeof id);

    return this.articleService.uptateArticle(id, message);
  }
  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.articleService.removeArticle(id);
  }
}

