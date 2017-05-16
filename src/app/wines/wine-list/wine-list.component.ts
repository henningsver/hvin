import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Wine } from './../wine';
import { WineService } from './../wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines : Wine[];
  selectedWine : Wine;

  constructor(
    private wineService : WineService
  ) { }

  @ViewChild('childModal') public childModal:ModalDirective;

  getWines(): void {
    this.wineService.getWines().then(wines => this.wines = wines);
  }
  ngOnInit(): void {
    this.getWines();
  }
  onSelect(wine: Wine): void {
    this.selectedWine = wine;
    console.log("Vin: " + wine._id);
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

}
