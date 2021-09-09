/*
 * @Author: liangbule
 * @Date: 2021-09-07 21:11:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-08 00:03:27
 * @Description:
 */
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

import * as path from 'path';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
	imports: [
		MailerModule.forRootAsync({
			useFactory: () => ({

				transport: 'smtps://576865892@qq.com:sss*sss*ssssaina******@smtp.qq.com',
				defaults: {
					from: '"domain.com" <no-reply@domain.com>'
				},
				template: {
					// dir: process.cwd() + '/src/template/', // 这一句不用配置，可以找到路径
					dir: path.join(__dirname, './template'),
					adapter: new EjsAdapter(),
					options: {
						strict: true
					}
				}
			})
		}),
	],
	providers: [EmailService],
	controllers: [EmailController],
	exports: [EmailService],
})
export class EmailModule { }
