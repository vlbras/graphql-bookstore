import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { UserInputError } from 'apollo-server-express';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) { }

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find()
    }

    async findOne(id: number): Promise<Book>  {
        const book = await this.bookRepository.findOneBy({ id })
        if (!book) {
            throw new UserInputError(`Book #${id} not found`)
        }
        return book
    }

    async create(createBookInput: CreateBookInput): Promise<Book> {
        const book = this.bookRepository.create(createBookInput)
        return this.bookRepository.save(book)
    }

    async update(id: number, updateBookInput: UpdateBookInput): Promise<Book> {
        await this.findOne(id)
        const book = await this.bookRepository.preload({
            id,
            ...updateBookInput
        })
        return this.bookRepository.save(book)
    }

    async remove(id: number): Promise<Book>{
        const book = await this.findOne(id)
        return this.bookRepository.remove(book)
    }
}
