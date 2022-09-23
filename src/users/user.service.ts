import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './user.entity';
import { Repository } from 'typeorm';
import Book from 'src/books/books.entity';
import CreateUserDto from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Student)
    private userRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.userRepository.find();
  }

  async create(student: CreateUserDto) {
    const userEntity: Student = Student.create();
    const { name } = student;
    userEntity.name = name;
    await Student.save(userEntity);
    return userEntity;
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

  async getBooksOfStudent(id: number): Promise<Student> {
    const student: Student = await this.userRepository.findOne({
      where: { id },
      relations: ['books'],
    });
    return student;
  }
}
