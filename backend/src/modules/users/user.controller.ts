import {Body, Controller, Delete, Patch, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {UpdateUserDTO} from "./dto";
import {JwtAuthGuard} from "../../guards/jwt-guard";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags('API')
    @ApiResponse({status: 200, type: UpdateUserDTO})
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() req): Promise<UpdateUserDTO> {
        const user = req.user;
        return this.userService.updateUser(user.email, updateDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteUser(@Req() req) {
        const user = req.user;
        return this.userService.deleteUser(user.email)
    }
}
