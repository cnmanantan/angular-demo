import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Item, DataSourceItem, DataSourceInterface } from '@app/models/items';
import { MatSort } from '@angular/material/sort';

import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  items : any = [];
  displayedColumns: Array<string> = ['image', 'title', 'type', 'author', 'publisher'];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(res => {
      const temp : Array<DataSourceInterface> = [];
      res.forEach((item : Item) => {
        temp.push(DataSourceItem.create(item));
      });

      this.items = temp ;
    });
  }
}
