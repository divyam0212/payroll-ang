import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmpService{
    public empData:any;
    constructor(private _http:HttpClient){

    }

    getAllEmpData():any{
       return this._http.get("http://localhost:1111/allemployee");
    }
    getAllDepartment(){
        return this._http.get("http://localhost:1111/alldept");
    }
    getAllSkills(){
        return this._http.get("http://localhost:1111/allskills");
    }
    saveEmployee(){
        
    }

}