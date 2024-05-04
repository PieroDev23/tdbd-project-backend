import { Column, Entity, PrimaryColumn } from "typeorm"
import { AgentRoles } from "../__types";

@Entity({ name: 'agents' })
export class Agent {

    @PrimaryColumn({ type: 'uuid', name: 'agent_id' })
    agentId: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({
        type: 'enum',
        enum: AgentRoles,
        name: 'agent_role'
    })
    agentRole: AgentRoles;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'primary_skill'
    })
    primarySkill: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'secondary_skill'
    })
    secondarySkill: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'tertiary_skill'
    })
    tertiarySkill: string;

    @Column({ type: 'varchar', nullable: false })
    ultimate: string;
}
