import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player.entity";

@Entity()
export class BlackList {

    @PrimaryGeneratedColumn('uuid', { name: 'register_id' })
    registerId: string;

    @OneToOne((type) => Player, { eager: true, cascade: true })
    @JoinColumn({ name: 'player_id' })
    player: Player;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
