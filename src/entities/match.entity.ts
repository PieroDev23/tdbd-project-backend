import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GameModes } from "../__types";
import { Map } from "./map.entity";
import { Team } from "./team.entity";
import { Stadistic } from "./stadistic.entity";

@Entity({ name: 'matches' })
export class Match {

    @PrimaryGeneratedColumn('uuid', { name: 'match_id' })
    matchId: string;

    @Column({ type: 'datetime', nullable: false, name: 'date_ini' })
    dateIni: Date;

    @Column({ type: 'datetime', nullable: false, name: 'date_end' })
    dateEnd: Date;

    @Column({ type: 'enum', nullable: false, enum: GameModes, name: 'game_mode', default: GameModes.RANKED })
    gameMode: GameModes;

    @OneToOne((type) => Map, { eager: true, cascade: true })
    @JoinColumn({ name: 'map_id' })
    map: Map;

    @OneToMany(() => Team, (team) => team.match)
    teams: Team[];

    @OneToMany((type) => Stadistic, (stat) => stat.match)
    stadistics: Stadistic[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
