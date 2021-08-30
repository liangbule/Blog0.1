/*
 * @Author: liangbule
 * @Date: 2021-08-31 00:16:06
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-31 00:20:30
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';
export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}
export class Hellow {
  @ApiProperty({ example: 'Kitey', description: '这是name的' })
  name: string;
  @ApiProperty({ example: 1, description: '这是age的' })
  age: number;
  @ApiProperty({ example: 'Maine Co0n', description: '这是猫的品种' })
  breed: string;
  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
