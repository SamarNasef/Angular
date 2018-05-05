import { Injectable } from '@angular/core';
import {Std} from './std';
import {Http} from '@angular/http';

@Injectable()
export class StudentdataService {

  students:Std[]=[
    new Std (1,'samar',20),
    new Std (2,'x',21),
    new Std (3,'y',22)
  ];

  add(s:Std){
    //this.students.push(new Std(s.id,s.name,s.age));
    //return this.students;
  return this.http.post("http://localhost:5000/employee",{"name":s.name,"age":s.age});
  
  }
  getAll(){
    //return this.students;
    return this.http.get("http://localhost:5000/employee");
  }
  delete(id:number){
    /*for(var i=0;i<this.students.length;i++){
      if(id == this.students[i].id)
      {
        this.students.splice(i,1);
        break;
      }
    }
    

    return this.students;
    */
    return this.http.delete("http://localhost:5000/employee/"+id);
    
  }
  getById(id:number){
    /*for(var i=0;i<this.students.length;i++){
      if(id == this.students[i].id)
      {
        return this.students[i];
        
      }
    }*/
    return this.http.get("http://localhost:5000/employee/"+id);
  }
  update(s:Std){
    /*for(var i=0;i<this.students.length;i++){
      if(s.id == this.students[i].id)
      {
        this.students[i].age= s.age;
        this.students[i].name= s.name;
        break;
        
      }
    }*/
    console.log(s.id);
    return this.http.put("http://localhost:5000/employee/"+s.id,{"name":s.name,"age":s.age});

    //return this.students;
  }
  constructor(private http:Http) { }

}
