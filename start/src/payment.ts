const Intergration = require('./integration')

class Payment{

  public funds_transfer(payload){
    try{
      var intergration = new Intergration()
      intergration.name_enquiry(payload.sender)
      intergration.queue_nibbs(payload.sender,payload.amount,payload.receiver)
      payload.payment_status = "Success"
    }
    catch (err){
      throw err.message
    }
  }
}
module.exports = Payment
