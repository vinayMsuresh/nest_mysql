import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { Student } from './users/user.entity';
import { BooksModule } from './books/books.module';
import { GenreModule } from './genre/genre.module';
import Book from './books/books.entity';
import Genre from './genre/genre.entity';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'typescript_sequelize',
      entities: [Student, Book, Genre],
      synchronize: true,
    }),
    BooksModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
