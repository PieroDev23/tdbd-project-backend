import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'maps' })
export class Map  {

    @PrimaryGeneratedColumn('uuid', { name: 'map_id' })
    mapId: string;

    @Column('varchar')
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}