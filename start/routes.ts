/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
const NameEnquiry = require('../app/Actions/NameEnquiry')
const Payment = require('./src/payment')
const MerchantRegister = require('../app/Actions/MerchantRegister')
import { schema } from '@ioc:Adonis/Core/Validator'

Route.get('/', async () => {
  return { 'welcome': 'development in progress' }
})


Route. get('/name/inquiry/:account', ({params}) => {
  try{
    var name_enquiry = new NameEnquiry()
    params.account = decodeURIComponent(params.account)
    name_enquiry.run(params)
    var response = {'status':'success','results':params}
    return response

  }
  catch(err){
    // TODO: sanitive code to make secure.
    return  {'status':'failed', 'results': err.message}
  }
})

Route.post('/account/registration/', async({request}) => {

  try{
    var params = request.all()
    params.email = decodeURIComponent(params.email)
    var merchant_registration = new MerchantRegister()
    var results = await merchant_registration.run(params)
    // results.then(results => {
    //   console.log(results)
    // })
    return {'status': 'success', 'results': results}

  }
  catch(err){
    console.log(err)
    // TODO: sanitive code to make secure.
    return  {'status':'failed', 'results': err}
  }
})


Route. get('/transfer/:sender/:receiver/:amount', ({params}) => {
  try{
    var payment =  new Payment()
    payment.funds_transfer(params)
    var response = {'status': 'success','receiver':params}
    return response

  }
  catch(err){
    var response =  {'status':'failed', 'message': "Transaction failed, contact your bank"}
    return response
  }
})
