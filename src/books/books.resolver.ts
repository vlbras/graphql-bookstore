import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { BooksService } from './books.service';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver()
export class BooksResolver {
    constructor(private readonly booksService: BooksService) { }

    @Query(() => [Book], { name: 'books' })
    async findAll() {
        return this.booksService.findAll()
    }

    @Query(() => Book, { name: 'book' })
    async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
        return this.booksService.findOne(id)
    }

    @Mutation(() => Book, { name: 'createBook' })
    async create(
        @Args('createBookInput') createBookInput: CreateBookInput) {
        return this.booksService.create(createBookInput)
    }

    @Mutation(() => Book, { name: 'updateBook' })
    async update(
        @Args('id', ParseIntPipe) id: number,
        @Args('updateBookInput') updateBookInput: UpdateBookInput,
    ) {
        return this.booksService.update(id, updateBookInput)
    }

    @Mutation(()=> Book, {name: 'removeBook'})
    async remove(@Args('id', ParseIntPipe) id: number){
        return this.booksService.remove(id)
    }
}