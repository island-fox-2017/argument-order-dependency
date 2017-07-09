'use strict'

class House {

  constructor(tmp){
    this.address = tmp['address']
    this.square_feet = tmp['square_feet']
    this.num_bedrooms = tmp['num_bedrooms'] || 3
    this.num_baths = tmp['num_baths'] || 2
    this.cost = tmp['cost'] || 320000
    this.down_payment = tmp['down_payment'] || 0.20
    this.sold = tmp['sold'] || false
    this.short_sale = tmp['short_sale']
    this.has_tenants = tmp['has_tenants'] || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
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

function make_a_speech(components) {
  introduction = components['introduction']
  inappropriate_anecdote = components['inappropriate_anecdote']
  long_winded
}

let tmp = {
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants :''
}

const cool = new House(tmp)

console.log(cool.to_s())

//undefined : 100 sq. ft., 2 bed, 2 bath. 12345
