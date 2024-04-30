import {IsString} from "class-validator";
import {AppError} from "../../../common/constants/errors";
import {ApiProperty} from "@nestjs/swagger";

class UserResponse {
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    email: string;
}

export class AuthUserResponse {
    @ApiProperty()
    user: UserResponse;

    @ApiProperty()
    @IsString()
    token: string;
}