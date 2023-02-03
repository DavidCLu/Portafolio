import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/home/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { CubeComponent } from './pages/main/components/cube-in/cube.component';
import { CubeFaceFrontComponent } from './pages/main/components/cube-in/cube-face-front/cube-face-front.component';
import { CubeFaceBackComponent } from './pages/main/components/cube-in/cube-face-back/cube-face-back.component';
import { CubeFaceRightComponent } from './pages/main/components/cube-in/cube-face-right/cube-face-right.component';
import { CubeFaceLeftComponent } from './pages/main/components/cube-in/cube-face-left/cube-face-left.component';
import { CubeFaceTopComponent } from './pages/main/components/cube-in/cube-face-top/cube-face-top.component';
import { CubeFaceBottomComponent } from './pages/main/components/cube-in/cube-face-bottom/cube-face-bottom.component';
import { AboutComponent } from './pages/main/components/about/about.component';
import { SkillsComponent } from './pages/main/components/skills/skills.component';
import { ContactComponent } from './pages/main/components/contact/contact.component';

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
    CubeFaceBottomComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
