import { Target } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
    clickY:number=0 ;
    clickX:number=0 ;
    moveX:number=0 ;
    moveY:number=0 ;
    calcX:number = 0;
    calcY:number = 0;
    CubeValueX =  "";
    CubeValueY = "";
    prevX:number = 0;
    prevY:number = 0;
    readonly sensiti:number = 2;
    clickdown:boolean = false;
    styleNone = "boxRotate 30s infinite";
    modulestate:boolean = false;               //si es true abrira un modulo del cubo via Input
    faceSideIdValue:string = "";
    expandBox:boolean= false;
   constructor() { }
   
   ngOnInit(): void {
    /**skilss */
        const TagCloud = require('TagCloud');

        const container = '.tagcloud';
        const texts = [
          '.NET','ANGULAR','JAVASCRIPT','MYSQL','ENTITY FRAMEWORK','LINQ','MVC','C#','DDBB','HTML','PHP','CSS','BOOTSTRAP'
        ];
        const options = {
          radius: 300,
          maxSpeed: 'fast',
          initSpeed: 'normal',//normal
          direction: 135,
          keep: 135,
        };

    TagCloud(container, texts, options);
  }


  //Boton click para mover cubo
  boxClickdown(e:MouseEvent){
    this.styleNone="none";
    this.expandBox=true;
   
    //Obtenermos las coordenadas X e Y.
    this.clickY = e.pageY;
    this.clickX = e.pageX;
    
    this.clickdown =true;
  }
  
  boxMove(e:MouseEvent){

      if(this.clickdown== true){

          this.moveX = e.pageX;
          this.moveY = e.pageY;

          //Obtener valor de las coordenadas desde el click al movimiento move.
          this.calcY = (this.clickY  -this.moveY) / this.sensiti;
          this.calcX = (this.moveX  -this.clickX) / this.sensiti;

          //Calcular valor transform del ngStyle del cubo, + las ultimas coordenadas del valor del cubo.
          this.CubeValueY = (this.calcY + this.prevY)/100 + "deg" ;
          this.CubeValueX = (this.calcX + this.prevX)/100 + "deg" ;

          //Obtener ultimo valor de las coordenadas del cubo
          this.prevY += this.calcY ;
          this.prevX += this.calcX;
      }
  }
  boxclickup(){
      this.expandBox= false;
      this.clickdown =false;
  }

  boxAutoRotate(){
    this.styleNone = "boxRotate 50s infinite";
    this.prevX=0;
    this.prevY=0
  }



  open(e: any){
    this.modulestate = true;
    console.log(this.modulestate)
    this.faceSideIdValue = e.currentTarget.id
    
  }

  moduleClose($event: any){
    
    this.modulestate =$event;
    
  }

  faceSideId(e: any){
    console.log(e.currentTarget.id)
    this.faceSideIdValue = e.currentTarget.id
    this.modulestate = true;

  }


  /********************************************* */
  
}

// // 
// // console.log("calc"+ this.calc)

// this.CubeValueX = X + "deg" ;
// console.log(this.CubeValueX);