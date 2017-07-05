'use strict'

class House {

  constructor(rumah) {
    this.address = rumah['address']
    this.square_feet = rumah['square_feet']
    this.num_bedrooms = rumah['num_bedrooms'||3]
    this.num_baths = rumah['num_baths'|| 2]
    this.cost = rumah['cost' || 320000]
    this.down_payment = rumah['down_payment' || 0.20]
    this.sold = rumah['sold' || false]
    this.short_sale = rumah['short_sale']
    this.has_tenants = rumah['has_tenants' || false]
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }

  toObj(){

  }
}
let newObj = {
  address :'saya',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths :2,
  cost :12345,
  down_payment :12345,
  sold :true,
  short_sale :true,
  has_tenants: false
}
const cool = new House(newObj)

// console.log(cool.num_bedrooms.replace(/.{10}$/g, '****'));
console.log(cool.to_s())
