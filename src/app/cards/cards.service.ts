import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class CardsService {

  coords = null;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  getHotelByCity(lat, long) {
    this.coords = `${lat},${long}`;
    this.change.emit(this.coords);
  }

}
