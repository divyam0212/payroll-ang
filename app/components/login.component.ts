import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{

    constructor(private router:Router){
    }

    username=new FormControl('');
    password=new FormControl('');

    clickme():string{
        console.log("you clicked me");
        alert("Username: "+this.username.value);
        alert("Password: "+this.password.value);
        this.print();
        return "you clicked me";
    }
    print():void{
        if(this.username.value=="admin" && this.password.value=="admin")
        {
            alert("WELCOME ADMIN");
            this.router.navigate(['/success1',this.username.value])
        }
        else if(this.username.value=="test" && this.password.value=="test"){
            alert("WELCOME USER");
            this.router.navigate(['/success2',this.username.value])
        }
    }
}
