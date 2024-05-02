import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { HasUpdateCreateDateColumns } from "../models/update-create-columns.model";
import { WeaponTypes } from "../__types";

@Entity({ name: 'weapons' })
export class Weapon extends HasUpdateCreateDateColumns {

    @PrimaryGeneratedColumn('uuid', { name: 'weapon_id' })
    weaponId: string;

    @Column('varchar')
    name: string;

    @Column({
        type: 'enum',
        enum: WeaponTypes,
        name: 'weapon_type'
    })
    weaponType: WeaponTypes

    @Column({ type: 'int', nullable: false })
    price: number;

    @Column({ type: 'int', nullable: false })
    damage: number;

    @Column({
        type: 'int',
        nullable: false,
        name: 'rate_of_fire'
    })
    rateOfFire: number;

    @Column({ type: 'varchar', nullable: false })
    accuracy: string;
}
