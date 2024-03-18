import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public  characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100
    },
  ];

  emitOnDeleteId(index:number):void{
    this.onDeleteId.emit(index);
  }

  onDeleteCharacter (index : number): void{
   console.log(index)
   this.characterList.splice(index);
  }

}
