import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import { Std } from '../std';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private sservice:StudentdataService ) { }
  id:number;
  data:Std;
  ngOnInit() {
    //console.log(this.ar.snapshot.params['id']);
    this.ar.params.subscribe(
      (a:Params)=>{
        
        this.id=a['id'];
        //console.log(a);
        //this.data= this.sservice.getById(this.id);
         this.sservice.getById(this.id).subscribe(
          a=>{
            this.data = a.json();
          }
        );
      }
    );

  }

}
