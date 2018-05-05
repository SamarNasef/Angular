import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../studentdata.service';
import { Std } from '../std';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  stdname:string;
  stdage:string;
  stdid:string;



  constructor(private r:Router,private sservice:StudentdataService) { }

  ngOnInit() {
    

  }
  addstd(){
    this.sservice.add(new Std(parseInt(this.stdid),this.stdname,parseInt(this.stdage))).subscribe(
      a=>{
        console.log(a.json());
        
        this.r.navigate(['/student/refresh']);

      }
    );

  }

}
