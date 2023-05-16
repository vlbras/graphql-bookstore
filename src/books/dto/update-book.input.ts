import { InputType, PartialType } from "@nestjs/graphql";
import { CreateBookInput } from "./create-book.input";

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) { }
