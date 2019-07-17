import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClient } from '@angular/common/http';

class MockApiService {
  getData() {
    const result = [
      {
        id: "1",
        type: "books",
        links: {
          self: "http://www.example.com/books/1"
        },
        attributes: {
          urn: "urn:perx:nginterview::123456789:question/1",
          created_at: "2019-06-05T17:42:58.876Z",
          updated_at: "2019-06-05T17:42:58.876Z",
          content: "The Great Gatsby",
          properties: null,
          display_properties: {
            type: "Hard cover",
            image: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg",
          },
        },
        relationships: {
          authors: {
            links: {
              self: "http://www.example.com/books/1/relationships/authors",
              related: "http://www.example.com/books/1/authors",
            }
          },
          publishers: {
            links: {
              self: "http://www.example.com/books/1/relationships/publishers",
              related: "http://www.example.com/books/1/publishers",
            }
          }
        }
      }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), 300);
  });
  }
}

describe('Dashboard Page', () => {
  let component: LandingComponent;
  let service: MockApiService;

  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      imports: [ SharedModule ],
      providers: [ MockApiService, HttpClient ]
    })
    .compileComponents();
    service = TestBed.get(MockApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
