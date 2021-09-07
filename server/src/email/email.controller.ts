/*
 * @Author: liangbule
 * @Date: 2021-09-07 21:13:40
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-07 23:28:26
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Get()
  sendEmail(): string {
    this.emailService.sendEmail();
    return '发送成功';
  }
}
