'use strict'

class House {
  constructor(inputObject) {
    this.address = inputObject.address
    this.square_feet = inputObject.square_feet
    this.num_bedrooms = inputObject.num_bedrooms || 3
    this.num_baths = inputObject.num_baths || 2
    this.cost = inputObject.cost || 320000
    this.down_payment = inputObject.down_payment || 0.20
    this.sold = inputObject.sold || false
    this.short_sale = inputObject.short_sale
    this.has_tenants = inputObject.has_tenants || false
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

let inputObject = {
  address: 'Jl.Pakubuwono 81-83',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: true,
}

const cool = new House(inputObject)

console.log(cool.to_s())
