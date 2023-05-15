import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

    @Column()
    author: string
}
