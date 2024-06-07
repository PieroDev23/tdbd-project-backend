import { WeaponTypes } from "../../__types";
import { Weapon } from "../../entities";


interface WeaponGroups {
    assaultRifle: Weapon[];
    pistol: Weapon[];
    sniper: Weapon[];
}



export class WeaponsService {

    groupAgentsByRole(agents: Weapon[]) {

        return agents.reduce((groups: WeaponGroups, current: Weapon) => {
            const { weaponType } = current;

            switch (weaponType) {
                case WeaponTypes.PISTOL:
                    groups.pistol.push(current);
                    break;
                case WeaponTypes.ASSAULT_RIFFLE:
                    groups.assaultRifle.push(current);
                    break;
                case WeaponTypes.SNIPER:
                    groups.sniper.push(current);
                    break;
                default:
                    break;
            }

            return groups;
        }, { assaultRifle: [], pistol: [], sniper: [] });

    }

}