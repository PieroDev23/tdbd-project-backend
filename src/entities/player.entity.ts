import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TeamPlayer } from './teamPlayers.entity';
import { Stadistic } from './stadistic.entity';

@Entity({ name: 'players' })
export class Player {
    @PrimaryGeneratedColumn('uuid', { name: 'player_id' })
    playerId: string;

    @Column('varchar')
    nickname: string;

    @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer)
    playersByTeam: TeamPlayer[];

    @OneToMany(() => Stadistic, (stadistic) => stadistic.player)
    stadisctic: Stadistic[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}