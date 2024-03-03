import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.pages.component.html'
})

export class MainPageComponent implements OnInit {
  constructor() { }

  public characters: Character[]=[{
    name: 'Goku',
    power: 100
  }];

  ngOnInit() { }
}
