import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
	 test : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
