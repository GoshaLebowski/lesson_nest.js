import {IsString} from "class-validator";
import {AppError} from "../../../common/constants/errors";
import {ApiProperty} from "@nestjs/swagger";

export class AuthUserResponse {
    @ApiProperty()
    @IsString({message: AppError.USER_FIRSTNAME_STRING})
    firstName: string;

    @ApiProperty()
    @IsString({message: AppError.USER_USERNAME_STRING})
    username: string;

    @ApiProperty()
    @IsString({message: AppError.USER_EMAIL_STRING})
    email: string;

    @ApiProperty()
    @IsString({message: AppError.USER_PASS_STRING})
    password: string;

    @ApiProperty()
    @IsString()
    token: string;
}