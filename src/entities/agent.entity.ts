import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { AgentRoles } from "../__types";
import { TeamPlayer } from "./teamPlayers.entity";
import { Team } from "./team.entity";

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

    @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer.agent)
    playersWithAgents: TeamPlayer[]

    @Column({ type: 'varchar', nullable: false })
    ultimate: string;

    @Column({ type: 'varchar', nullable: true, name: 'agent_url' })
    agentUrl: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
