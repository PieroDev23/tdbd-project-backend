import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerProfile } from './player-profile.entity';
import { TeamPlayer } from './teamPlayers.entity';

@Entity({ name: 'players' })
export class Player {
    @PrimaryGeneratedColumn('uuid', { name: 'player_id' })
    playerId: string;

    @Column('varchar')
    nickname: string;

    @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer)
    playersByTeam: TeamPlayer[];
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}