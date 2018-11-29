import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//Patient List
public patientListData = [
  {"customer_name":"Bala","customer_token":1,"customer_mobile":"822-077-2736","customer_address":"21A/2 Kanchipuram,TamilNadu-631502"},
  {"customer_name":"Venkat","customer_token":2,"customer_mobile":"832-804-6698","customer_address":"123 Nellore,Andra Pradesh-44"},
  {"customer_name":"Santha","customer_token":3,"customer_mobile":"822-077-2736","customer_address":"25/11 New Colony,Chromepet,TVM-60601"}
  ]
}
