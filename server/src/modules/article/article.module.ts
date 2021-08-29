import { Module } from '@nestjs/common';
import { AppController } from './article.controller';
import { AppService } from './article.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
