
class AccountManagement{
  public async register_user({user}){
    //store user in DB
    return true
    //user already exists
    throw "User Exists"
  }
  public async create_account({user}){
    //create a new account in DB
    var account
    account.prefix = this.generate_prefix(account)
    //account generation logic
    account.account_no = "0123456"

  }
  public async generate_prefix({account}){
      //use prefix generation logic
      account.prefix = "999"
  }

}
