class NameEnquiry {
  constructor(parameters) {

  }

/**
 * run
 */
public run(params) {
  this.extract_prefix(params)
}

private extract_prefix(params){
  params.prefix = params.account.substring(0,3)

}
public name_enquiry(params){

  this.extract_prefix(params)
  params.stored_name = params
}
private find_name_in_db() {

}
}

module.exports = NameEnquiry
