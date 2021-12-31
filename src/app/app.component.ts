import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';

  public Base!:number;
  public power!:number;
  public ans!:number;
  form!:FormGroup;

  ngOnInit():void{
    this.form=new FormGroup({
      Base:new FormControl(null,Validators.required),
      power:new  FormControl(null,Validators.required)


    })
  }

  calc(){
    var ans=this.form.value.Base;
    ans=this.form.value.power*Math.pow(this.form.value.Base,this.form.value.power-1);
    console.log(this.form.value);
    this.ans=ans
    
    
  }
}
