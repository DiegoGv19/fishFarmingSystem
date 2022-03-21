import { Device } from './device.interface';
export interface fishFarm {
    Name            : string;
    LastTemperature : number;
    LastPh          : number;
    LastDo          : number;
    Devices         : Array<Device>;
    Code            : string;
}