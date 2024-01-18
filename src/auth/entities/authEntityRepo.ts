import { EntityRepository, Repository } from 'typeorm';
import { user } from './auth.entity';

@EntityRepository(user)
export class userRepository extends Repository<user> {
  // entity 컨트롤을 위해서는 Repository<>를 extends 해주어야 함
}