import {IsNotEmpty, IsString} from "class-validator";
import {AppError} from "../../../common/constants/errors";
import {ApiProperty} from "@nestjs/swagger";

export class UserLoginDTO {
    @ApiProperty()
    @IsString({message: AppError.USER_EMAIL_STRING})
    @IsNotEmpty({message: AppError.USER_EMAIL_IS_EMPTY})
    email: string;

    @ApiProperty()
    @IsString({message: AppError.USER_PASS_STRING})
    @IsNotEmpty({message: AppError.USER_PASS_IS_EMPTY})
    password: string;
}