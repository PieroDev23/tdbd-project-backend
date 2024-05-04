import { Router } from "express";


export type Route = {
    name: string;
    router: Router
}

export enum WeaponTypes {
    ASSAULT_RIFFLE = 'ASSAULT_RIFFLE',
    PISTOL = 'PISTOL',
    SNIPER = 'SNIPER',
}

export enum AgentRoles {
    DUELIST = 'DUELIST',
    INITIATORS = 'INTIATORS',
    SENTINELS = 'SENTINELS',
    CONTROLLERS = 'CONTROLLERS'
}

export enum Leagues {
    UNRANKED = 'UNRAKEND',
    BRONZE = 'BRONZE',
    SILVER = 'SILVER',
    GOLD = 'GOLD',
    PLAT = 'PLATINUM',
    DIAMOND = 'DIAMOND',
    IMMORTAL = 'IMMORTAL',
    RADIANT = 'RADIANT'
}

export enum GameModes {
    DEATH_MATCH = 'DTM',
    RANKED = 'RNK',
    CUSTOM = 'CUS'
}

export enum Behaviors {
    CHEATER = 'CHEATER',
    NORMAL = 'NORMAL'
}