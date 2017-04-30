import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// material
import {MdButtonModule, MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material'



import { AppComponent }  from './app.component';
import { LeftPanelComponent }  from './left/left.component';
import { RightPanelComponent }  from './right/right.component';
import { WorkspaceComponent }  from './workspace/workspace.component';
import { WordComponent }  from './workspace/word.component';
import {MdChipsModule} from '@angular/material'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    //material
    MdButtonModule,
    MdListModule,
    MdIconModule,MdSidenavModule,
    MdChipsModule
  ],
  declarations: [
    AppComponent, LeftPanelComponent, RightPanelComponent, WorkspaceComponent, WordComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
