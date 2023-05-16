import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsString, MinLength } from "class-validator";

@InputType({ description: 'Create book input object type'})
export class CreateBookInput {
    @IsString()
    @MinLength(3)
    @Field(()=> String, {description: 'A new book title'})
    title: string
    @IsInt()
    price: number
    @IsString()
    author: string
}
