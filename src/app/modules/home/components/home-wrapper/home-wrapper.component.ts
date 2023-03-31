import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/ToDo';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {

  toDo: string = "Test";
  todoArray: ToDo[] | undefined;

  constructor() { }

  ngOnInit(): void {

    this.SetProp();
    
  }

  SetProp() {
    
    this.todoArray = new Array<any>();

  }

  addToArrayOfToDoList() {
    
    debugger;
    let newToDo: ToDo = new ToDo(1, this.toDo, false);

    this.todoArray?.push(newToDo);

  }

}
