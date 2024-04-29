import {IsNotEmpty, IsString} from "class-validator";
import {AppError} from "../../../common/constants/errors";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty()
    @IsString({message: AppError.USER_FIRSTNAME_STRING})
    @IsNotEmpty({message: AppError.USER_FIRSTNAME_IS_EMPTY})
    firstName: string;

    @ApiProperty()
    @IsString({message: AppError.USER_USERNAME_IS_EMPTY})
    @IsNotEmpty({message: AppError.USER_USERNAME_STRING})
    username: string;

    @ApiProperty()
    @IsString({message: AppError.USER_EMAIL_STRING})
    @IsNotEmpty({message: AppError.USER_EMAIL_IS_EMPTY})
    email: string;

    @ApiProperty()
    @IsString({message: AppError.USER_PASS_STRING})
    @IsNotEmpty({message: AppError.USER_PASS_IS_EMPTY})
    password: string;
}

export class UpdateUserDTO {
    @ApiProperty()
    @IsString({message: AppError.USER_FIRSTNAME_STRING})
    @IsNotEmpty({message: AppError.USER_FIRSTNAME_IS_EMPTY})
    firstName: string;

    @ApiProperty()
    @IsString({message: AppError.USER_USERNAME_IS_EMPTY})
    @IsNotEmpty({message: AppError.USER_USERNAME_STRING})
    username: string;

    @ApiProperty()
    @IsString({message: AppError.USER_EMAIL_STRING})
    @IsNotEmpty({message: AppError.USER_EMAIL_IS_EMPTY})
    email: string;
}