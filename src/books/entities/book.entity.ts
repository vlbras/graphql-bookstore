import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./author.entity"

@Entity('books')
@ObjectType({ description: 'Book model' })
export class Book {
    @PrimaryGeneratedColumn()
    @Field(() => ID, { description: 'A unique identifier' })
    id: number

    @Column()
    title: string

    @Column()
    price: number

    @ManyToOne(() => Author, author => author.books,
        { cascade: true })
    author?: Author
}
