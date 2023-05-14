import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input/create-book.input';

@Injectable()
export class BooksService {
    async findAll(){
        return []
    }

    async findOne(id: number){
        return null
    }

    async create(createBookInput: CreateBookInput){
        return null
    }
}
