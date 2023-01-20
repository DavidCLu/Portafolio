import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/home/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CubeComponent } from './pages/main/components/cube-in/cube.component';
import { CubeFaceFrontComponent } from './pages/main/components/cube-in/cube-face-front/cube-face-front.component';
import { CubeFaceBackComponent } from './pages/main/components/cube-in/cube-face-back/cube-face-back.component';
import { CubeFaceRightComponent } from './pages/main/components/cube-in/cube-face-right/cube-face-right.component';
import { CubeFaceLeftComponent } from './pages/main/components/cube-in/cube-face-left/cube-face-left.component';
import { CubeFaceTopComponent } from './pages/main/components/cube-in/cube-face-top/cube-face-top.component';
import { CubeFaceBottomComponent } from './pages/main/components/cube-in/cube-face-bottom/cube-face-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    CubeComponent,
    CubeFaceFrontComponent,
    CubeFaceBackComponent,
    CubeFaceRightComponent,
    CubeFaceLeftComponent,
    CubeFaceTopComponent,
    CubeFaceBottomComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
