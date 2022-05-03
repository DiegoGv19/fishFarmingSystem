import { deviceAbbreviated } from './deviceAbbreviated.interface';

export interface fishFarmConfig {
    Name   : string;
    MinTemp: number;
    MaxTemp: number;
    MinPh  : number;
    MaxPh  : number;
    MinDo  : number;
    MaxDo  : number;
    Devices: Array<deviceAbbreviated>
    Code: string;
}