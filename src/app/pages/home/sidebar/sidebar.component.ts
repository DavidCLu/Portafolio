import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarList = [
      {
      number: '1',
      name: 'About',
      icon: 'bi bi-person-vcard-fill',
      ref: "about"
      },
      {
        number: '2',
        name: 'My Skills',
        icon: 'bi bi-clipboard-data',
        ref:"skill"
      },
      {
        number: '3',
        name: 'Works',
        icon: 'bi bi-controller',
        ref:"works"
      },
      {
        number: '4',
        name: 'Contact',
        icon: 'bi bi-telephone-fill',
        ref:"contact"
      }


]

  slidebar: boolean;
  constructor() {
    this.slidebar= false ;
  }
  
  ngOnInit(): void {
  }
  showSlidebar(sidebar:boolean){
    this.slidebar = sidebar;
  }
}
