import { Repository } from 'typeorm';
import { user } from '../entities/auth.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { authDto } from '../dto/auth.dto';

@CustomRepository(user)
export class userRepository extends Repository<user> {
  public async register(data: authDto) {
    const newUser = new user();
    newUser.userData.email = data.email;
    newUser.userData.password = data.password;

    this.create(newUser);

    return newUser.id;
  }

  public async logIn(data: authDto) {
    return await this.findOneByOrFail({ userData: data });
  }

  public async validate(userId: number) {
    return await this.findOneByOrFail({
      id: userId,
    });
  }

  public async change(data: authDto, userId: number) {
    await this.update(userId, {
      userData: data,
    });
  }
}
