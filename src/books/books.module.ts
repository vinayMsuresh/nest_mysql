import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Genre from 'src/genre/genre.entity';
import { Student } from 'src/users/user.entity';
import { BooksController } from './books.controller';
import Book from './books.entity';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Student, Genre])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
