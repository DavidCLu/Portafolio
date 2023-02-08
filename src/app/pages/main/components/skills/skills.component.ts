import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  public spherewidth:number=300;
  constructor() { }
  
  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.skillSphere()
    

  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

  }
  


  
  skillSphere(){
        /**skilss */
        const TagCloud = require('TagCloud');
        const container = '.tagcloud';
        const texts = [
          '.NET','ANGULAR','JAVASCRIPT','MYSQL','ENTITY FRAMEWORK','LINQ','MVC','C#','DDBB','HTML','PHP','CSS','BOOTSTRAP'
        ];
        const options = {
          radius: 250,
          maxSpeed: 'fast',
          initSpeed: 'normal',//normal
          direction: 135,
          keep: 135,
        };
        
         TagCloud(container, texts, options);
       
        delete TagCloud[""];
        
  }
  
}
