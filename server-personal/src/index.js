const mongoose = require('mongoose');

//IMPORT DE CONFIG
const app = require('./app')
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

//ESCUCHANDO SERVER
app.listen(PORT, ()=> {
    console.log(`server conected in ${PORT}`);
})
