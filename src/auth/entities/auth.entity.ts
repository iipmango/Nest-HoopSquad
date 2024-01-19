import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => userData, (userData) => userData.user, { cascade: true })
  @JoinColumn()
  userData: userData;
}

@Entity()
export class userData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => user, (user) => user.userData)
  @JoinColumn()
  user: user;
}
