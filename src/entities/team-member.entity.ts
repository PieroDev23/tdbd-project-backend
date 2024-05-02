import { Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { HasUpdateCreateDateColumns } from "../models/update-create-columns.model";

@Entity({ name: 'teams_members' })
export class TeamMember extends HasUpdateCreateDateColumns {
    
}
