import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Genre from 'src/genre/genre.entity';
import { Student } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import Book from './books.entity';
import CreateBookDto from './dtos/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
    @InjectRepository(Book)
    private bookRepo: Repository<Book>,
    @InjectRepository(Genre)
    private genreRepo: Repository<Genre>,
  ) {}

  async create(books: CreateBookDto): Promise<Book> {
    const { name, userID, genreIDs } = books;
    const book = new Book();
    book.name = name;
    book.student = await this.studentRepo.findOne({ where: { id: userID } });
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await Genre.findOne({ where: { id: genreIDs[i] } });
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async getAllBooks(): Promise<Book[]> {
    return Book.find({ relations: ['student', 'genres'] });
  }
}
