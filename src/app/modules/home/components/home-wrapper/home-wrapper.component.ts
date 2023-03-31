import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/ToDo';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {

  toDo: string = "Test";
  todoArray: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {

    this.SetProp();
    
  }

  SetProp() {
    
    this.todoArray = new Array<any>();

  }

  addToArrayOfToDoList() {
    
    debugger;
    let newToDo: ToDo = new ToDo(this.todoArray.length + 1, this.toDo, true);

    this.todoArray?.push(newToDo);

  }

  toggleIsComplete(id : number, newValueForIsComplete: boolean) {

    debugger;
    let theToDoWeWant: any = this.todoArray.find(todo => todo.id == id);

    theToDoWeWant.isComplete = newValueForIsComplete;

    
  }

}
