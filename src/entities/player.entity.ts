import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { HasUpdateCreateDateColumns } from '../models/update-create-columns.model';
import { PlayerProfile } from './player-profile.entity';

@Entity({ name: 'players' })
export class Player extends HasUpdateCreateDateColumns {

    @PrimaryGeneratedColumn('uuid')
    player_id: string;

    @Column('varchar')
    nickname: string;

    @OneToOne((type) => PlayerProfile, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'profile_id' })
    profile: PlayerProfile;
}