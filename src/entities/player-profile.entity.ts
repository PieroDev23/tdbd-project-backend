import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Leagues } from "../__types";
import { Agent } from "./agent.entity";
import { Weapon } from "./weapon.entity";
import { Player } from "./player.entity";

@Entity({ name: 'players_profiles' })
export class PlayerProfile {

    @PrimaryColumn({ type: 'uuid', name: 'profile_id' })
    profileId: string;

    @Column({ type: 'varchar', nullable: false })
    region: string;

    @Column({ type: 'varchar', name: 'profile_image_url' })
    profileImageUrl: string;

    @Column({ type: 'int', nullable: false })
    global_rank: number;

    @Column({ type: 'int', nullable: false })
    regional_rank: number;

    @Column({ type: 'enum', nullable: false, enum: Leagues, default: Leagues.UNRANKED })
    league: string;

    @ManyToMany(type => Agent)
    @JoinTable({
        name: "player_profile_agents",
        joinColumn: { name: "profile_id", referencedColumnName: "profileId" },
        inverseJoinColumn: { name: "agent_id", referencedColumnName: "agentId" }
    })
    mainCharacters: Agent[];

    @ManyToMany(type => Weapon)
    @JoinTable({
        name: "player_profile_weapons",
        joinColumn: { name: "profile_id", referencedColumnName: "profileId" },
        inverseJoinColumn: { name: "weapon_id", referencedColumnName: "weaponId" }
    })
    mainWeapons: Weapon[];

    @OneToOne(type => Player)
    @JoinColumn({ name: 'player_id' })
    player: Player;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'int', default: null })
    mmr: number;
}
