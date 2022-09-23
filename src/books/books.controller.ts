import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  createBook(@Body() book: CreateBookDto) {
    return this.booksService.create(book);
  }

  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
}
