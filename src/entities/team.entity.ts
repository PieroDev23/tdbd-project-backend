import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player.entity";
import { Match } from "./match.entity";

@Entity({ name: 'teams' })
export class Team {
    @PrimaryGeneratedColumn('uuid', { name: 'team_id' })
    teamId: string;

    @Column({ name: 'team_color', type: 'varchar', nullable: false })
    teamColor: string;

    @ManyToMany((type) => Player)
    @JoinTable({
        name: 'team_players',
        joinColumn: { name: 'team_id', referencedColumnName: 'teamId' },
        inverseJoinColumn: { name: 'player_id', referencedColumnName: 'playerId' }
    })
    players: Player[];

    @ManyToOne(type => Match, (match) => match.teams)
    @JoinColumn({ name: 'match_id' })
    match: Match;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}   
