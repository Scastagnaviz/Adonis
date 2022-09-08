'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.string('name',255)
      table.string('description',255)
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
