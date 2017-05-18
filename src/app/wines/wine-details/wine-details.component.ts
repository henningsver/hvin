import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  constructor() { }

  @Input() wine;

  ngOnInit() {
  }

}
