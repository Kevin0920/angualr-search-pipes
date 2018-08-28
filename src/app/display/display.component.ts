import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataDetail } from '../services/dataInfo';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {
  private requestData: any;
  filterText: string;
  dataList: [DataDetail];

  constructor(private _service: MainService) { }

  ngOnInit() {
    this.requestData = this._service.getAllData().subscribe(data => {
      this.dataList = data as [DataDetail];
      console.log(this.dataList);
    });
  }

  ngOnDestroy() {
    this.requestData.unsubscribe();
  } 
}
