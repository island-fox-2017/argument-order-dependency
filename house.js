'use strict'

class House {

  constructor(parameters) {
    this.address = parameters['address'];
    this.square_feet = parameters['square_feet'];
    this.num_bedrooms = parameters['num_bedrooms'] || 3;
    this.num_baths = parameters['num_baths'] || 2;
    this.cost = parameters['cost'] || 320000;
    this.down_payment = parameters['down_payment'] || 0.20;
    this.sold = parameters['old'] || false;
    this.short_sale = parameters['short_sale'];
    this.has_tenants = parameters['has_tenants'] || false;
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
}

let paramObj = {
  address : 'Jl.Pakis VIC Pekayon',
  square_feet : 100,
  num_bedrooms :  2,
  num_baths : 2,
  cost: 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : true
};

const cool = new House(paramObj)
// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)

console.log(cool.to_s())
