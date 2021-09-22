import Database from '@ioc:Adonis/Lucid/Database'

class MerchantRegister {
  public async run(params){

    var validated = this.validate(params)
    return validated.then(results => {
      console.log(results.params)
      this.generate_prefix(results.params)
      this.generate_account(results.params)
      this.generate_full_account(results.params)
          //this.save_account()
      return results
    })
  }

  private generate_prefix(params){
    //// TODO: check for uniqueness
    var gen_prefix = Math.floor(Math.random() * 899) + 101
    params.prefix = gen_prefix
  }
  private generate_account(params){
    //// TODO: check for uniqueness
    var gen_account = Math.floor(Math.random() * 899999) + 100001
    params.account_no = gen_account
  }
  private generate_full_account(params){
    params.full_account_no= params.prefix * 1000000 + params.account_no
  }

  private async validate(params){
    if (!("account_name" in params)){
      throw "Account Name Must be provided"
    }
    if (!("email" in params)){
      throw "Email Must be provided"
    }

    var merchants = await Database
        .from('merchants')
        .exec()
    return {merchants,params}
  }

  private async save_account(params){
    await Database
      .insertQuery()
      .table('merchants')
      .insert({
        account_name: params.account_name,
        email: params.email,
        prefix: params.prefix,
        account_no:params.account_no,
        full_account_no:params.full_account_no

      })
  }



}
module.exports = MerchantRegister
