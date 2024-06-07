import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "./match.entity";
import { Player } from "./player.entity";

@Entity({ name: 'stadistics' })
export class Stadistic {
    @PrimaryGeneratedColumn('uuid', { name: 'stadisctic_id' })
    statId: string;

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

    @ManyToOne((type) => Player, (player) => player.stadisctic)
    @JoinColumn({ name: 'player_id' })
    player: Player;

    @ManyToOne((type) => Match, (match) => match.stadistics)
    @JoinColumn({ name: 'match_id' })
    match: Match;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
