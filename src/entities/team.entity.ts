import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player.entity";
import { Match } from "./match.entity";
import { TeamPlayer } from "./teamPlayers.entity";

@Entity({ name: 'teams' })
export class Team {
    @PrimaryGeneratedColumn('uuid', { name: 'team_id' })
    teamId: string;

    @Column({ name: 'team_color', type: 'varchar', nullable: false })
    teamColor: string;

    @ManyToOne(type => Match, (match) => match.teams)
    @JoinColumn({ name: 'match_id' })
    match: Match;

    @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer.team)
    teamPlayers: TeamPlayer[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}   
