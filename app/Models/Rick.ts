import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rick extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public adventure: string

  @column()
  public ad_number: integer

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
