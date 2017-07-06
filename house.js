'use strict'

class House {
// address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenant
  constructor(all) {
    this.address = all ['address']
    this.square_feet = all ['square_feet']
    this.num_bedrooms = all ['num_bedrooms'] || 3
    this.num_baths = all ['num_baths'] || 2
    this.cost = all ['cost'] || 320000
    this.down_payment = all ['down_payment'] || 0.20
    this.sold = all ['sold'] || false
    this.short_sale = all ['short_sale']
    this.has_tenants = all ['has_tenants'] || false
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

var obj = {
  address : 'Jakarta selatan',
  square_feet : 1000,
  num_bedrooms : 4,
  num_baths : 2,
  cost : 500000,
  short_sale : 400000,
}

const cool = new House(obj)
//new House(obj) --> obj = {}

console.log(cool.to_s())
