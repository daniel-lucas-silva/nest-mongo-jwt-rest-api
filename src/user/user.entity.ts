import { Column, Entity, ObjectID, ObjectIdColumn, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({ enum: ['user', 'admin'], default: 'user' })
  role: string;

  @Column()
  verification: string;

  @Column({default: false})
  verified: boolean;

  @Column({default: 0})
  loginAttempts: number;

  @Column({default: Date.now})
  blockExpires: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
}
