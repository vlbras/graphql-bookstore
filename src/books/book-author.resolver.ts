import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => Book)
export class BookAuthorResolver {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Book>
    ) { }

    @ResolveField('author', () => Author)
    async getAuthorOfBook(@Parent() book: Book) {
        return this.authorRepository
        .createQueryBuilder('author')
        .innerJoin('author.books', 'books', 'books.id = :bookId', {
            bookId: book.id
        })
        .getOne()
    }
}