import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { GameModes } from "../__types";
import { HasUpdateCreateDateColumns } from "../models/update-create-columns.model";

@Entity({ name: 'matches' })
export class Match extends HasUpdateCreateDateColumns {

    @PrimaryGeneratedColumn('uuid', { name: 'match_id' })
    matchId: string;

    @Column({ type: 'datetime', nullable: false, name: 'date_ini' })
    dateIni: Date;

    @Column({ type: 'datetime', nullable: false, name: 'date_end' })
    dateEnd: Date;

    @Column({ type: 'enum', nullable: false, enum: GameModes, name: 'game_mode' })
    gameMode: GameModes;
}
