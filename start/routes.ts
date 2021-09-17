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
const Intergration = require('./src/integration')
const Payment = require('./src/payment')

Route.get('/', async () => {
  return { 'welcome': 'development in progress' }
})


Route. get('/name/inquiry/:account', ({params}) => {
  try{
    var integration = new Intergration()
    params.account = decodeURIComponent(params.account)
    integration.name_enquiry(params)
    var response = {'status':'success','results':params}
    return response

  }
  catch(err){
    var response =  {'status':'failed', 'message': "Transaction failed, contact your bank"}
    return response
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
