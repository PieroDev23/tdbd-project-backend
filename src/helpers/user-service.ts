import { Singleton } from "../models"

export const useService = <T>(service: new () => T) => {
    return Singleton.getInstance(service)
}