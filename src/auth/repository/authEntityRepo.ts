import { EntityRepository, Repository } from 'typeorm';
import { auth } from '../entities/auth.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { authDto } from '../dto/auth.dto';

@CustomRepository(auth)
export class userRepository extends Repository<auth> {
  public async register(userData: authDto) {
    const newUser = new auth();
    newUser.email = userData.email;
    newUser.password = userData.password;

    this.create(newUser);

    return newUser.id;
  }

  public async logIn(userData: authDto) {
    return await this.findOneByOrFail(userData);
  }

  public async validate(userId: number) {
    return await this.findOneByOrFail({
      id: userId,
    });
  }
}
