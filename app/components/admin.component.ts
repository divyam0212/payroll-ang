import { Component } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
    selector:"admin",
    templateUrl:"./admin.component.html"
})

export class AdminComponent{
    private adminTitle:string="WELCOME TO ADMIN COMPONENT";
    private username:string;
    constructor(private router:Router,private route:ActivatedRoute){
    }

    ngOnInit(){
        this.username=this.route.snapshot.paramMap.get('name');
    }
    public print():string {
        return this.adminTitle;
    }
}
