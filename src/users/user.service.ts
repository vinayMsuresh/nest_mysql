import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Student)
    private userRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.userRepository.find();
  }

  create(student: Student) {
    return this.userRepository.save(student);
  }

  findOne(id: number): Promise<Student> {
    return this.userRepository.findOneBy({ id });
  }

  async destroy(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  update(id: number, body: Student) {
    return this.userRepository.update(id, body);
  }
}
