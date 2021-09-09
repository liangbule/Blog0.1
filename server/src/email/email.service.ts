/*
 * @Author: liangbule
 * @Date: 2021-09-07 21:13:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 23:35:53
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  /**
   * 邮件发送
   */
  sendEmail() {
    this.mailerService
      .sendMail({
        to: 'itduxiang@163.com',
        from: '576865892@qq.com',
        subject: 'Testing Nest MailerService',
        html: '<b>Welcome Frost!</b>',
        // template: 'validate.code.ejs',
      })
    //   .then(() => {})
    //   .catch(() => {});
  }
}
