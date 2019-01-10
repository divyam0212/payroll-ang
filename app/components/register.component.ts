import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:"register",
    templateUrl:"./register.component.html"
})

export class RegisterComponent{
    registerForm=new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        salary: new FormControl(''),
        gender: new FormControl(''),

    })
    clickme():void{
        console.log("you clicked me");
        alert("SUBMITTED");
        alert("Username: "+this.registerForm.controls.username.value);
        alert("Passsword: "+this.registerForm.controls.password.value);
        alert("Salary: "+this.registerForm.controls.salary.value);
        alert("Gender: "+this.registerForm.controls.gender.value);
    }
}