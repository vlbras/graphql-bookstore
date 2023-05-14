import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType({ description: 'Book model' })
export class Book {
    @Field(() => ID, { description: 'A unique identifier' })
    id: number
    title: string
    price: number
    author: string
}
