import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {Routes , RouterModule} from "@angular/router";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentdeleteComponent } from './studentdelete/studentdelete.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentdataService } from './studentdata.service';
import {FormsModule} from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';


import {HttpModule} from '@angular/http';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent,children:[
    {path:'add',component:AddstudentComponent},
    {path:'edit/:id',component:StudenteditComponent},
    {path:'delete/:id',component:StudentdeleteComponent},
    {path:'details/:id',component:StudentdetailsComponent}
    
  ]},
  {path:'student/refresh',component:StudentComponent},
    
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    StudentdeleteComponent,
    StudentdetailsComponent,
    StudenteditComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule
  ],
  providers: [StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
