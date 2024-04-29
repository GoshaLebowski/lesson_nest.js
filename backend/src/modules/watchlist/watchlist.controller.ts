import {Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import {WatchlistService} from "./watchlist.service";
import {WatchlistDTO} from "./dto";
import {JwtAuthGuard} from "../../guards/jwt-guard";

@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDto: WatchlistDTO, @Req() req): Promise<WatchlistDTO> {
        const user = req.user
        return this.watchlistService.createAsset(user, assetDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-all')
    getAllAssets() {
        return
    }

    @UseGuards(JwtAuthGuard)
    @Patch('update')
    updateAsset() {
        return
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteAsset(@Query('id') id: string) {
        return
    }
}
