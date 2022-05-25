import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/user/services/auth.service';
import { account } from '../../interfaces/account.interface';
import { listAccount } from '../../interfaces/listAccount.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    public listUser: Array<account> = [];
    public subscriber: Subscription = new Subscription();
    constructor(private adminService: AdminService, private authService: AuthService) { }

    ngOnInit(): void {
        this.findUsers();
        this.subscriber = this.adminService.subjectListAccount.subscribe(
            () => {
                this.findUsers();
            }
        )
    }

    public findUsers(): void {
        this.adminService.findAccounts().subscribe(
            (listAccount: listAccount) => {
                if(listAccount.Code == '200') {
                    this.listUser = listAccount.Accounts;
                }
            }
        )
    }
}
