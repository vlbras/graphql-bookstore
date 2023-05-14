import { Field, InputType } from "@nestjs/graphql";

@InputType({ description: 'Create book input object type'})
export class CreateBookInput {
    @Field(()=> String, {description: 'A new book title'})
    title: string
    price: number
    author: string
}
