const Data = require ('./data')

class Intergration {
  data:any


  constructor() {
   this.data = new Data()
}


  public async fetch_customer_name({account}){
    try {
        account.bank = this.extract_prefix(account)
        account.name = this.name_enquiry(account)
        return account
    }
    catch(err){
        throw "Invalid account number"
    }

  }
  private extract_prefix(enquiry){
    enquiry.prefix = enquiry.account.substring(0,3)

  }
  private get_vendor_by_prefix(enquiry) {
    for (const vendor_id in this.data.vendors_list){
      enquiry.vendor = this.data.vendors_list[vendor_id]
    }
    }

  public name_enquiry(enquiry){

    this.extract_prefix(enquiry)
    this.get_vendor_by_prefix(enquiry)
    enquiry.stored_name = enquiry
  }

  public queue_nibbs(sender,amount,receiver){
    //queue transfer
    return true
    //incase transaction fails
    throw "Transaction Failed"
  }


}

module.exports = Intergration
