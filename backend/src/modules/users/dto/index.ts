import {IsNotEmpty, IsString} from "class-validator";
import {AppError} from "../../../common/errors";

export class CreateUserDto {
    @IsString({message: AppError.USER_FIRSTNAME_STRING})
    @IsNotEmpty({message: AppError.USER_FIRSTNAME_IS_EMPTY})
    firstName: string;

    @IsString({message: AppError.USER_FIRSTNAME_STRING})
    @IsNotEmpty({message: AppError.USER_FIRSTNAME_STRING})
    username: string;

    @IsString({message: AppError.USER_EMAIL_STRING})
    @IsNotEmpty({message: AppError.USER_EMAIL_IS_EMPTY})
    email: string;

    @IsString({message: AppError.USER_PASS_STRING})
    @IsNotEmpty({message: AppError.USER_PASS_IS_EMPTY})
    password: string;
}