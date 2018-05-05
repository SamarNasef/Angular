import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import { Std } from '../std';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  constructor(private r:Router,private ar:ActivatedRoute,private sservice:StudentdataService ) { }
  id:number;
  data:Std;
  stdname:string;
  stdage:string;
  ngOnInit() {
    //console.log(this.ar.snapshot.params['id']);
    this.ar.params.subscribe(
      (a:Params)=>{
        
        this.id=a['id'];
        
        //this.data= this.sservice.getById(this.id);
        this.sservice.getById(this.id).subscribe(
          a=>{
            this.data = a.json();
            
            
                     
          }
        );
        
        
      }
    );
   
  }
  editstd(){

    //console.log(this.id);
    this.sservice.update(new Std(this.id,this.stdname,parseInt(this.stdage))).subscribe(
      a=>{
      console.log(a.json());
      this.r.navigate(['/student/refresh']);
      }
    );

  }


}
