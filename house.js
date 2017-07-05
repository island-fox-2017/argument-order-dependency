'use strict'

class House {

  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  //   this.address = address
  //   this.square_feet = square_feet
  //   this.num_bedrooms = num_bedrooms || 3
  //   this.num_baths = num_baths || 2
  //   this.cost = cost || 320000
  //   this.down_payment = down_payment || 0.20
  //   this.sold = sold || false
  //   this.short_sale = short_sale
  //   this.has_tenants = has_tenants || false
  // }
  constructor(details) {
    this.address = details['address']
    this.square_feet = details['square_feet']
    this.num_bedrooms = details['num_bedrooms'] || 3
    this.num_baths = details['num_baths'] || 2
    this.cost = details['cost'] || 32000
    this.down_payment = details['down_payment'] || 0.20
    this.sold = details['sold'] || false
    this.short_sale = details['short_sale']
    this.has_tenants = details['has_tenants'] || false
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost} price, ${this.down_payment} DP. ${this.has_tenants} tenants`
  }
}

let toObj = {
  address : 'Jl. marga satwa',
  square_feet : 200,
  num_bedrooms : 5,
  num_baths : 7,
  cost : 5000000,
  down_payment : 7.5,
  sold : 'sold',
  short_sale : 'short',
  has_tenants : 'No'
}

const cool = new House(toObj)

console.log(cool.to_s())
