import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { WeaponTypes } from "../__types";

@Entity({ name: 'weapons' })
export class Weapon {

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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
