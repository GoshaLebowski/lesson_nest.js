import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../users/user.service";
import {CreateUserDTO} from "../users/dto";
import {AppError} from "../../common/constants/errors";
import {UserLoginDTO} from "./dto";
import * as bcrypt from 'bcrypt';
import {AuthUserResponse} from "./response";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    async registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (existUser) throw new BadRequestException(AppError.USER_EXISTS);
            await this.userService.createUser(dto);
            return this.userService.publicUser(dto.email)
        } catch (e) {
            throw e;
        }
    }

    async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);
            const validatePassword = await bcrypt.compare(dto.password, existUser.password);
            if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
            return this.userService.publicUser(dto.email)
        } catch (e) {
            throw e;
        }
    }
}
