import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player.entity";

@Entity({ name: 'teams' })
export class Team {
    @PrimaryGeneratedColumn('uuid', { name: 'team_id' })
    teamId: string;

    @Column({ name: 'team_color', type: 'varchar', nullable: false })
    teamColor: string;

    @ManyToMany((type) => Player)
    @JoinTable({
        name: 'team_players',
        joinColumn: { name: 'team_id' },
        inverseJoinColumn: { name: 'player_id' }
    })
    players: Player[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}   
