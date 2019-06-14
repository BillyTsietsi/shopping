import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  NewPro = [];
  Price : number = 0;
  ProductNumber: number =0;
  TotalQuantity: number = 0;

  productList = [
    {
      proName: 'Samsung Galaxy S8', price : 11000, limit : 10,quantity : 0, image:'/assets/Samsung Galaxy S6 .jpg'
    },
    {
      proName: 'Huawei P30 Pro.jpg', price : 18000, limit : 10,quantity : 0, image:'assets/Huawei P30 Pro.jpg'
    },
    {
      proName: 'Samsung Galaxy J7Star Blue', price : 31000, limit : 10,quantity : 0, image:'/assets/Samsung Galaxy J7Star Blue.jpg'
    },
    {
      proName: 'Huawei P20 Pro', price : 9000, limit : 10,quantity : 0, image:'/assets/Huawei P20 Pro.jpg'
    }
  ]


  quantity_inc(list){

 this.NewPro.push(list)

 this.ProductNumber= this.NewPro.length;

    if(list.limit == list.quantity){
      return alert("Your cart has reached muximum limit")
    }else{
      list.quantity++
      this.Price += list.price
      
      
    }
  }

  quantity_dec(list){

   let index = this.NewPro.indexOf(list)  
   this.NewPro.splice(index,1)
    this.ProductNumber = this.NewPro.length - this.NewPro.length;


      if(list.quantity == 0){
        return alert("Please add to cart first")
      }
      list.quantity--
      this.Price -= list.price


  }
  countPrice(){
     this.Price = 0;
     this.TotalQuantity= 0;

      for(let p of this.productList){
        this.Price += p.price*p.quantity


      }
  }



}
