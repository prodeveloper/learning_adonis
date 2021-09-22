/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Repl from '@ioc:Adonis/Addons/Repl'
const CreateAccount = require('../app/Actions/CreateAccount')

Repl.addMethod(
  'sayHi',
  (repl) => {
    var params = {'name':'jacob'}
    var account =  new CreateAccount()
    account.run(params)
    //create_account.run(params)
    console.log(params.prefix)
  },
  { description: 'A test method that prints "hi"' }
)
