import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { historyView } from '../../interfaces/historyView.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-view-shoddy',
  templateUrl: './view-shoddy.component.html',
  styleUrls: ['./view-shoddy.component.scss']
})
export class ViewShoddyComponent implements OnInit, OnDestroy {
    private sub    : any;
    public historyView: historyView = {
        EventDate: '',
        EventTime: '',
        Temperature: '',
        Ph: '',
        Do: '',
        Code: '',
    }
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: ['fish-farm'],
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ]

    public constructor(private fishFarmService: FishFarmService, private activateRoute: ActivatedRoute){}
    
    public ngOnInit() {
        this.viewHistory();
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public viewHistory() {
        this.sub = this.activateRoute.params.subscribe(params => {
            this.fishFarmService.setHistoryId(params['id']);
            this.fishFarmService.findHistory().subscribe(
                (historyView: historyView) => {
                    if(historyView.Code = '200') {
                        this.historyView = historyView;
                    }
                }
            )
        });
    }
}
