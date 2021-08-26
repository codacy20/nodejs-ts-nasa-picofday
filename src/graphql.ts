
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PatchSize {
    SMALL = "SMALL",
    LARGE = "LARGE"
}

export interface Launch {
    id: string;
    site?: Nullable<string>;
    mission?: Nullable<Mission>;
    rocket?: Nullable<Rocket>;
    isBooked: boolean;
}

export interface Rocket {
    id: string;
    name?: Nullable<string>;
    type?: Nullable<string>;
}

export interface Mission {
    name?: Nullable<string>;
    missionPatch?: Nullable<string>;
}

export interface IQuery {
    launches(): Nullable<Launch>[] | Promise<Nullable<Launch>[]>;
    launch(id: string): Nullable<Launch> | Promise<Nullable<Launch>>;
}

type Nullable<T> = T | null;
