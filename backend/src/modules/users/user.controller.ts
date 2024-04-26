import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create-user')
    createUsers(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }
}
