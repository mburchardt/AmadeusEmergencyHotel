import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../cards/cards.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {

  }

  getHotelsByCity(lat, long) {
    this.cardsService.getHotelByCity(lat, long);
  }

}
