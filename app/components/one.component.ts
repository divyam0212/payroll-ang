import { Component } from '@angular/core';

@Component({
    selector:"one",
    templateUrl:"./one.component.html",
})

export class OneComponent{
    private appName:string="WELCOME TO Ng COMPONENT";
   
    public print():string {
        return this.appName;
    }
}