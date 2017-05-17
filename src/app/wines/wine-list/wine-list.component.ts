import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
    private wineService : WineService,
    private modalService: NgbModal
  ) { }


  getWines(): void {
    this.wineService.getWines().then(wines => this.wines = wines);
  }
  ngOnInit(): void {
    this.getWines();
  }
  onSelect(wine: Wine): void {
    this.selectedWine = wine;
    console.log("Vin: " + wine._id);

  }

  closeResult: string;


  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
