import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import { Std } from '../std';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdelete',
  templateUrl: './studentdelete.component.html',
  styleUrls: ['./studentdelete.component.css']
})
export class StudentdeleteComponent implements OnInit {

 
  constructor(private r:Router,private ar:ActivatedRoute,private sservice:StudentdataService ) { }
  id:number;
  data:Std[]=[];
  ngOnInit() {
    //console.log(this.ar.snapshot.params['id']);
    this.ar.params.subscribe(
      (a:Params)=>{
        
        this.id=a['id'];
        console.log(a);
        
        //this.data= this.sservice.delete(this.id);
        this.sservice.delete(this.id).subscribe(
          a=>{
            this.data=a.json();
            this.r.navigate(['/student/refresh']);
            
          }
        );
        
        
        

      }
    );


}
}