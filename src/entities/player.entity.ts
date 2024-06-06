import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerProfile } from './player-profile.entity';

@Entity({ name: 'players' })
export class Player {
    @PrimaryGeneratedColumn('uuid', { name: 'player_id' })
    playerId: string;

    @Column('varchar')
    nickname: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}