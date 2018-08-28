import { Component, OnInit, OnDestroy} from '@angular/core';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { DataDetail } from '../services/dataInfo';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  private req: any;
  // search url will be like search/:id as params
  private routeSub: any;
  query: string;
  dataList: [DataDetail];
 
  constructor(private _service: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(
      params => {
        this.query = params['q']
        this.req = this._service.search(this.query).subscribe(
          data => {
            this.dataList = data as [DataDetail];
            // console.log(this.dataList);
          }
        )
      }
    )

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
