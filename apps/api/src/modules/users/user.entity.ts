import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  @IsNotEmpty({
    message: 'username_is_required',
  })
  username: string;

  @Column({ unique: true })
  @IsNotEmpty({
    message: 'email_is_required',
  })
  @IsEmail({}, { message: 'field_email_must_be_an_email' })
  email: string;

  @Column()
  password: string;
}
