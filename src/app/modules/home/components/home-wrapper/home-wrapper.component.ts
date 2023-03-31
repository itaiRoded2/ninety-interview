import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {

  toDo: string = "Test";
  todoArray: any[] | undefined;

  constructor() { }

  ngOnInit(): void {

    this.SetProp();
    
  }

  SetProp() {
    
    this.todoArray = new Array<any>();

  }

  addToArrayOfToDoList() {
    
    debugger;
    
    this.todoArray?.push(this.toDo);

  }
  
}
