import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-shoddy-history',
  templateUrl: './shoddy-history.component.html',
  styleUrls: ['./shoddy-history.component.scss']
})
export class ShoddyHistoryComponent {
    private sub    : any;
    public id      : string = '';
    public subMenus: Array<SubMenu> = [];

    public constructor(private activateRoute: ActivatedRoute, private fishFarmService: FishFarmService) {}

    public ngOnInit() {
        this.sub = this.activateRoute.params.subscribe( 
            (params) => {
                this.id = params['id'];
                console.log(this.id);
                this. subMenus =  [
                    {
                        name: 'Volver',
                        url: ['fish-farm/view', this.fishFarmService.fishFarmId],
                        image: '',
                        template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
                    }
                ]
          });
    }
  
  public ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
