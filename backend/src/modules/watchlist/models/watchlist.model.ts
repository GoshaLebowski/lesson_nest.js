import {Column, Model, Table} from "sequelize-typescript";
import {User} from "../../users/models/user.model";

@Table
class Watchlist extends Model {
    @Column
    user: User

    @Column
    name: string

    @Column
    assetId: string
}