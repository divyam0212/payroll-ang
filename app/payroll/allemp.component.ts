import { Component } from "@angular/core";
import { EmpService } from './services/emp.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"getdata",
    templateUrl:"./allemp.component.html"
})

export class EmpComponent{
    private empData:any;
    
    constructor(private _service:EmpService){

    }
    ngOnInit(){// call services in ngOnInit
        //call web services
        this._service.getAllEmpData().subscribe(
            (res)=>{
                console.log(res+" Success ");
                this.empData=res;
                console.log(this.empData);
            },(error:HttpErrorResponse)=>{
                console.log(error+" Failure ");
                this.empData=error;
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
}