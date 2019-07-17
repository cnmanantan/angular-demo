import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  showDirective : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDirectiveDisplay = () => { console.log('toggle')
    this.showDirective = !this.showDirective;
  }
}
