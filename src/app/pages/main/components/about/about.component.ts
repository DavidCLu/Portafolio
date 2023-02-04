import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  scroll:number=1;
  scroll1:number=1;
  moveLeft:boolean=false;
  moveRight:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event: any) {
    // console.log(window.pageYOffset);
    this.scroll = window.pageYOffset;
    
    if(this.scroll > 550 ){
      this.moveRight= false;
      this.moveLeft = true;
      //  this.transport = this.scroll - 1000
     
      // console.log(this.transport)
    }
    if(this.scroll < 700  ){
      this.moveLeft = false
      this.moveRight = true
    console.log(this.moveLeft)} 

    
   
}

}



