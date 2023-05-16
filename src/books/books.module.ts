import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { BookAuthorResolver } from './book-author.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  providers: [BooksResolver, BooksService, BookAuthorResolver]
})
export class BooksModule {}
