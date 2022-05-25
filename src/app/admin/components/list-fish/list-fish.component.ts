import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/user/services/auth.service';
import { account } from '../../interfaces/account.interface';
import { listAccount } from '../../interfaces/listAccount.interface';
import { typeFish } from '../../interfaces/typeFish.interface';
import { typeFishes } from '../../interfaces/typeFishes.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list-fish',
  templateUrl: './list-fish.component.html',
  styleUrls: ['./list-fish.component.scss']
})
export class ListFishComponent implements OnInit {

    public listFish: Array<typeFish> = [];
    public subscriber: Subscription = new Subscription();

    constructor(private adminService: AdminService, private authService: AuthService) { }

    ngOnInit(): void {
        this.findFish();
        this.subscriber = this.adminService.subjectListFish.subscribe(
            () => {
                this.findFish();
            }
        )
    }

    public findFish(): void {
        this.adminService.findTypeFish().subscribe(
            (listFish: typeFishes) => {
                if(listFish.Code == '200') {
                    this.listFish = listFish.TypeFishes;
                }
            }
       )
    }
}
