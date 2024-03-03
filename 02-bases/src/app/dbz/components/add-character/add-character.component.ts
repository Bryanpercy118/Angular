import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public characters:Character[]= [
    {
      name: 'Krillin',
      power: 100
    },
    {
      name: 'Goku',
      power: 300
    }
  ];
}
