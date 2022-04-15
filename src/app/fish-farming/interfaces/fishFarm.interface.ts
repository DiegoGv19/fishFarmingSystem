import { deviceAbbreviated } from './deviceAbbreviated.interface';
export interface fishFarm {
    Name            : string;
    LastTemperature : number;
    LastPh          : number;
    LastDo          : number;
    Devices         : Array<deviceAbbreviated>;
    Code            : string;
}