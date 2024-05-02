import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { HasUpdateCreateDateColumns } from '../models/update-create-columns.model';

@Entity({ name: 'maps' })
export class Map extends HasUpdateCreateDateColumns {

    @PrimaryGeneratedColumn('uuid', { name: 'map_id' })
    mapId: string;

    @Column('varchar')
    name: string;
}