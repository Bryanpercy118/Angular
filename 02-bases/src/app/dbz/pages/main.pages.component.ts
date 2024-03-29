import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.pages.component.html'
})

export class MainPageComponent implements OnInit {
  constructor() { }

  public characters: Character[]=[
    {
    name: 'Goku',
    power: 400
    },
    {
      name: 'Vegueta',
      power: 150
    },
    {
      name: 'Trunks',
      power: 120
    }
];
  onNewCharacter( character : Character):void{

    this.characters.push(character);

  }

  onDeleteId(index:number):void{
    this.characters.splice(index,1);
  }


  ngOnInit() { }
}
