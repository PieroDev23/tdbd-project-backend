import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
import { Player } from "./player.entity";
import { Agent } from "./agent.entity";



@Entity({ name: 'teams_players' })
export class TeamPlayer {
    @PrimaryGeneratedColumn('uuid', { name: 'team_player_id' })
    teamPlayerId: string;

    @ManyToOne(() => Team, (team) => team.teamPlayers)
    @JoinColumn({ name: 'team_id' })
    team: Team;

    @ManyToOne(() => Player, (player) => player.playersByTeam)
    @JoinColumn({ name: 'player_id' })
    player: Player;

    @ManyToOne(() => Agent, (agent) => agent.playersWithAgents)
    @JoinColumn({ name: 'agent_id' })
    agent: Agent;
}