'use strict'

class House {

  constructor(objSumtin) {
    this.address = objSumtin['address']
    this.square_feet = objSumtin['square_feet']
    this.num_bedrooms = objSumtin['num_bedrooms'] || 3
    this.num_baths = objSumtin['num_baths'] || 2
    this.cost = objSumtin['cost'] || 320000
    this.down_payment = objSumtin['down_payment'] || 0.20
    this.sold = objSumtin['sold'] || false
    this.short_sale = objSumtin['short_sale']
    this.has_tenants = objSumtin['has_tenants'] || false
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

let objSumtin = {
  address: 'addresso',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: null
}

const cool = new House(objSumtin)

console.log(cool.to_s())
