import { Component } from "@angular/core";
import { Employee } from './employee';

@Component({
    selector:"emp",
    templateUrl:"./emp.component.html"
})

export class EmpForm{

    department=[10,20,30,40];
    empObject:Employee=new Employee("ASHISH","ashish@gmail.com",123455123);

    submitted=false;

    onSubmit(){
        this.submitted=true;
        alert("FORM SUBMITTED");
    }

    get diagnostics(){
        return JSON.stringify(this.empObject);
    }
}