/*
 * @Author: liangbule
 * @Date: 2021-09-06 01:26:48
 * @LastEditors: liangbule
 * @LastEditTime: 2021-09-06 01:28:01
 * @Description: 
 */

import * as nodemailer from 'nodemailer';
// import EmailConfig from '../config/type/EmailConfig'
export default class Email {

  private readonly transporter: any;

  constructor(options: any) {
    this.transporter = nodemailer.createTransport({
      host: options.host,
      port: options.port,
      secure: options.secure, // true for 465, false for other ports
      auth: options.auth
    });
  }
  async sendMail({ from, subject, to, html }) {
    // let info = await this.transporter.sendMail({
    //   from, // sender address
    //   to, // list of receivers
    //   subject, // Subject line
    //   // text: "Hello world?", // plain text body
    //   html // html body
    // });
     // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

    return /ok/i.test(info.response);
  }
}
