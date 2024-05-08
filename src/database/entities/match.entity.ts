import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { GameModes } from "../../__types";

@Entity({ name: 'matches' })
export class Match {

    @PrimaryGeneratedColumn('uuid', { name: 'match_id' })
    matchId: string;

    @Column({ type: 'datetime', nullable: false, name: 'date_ini' })
    dateIni: Date;

    @Column({ type: 'datetime', nullable: false, name: 'date_end' })
    dateEnd: Date;

    @Column({ type: 'enum', nullable: false, enum: GameModes, name: 'game_mode' })
    gameMode: GameModes;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
