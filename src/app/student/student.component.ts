import { Component, OnInit } from '@angular/core';

import { Std } from '../std';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentdataService]
})
export class StudentComponent implements OnInit {

  constructor(private sservice:StudentdataService) { }

  students:Std[]=[];
  
  
  ngOnInit() {
    //this.students = this.sservice.getAll();
    console.log("oninit");
    this.sservice.getAll().subscribe(
      a=>{
        this.students = a.json();
      }
    );
   

  
        
  }
  
  
}
