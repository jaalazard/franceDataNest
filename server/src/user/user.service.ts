import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.userRepository.find({
      select: ['firstname', 'lastname', 'email'],
      where: [{ id: id }],
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: [{ email: email }],
    });
  }

  saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  deleteUser(user: User): void {
    this.userRepository.delete(user);
  }
}
