import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { HasUpdateCreateDateColumns } from "../models/update-create-columns.model";

@Entity({ name: 'teams' })
export class Team extends HasUpdateCreateDateColumns {
    @PrimaryGeneratedColumn('uuid', { name: 'team_id' })
    teamId: string;

    @Column({ name: 'team_color', type: 'varchar', nullable: false })
    teamColor: string;
}
