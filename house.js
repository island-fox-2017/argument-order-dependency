'use strict'

class House {

  constructor(options) {
    this.address = options['address']
    this.square_feet = options['square_feet']
    this.num_bedrooms = options['num_bedrooms'] || 3
    this.num_baths = options['num_baths'] || 2
    this.cost = options['cost'] || 320000
    this.down_payment = options['down_payment'] || 0.20
    this.sold = options['sold'] || false
    this.short_sale = options['short_sale']
    this.has_tenants = options['has_tenants'] || false
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

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House({
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : false,
  square_feet : 100,
  address : 'Pondok Pinang, Jakarta-Selatan'
})

console.log(cool.to_s())
