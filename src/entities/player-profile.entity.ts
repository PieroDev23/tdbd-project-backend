import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { HasUpdateCreateDateColumns } from "../models/update-create-columns.model";
import { Leagues } from "../__types";
import { Weapon } from "./weapon.entity";
import { Agent } from "./agent.entity";

@Entity({ name: 'players_profiles' })
export class PlayerProfile extends HasUpdateCreateDateColumns {

    @PrimaryColumn({ type: 'uuid', name: 'profile_id' })
    profileId: string;

    @Column({ type: 'varchar', nullable: false })
    region: string;

    @Column({ type: 'int', nullable: false })
    global_rank: number;

    @Column({ type: 'int', nullable: false })
    regional_rank: number;

    @Column({ type: 'enum', nullable: false, enum: Leagues, default: Leagues.UNRANKED })
    league: string;

    @OneToOne((type) => Agent, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'main_character' })
    mainCharacter: Agent;

    @OneToOne((type) => Weapon, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'main_weapon' })
    mainWeapon: Weapon;
}
