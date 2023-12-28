
const account_id = 14453
let account_email = "shekhar@gmail.com"
var account_password = "12345"
account_city = "Pune"
let account_state

// account_id = 2 // not allowed
account_email = "raibag@gmail.com"
account_password = "2563"
account_city = "Bangalore"

console.table([account_id, account_email, account_password, account_city, account_state])

/*
- Prefer not to use var because of issue in block scope and functional scope
- Variables can also be used without let or var keyword but it is not recomended
*/