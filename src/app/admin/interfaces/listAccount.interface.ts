import { account } from "./account.interface"

export interface listAccount {
    Accounts: Array<account>;
    Code: string;
    Message: string;
    Type: string;
}