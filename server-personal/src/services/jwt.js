const jwt = require('jwt-simple');
const moment = require('moment');


const SECRET_KEY =  "rolando4455"

 
exports.createAccessToken =  function(user) {
    const payload = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        exp:  moment().add(3, "hours").unix()
    },

} 