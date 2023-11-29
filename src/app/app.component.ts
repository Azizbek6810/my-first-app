import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  prop!: string;
  cartTitle= ''
  handleClick(value: string){
    this.cartTitle = value
  }
}
