import { Component, OnInit } from '@angular/core';
import { Wine } from './../wine';
import { WineService } from './../wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines : Wine[];

  constructor(
    private wineService : WineService
  ) { }


  getWines(): void {
    this.wineService.getWines().then(wines => this.wines = wines);
  }
  ngOnInit(): void {
    this.getWines();
  }

}
