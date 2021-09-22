import Database from '@ioc:Adonis/Lucid/Database'

class NameEnquiry {

/**
 * run
 */
public async run(params) {
  this.clean_up(params)
  var results = this.find_account(params).then(results =>{
    return results
  }).catch(err=>{
    throw "Account not found"
  })
  return results
}

private clean_up(params){
  params.account = decodeURIComponent(params.account)
}

private async find_account(params){
  const merchant= await Database
      .from('merchants')
      .where("account_no",params.account)
      .firstOrFail()
  return {merchant,params}

}
}

module.exports = NameEnquiry
