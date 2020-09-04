const mongoose = require('mongoose');
const app = require('./app')

//IMPORT DE CONFIG
const {IP_SERVER, PORT} = require('./config')

//SERRVER MONGODB
mongoose.connect(IP_SERVER, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
}, ()=> {
  console.log("server DB Conected");
})

//SERVER
app.listen(PORT, ()=> {
    console.log(`server conected in ${PORT}`);
})
