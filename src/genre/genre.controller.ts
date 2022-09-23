import { Body, Controller, Get, Post } from '@nestjs/common';
import Genre from './genre.entity';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Post()
  createGenre(@Body() body: Genre) {
    return this.genreService.insert(body);
  }

  @Get()
  getAllGenre() {
    return this.genreService.getAllGenre();
  }
}
