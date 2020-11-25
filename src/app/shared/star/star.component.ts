import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  //criarmos essa propriedade para emitir o evento de clique nas estrelas,
  // para vincular o evento colocamos um binding property no html do componente
  // star << (click)="onClick()", quando clicado através do método emit, o valor
  // desta propriedade [e passado para o component pai, devido ao binding event 
  // também colocado no html pai para ouvir o evento do component star onde 
  // << ratingClicked="onRatingClicked($event)">> então o componente pai consegue
  // passar para seu método o valor que o filho retornou.
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
