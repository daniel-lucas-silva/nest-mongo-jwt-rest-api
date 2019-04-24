import { Column, Entity, ObjectID, ObjectIdColumn, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import { hashSync } from 'bcrypt';

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
    this.password = hashSync(this.password, 10);
  }
}
