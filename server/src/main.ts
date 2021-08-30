/*
 * @Author: liangbule
 * @Date: 2021-08-29 11:40:06
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 23:58:43
 * @Description: 
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bootstrap from './bootstrap'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
async function main() {
  const app = await NestFactory.create(AppModule)
  
  // const options = new DocumentBuilder()
  // .setTitle("博客1.0")
  // .setDescription("博客1.0 接口文档")
  // .setVersion('1.0.0') // 文档版本
  // .addBearerAuth() // 鉴权
  //  // .addTag('') // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
  //  // .setBasePath('http://localhost:5000')
  // .build();
  //   // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  //   const document = SwaggerModule.createDocument(app, options);
  //   // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  // SwaggerModule.setup('doc', app, document);

  await bootstrap(app);
  await app.listen(3000)
}
main();
