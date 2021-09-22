class CreateAccount {

  param:any

  /**
   * run
   */
  public run(param) {
    this.param = param
    this.generate_prefix()
    return this.param
  }
  /**
   * save_in_db
   */
  private save_in_db() {

  }

  private generate_id() {

  }
  private verify_not_exist() {

  }

  private send_notification() {

  }

  private generate_prefix() {
    this.param.prefix = 999
  }

}

module.exports = CreateAccount
