import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-democomp',
  templateUrl: './democomp.component.html',
  styleUrls: ['./democomp.component.css']
})
export class DemocompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuVariable:boolean=false;
  opennav(val : boolean){
  
    this.menuVariable = val;
    console.log(this.menuVariable);
  }
}
