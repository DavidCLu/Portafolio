import { animate } from '@angular/animations';
import { EventEmitter } from '@angular/core';
import { Component, Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
@Input('moduleOpen') moduleState = false;
@Input('boxSide') faceSideIdValue = "";

@Output()  closeComponent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.moduleState)
    
  }
  clickExit(){
    this.closeComponent.emit(false)
    //console.log("about"+this.moduleState)
  }
}
