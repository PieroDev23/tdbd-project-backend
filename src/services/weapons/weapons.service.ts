import { WeaponTypes } from "../../__types";
import { Weapon } from "../../entities";
import { WeaponsRepository } from "../../repositories/weapons.repository";


interface WeaponGroups {
    assaultRiffles: Weapon[];
    pistols: Weapon[];
    snipers: Weapon[];
}

export class WeaponsService {

    async getWeapons() {
        const weaponRepo = new WeaponsRepository();
        const weapons = await weaponRepo.getAll();
        return this.groupWeaponsByType(weapons);
    }

    groupWeaponsByType(weapons: Weapon[]) {

        return weapons.reduce((groups: WeaponGroups, current: Weapon) => {
            const { weaponType } = current;

            switch (weaponType) {
                case WeaponTypes.PISTOL:
                    groups.pistols.push(current);
                    break;
                case WeaponTypes.ASSAULT_RIFFLE:
                    groups.assaultRiffles.push(current);
                    break;
                case WeaponTypes.SNIPER:
                    groups.snipers.push(current);
                    break;
                default:
                    break;
            }

            return groups;
        }, { assaultRiffles: [], pistols: [], snipers: [] });

    }

}