import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Genre from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async insert(body: Genre): Promise<Genre> {
    const genre: Genre = this.genreRepository.create();
    const { type } = body;
    genre.type = type;
    await this.genreRepository.save(genre);
    return genre;
  }

  async getAllGenre(): Promise<Genre[]> {
    return await this.genreRepository.find();
  }
}
