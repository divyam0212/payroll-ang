import { Component } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
    selector:"user",
    templateUrl:"./user.component.html"
})

export class UserComponent{
    private userTitle:string="WELCOME TO USER COMPONENT";
    private username:string;
    constructor(private router:Router,private route:ActivatedRoute){
    }

    ngOnInit(){
        this.username=this.route.snapshot.paramMap.get('name');
    }
    public print():string {
        return this.userTitle;
    }
}