import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { EmpService } from './services/emp.service';


@Component({
    selector:"registeremp",
    templateUrl:"./registration.component.html"
})

export class RegistrationComponent{

    private deptData:any;
    private skillData:any;

    constructor(private _service:EmpService){

    }
    empName= new FormControl('');
    empSalary= new FormControl('');
    department= new FormControl('');
    street= new FormControl('');
    city= new FormControl('');
    state= new FormControl('');
    country= new FormControl('');
    skills= new FormControl('');


    ngOnInit(){
        this._service.getAllDepartment().subscribe(
            (res)=>{
                console.log(res+" Success ");
                this.deptData=res;
                console.log(this.deptData);
            },(error:HttpErrorResponse)=>{
                console.log(error+" Failure ");
                this.deptData=error;
                if(error instanceof Error){
                    console.log("Client side error "+error);
                }
                else
                {
                    console.log("Server side error "+error);
                }
            }
        );
        this._service.getAllSkills().subscribe(
            (res)=>{
                console.log(res+" Success ");
                this.skillData=res;
                console.log(this.skillData);
            },(error:HttpErrorResponse)=>{
                console.log(error+" Failure ");
                this.skillData=error;
                if(error instanceof Error){
                    console.log("Client side error "+error);
                }
                else
                {
                    console.log("Server side error "+error);
                } 
            }
        );
    }
    clickme():void{
        console.log("you clicked me");
        alert("SUBMITTED");
        alert("EMPLOYEE NAME: "+this.empName.value);
        alert("EMPLOYEE SALARY: "+this.empSalary.value);
        alert("EMPLOYEE DEPARTMENT: "+this.department.value);
        alert("EMPLOYEE STREET: "+this.street.value);
        alert("EMPLOYEE CITY: "+this.city.value);
        alert("EMPLOYEE STATE: "+this.state.value);
        alert("EMPLOYEE COUNTRY: "+this.country.value);
        alert("EMPLOYEE SKILLS: "+this.skills.value);
    }
}