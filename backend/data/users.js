const bcrypt = require('bcryptjs');
const Users=[
    {name:'admin1' , email:'admin1@gmail.com' , password:bcrypt.hashSync('1234567890' , 10) , isAdmin:true},
    {name:'user1' , email:'user1@gmail.com' , password:bcrypt.hashSync('12345678901' , 10) },
    {name:'user2' , email:'user2@gmail.com' , password:bcrypt.hashSync('12345678902' , 10) }
]

module.exports= Users;