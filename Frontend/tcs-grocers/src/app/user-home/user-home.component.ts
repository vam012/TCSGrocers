import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  //for now it is hard coded... this will come from PRODUCT table API
  productArray=[
    {
      prodId:1,
      prodName:"hp laptop",
      prodPrice:"$1000",
      prodQuantity: 25,
      qnt:1
    },
    {
      prodId:2,
      prodName:"Hair dryer",
      prodPrice:"$100",
      prodQuantity: 20,
      qnt:1
    },
    {
      prodId:3,
      prodName:"Perfume",
      prodPrice:"$80",
      prodQuantity: 15,
      qnt:1
    },
    {
      prodId:4,
      prodName:"TV",
      prodPrice:"$1200",
      prodQuantity: 10,
      qnt:1
    },
    {
      prodId:5,
      prodName:"Monitor",
      prodPrice:"$300",
      prodQuantity: 5,
      qnt:1
    }

  ];

  }
