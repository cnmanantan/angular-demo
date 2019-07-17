import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

const displayedColumns = ['image', 'title', 'type', 'author', 'publisher'];
const items = [{
    id: "1",
    title: "The Great Gatsby",
    type: "Hard cover",
    author : {
      related: "http://www.example.com/books/1/authors",
      self: "http://www.example.com/books/1/relationships/authors"
    },
    publisher : {
      related: "http://www.example.com/books/1/publishers",
      self: "http://www.example.com/books/1/relationships/publishers"
    },
    image: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg",
    link: "http://www.example.com/books/1"
  }];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    console.log(fixture, component)
    component.displayedColumns = displayedColumns;
    fixture.detectChanges();
    component.items = items;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.displayedColumns = displayedColumns;
    component.items = items;
    expect(component).toBeTruthy();
  });
});
