import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Player } from "./player.entity";
import { Match } from "./match.entity";
import { Behaviors } from "../__types";

@Entity({ name: 'stadistics' })
export class Stadistic {
    @PrimaryGeneratedColumn('uuid', { name: 'stadisctic_id' })
    stadisticId: string;

    @Column({ type: 'int', default: '0' })
    deaths: number;

    @Column({ type: 'int', default: '0' })
    kills: number;

    @Column({ type: 'int', default: '0' })
    assistances: number;

    @Column({ type: 'int', default: '0' })
    money: number;

    @Column({ type: 'int', default: '0', name: 'winning_rounds' })
    winningRounds: number;

    @Column({ type: 'int', default: '0', name: 'loosing_rounds' })
    loosingRounds: number;

    @Column({ type: 'enum', enum: Behaviors, default: Behaviors.NORMAL, name: 'player_behavior' })
    playerBehavior: Behaviors;

    @OneToOne((type) => Player, { eager: true, cascade: true })
    @JoinColumn({ name: 'player_id' })
    player: Player;

    @OneToOne((type) => Match, { eager: true, cascade: true })
    @JoinColumn({ name: 'match_id' })
    match: Match;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
