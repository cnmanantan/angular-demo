import { Component, OnInit, Input, ViewChild, SimpleChange } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Item, DataSourceItem, DataSourceInterface } from '@app/models/items';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() items: Array<DataSourceItem> = [];
  @Input() displayedColumns: Array<string> = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(simpleChange: SimpleChange) {
    if(simpleChange && simpleChange['items'] && simpleChange['items'].currentValue) {
      this.dataSource.data = simpleChange['items'].currentValue;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
