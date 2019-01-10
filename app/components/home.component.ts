import { Component } from '@angular/core';

@Component({
    selector:"home",
    templateUrl:"./home.component.html"
})

export class HomeComponent{
    private homeTitle:string="WELCOME TO HOME COMPONENT";
   
    public print():string {
        return this.homeTitle;
    }
}