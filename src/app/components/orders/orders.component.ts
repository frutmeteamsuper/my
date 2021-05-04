import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { OrderInterface } from '../../models/order-interface';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
    private router: Router
  	) { }
      loadAPI = null;  
      first = "0 Records";  
      message = "please, Select a order category";  
      itemSelected:boolean= false;


  url = "assets/assetsmobile/lib/jquery/jquery.min.js";
  url2 = "assets/assetsmobile/lib/perfect-scrollbar/perfect-scrollbar.min.js";
  url3 = "assets/assetsmobile/js/azia.js";
    public orders:OrderInterface;
    public order:OrderInterface;
    // orders: Observable<any>;
    // order: Observable<any>;
    
    getOrdersTamano(){
         this.dataApi
         .getOrders()
         .subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{
          this.orders=res;
         this._uw.tamano = res.length;
        }
      });
    }
     public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
 
quotes()
{
  this.message="Loading, please wait...";
     this.getOrders();
     this.first="News";
     this.getOrdersTamano();
  }


    getOrders(){
        this.dataApi
        .getOrders()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
      
    }
  
  ngOnInit() {
         if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript2();
        this.loadScript3();
        });
      }
    this._uw.loaded=true;
   
  }
  back(){
    this.itemSelected=false;
  }


  setId(order,indice,tamano){
    this._uw.orderSelected=order;
    this._uw.idSelected=order.id;
    this._uw.tamano=tamano;
    this._uw.indice=indice;
    this.itemSelected=true;
    // document.getElementsByTagName("body").addClass('az-content-body-show');
  

  }
    setIdfull(order,indice,tamano){
    this._uw.orderSelected=order;
    this._uw.idSelected=order.id;
    this._uw.tamano=tamano;
    this._uw.indice=indice;
  }

}
