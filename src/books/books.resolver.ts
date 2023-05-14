import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input/create-book.input';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
    constructor(private readonly booksService: BooksService){}

    @Query(() => [Book], { name: 'books' })
    async findAll() {
        return this.booksService.findAll()
    }

    @Query(() => Book, { name: 'book', nullable: true })
    async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
        return this.booksService.findOne(id)
    }

    @Mutation(() => Book, { name: 'createBook', nullable: true })
    async create(
        @Args('createBookInput') createBookInput: CreateBookInput) {
        return this.booksService.create(createBookInput)
    }
}