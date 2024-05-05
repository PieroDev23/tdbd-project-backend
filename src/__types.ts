import { Request, Router } from "express";
import { z } from 'zod';
import { LoginSchema, RegisterSchema } from "./schemas";
import { Query } from 'express-serve-static-core';

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

export type InstanceableClass<T> = new () => T;

export type LoginRequest = z.infer<typeof LoginSchema>;
export type RegisterRequest = z.infer<typeof RegisterSchema>

export interface TypedRequest<T, U extends Query = any> extends Request {
    body: T,
    query: U
}

