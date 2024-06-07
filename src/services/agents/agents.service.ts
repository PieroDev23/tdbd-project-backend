import { AgentRoles } from "../../__types";
import { Agent } from "../../entities";
import { AgentsRepository } from "../../repositories";



interface AgentGroups {
    controllers: Agent[];
    sentinels: Agent[];
    duelists: Agent[];
    initiators: Agent[];
}

export class AgentsService {

    async getAgents(): Promise<any> {
        const repo = new AgentsRepository();
        const agents = await repo.findAgents();
        return this.groupAgentsByRole(agents);
    }


    groupAgentsByRole(agents: Agent[]) {

        return agents.reduce((groups: AgentGroups, current: Agent) => {
            const { agentRole } = current;

            switch (agentRole) {
                case AgentRoles.CONTROLLER:
                    groups.controllers.push(current);
                    break;
                case AgentRoles.DUELIST:
                    groups.duelists.push(current);
                    break;
                case AgentRoles.INITIATOR:
                    groups.initiators.push(current);
                    break;
                case AgentRoles.SENTINEL:
                    groups.sentinels.push(current);
                    break;
                default:
                    break;
            }

            return groups;
        }, { controllers: [], sentinels: [], duelists: [], initiators: [] });

    }


}