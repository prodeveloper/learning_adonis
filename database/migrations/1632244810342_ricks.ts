import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ricks extends BaseSchema {
  protected tableName = 'ricks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('adventure', 255).notNullable()
      table.integer('ad_number', 5).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
