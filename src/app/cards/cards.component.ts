import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CardsService } from './cards.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  flip: any = [];
  hotels: any = [];
  coords: any = [];
  isLoading:boolean = true;

  constructor(public api: ApiService, private cardsService: CardsService) { }

  ngOnInit() {
    this.getHotels('4.624335', '-74.063644');
    this.cardsService.change.subscribe(coords => {
      this.coords = coords.split(",");
      this.isLoading = true;
      this.getHotels(this.coords[0], this.coords[1]);
    });
  }

  getHotels(lat, lon) {
    this.hotels = null;
    this.api.getHotels(lat, lon).subscribe((data: {}) => {
      this.hotels = data;
      this.isLoading = false;
    });
  }


  rotate(i) {
    this.flip[i] = !this.flip[i];
  }

}
