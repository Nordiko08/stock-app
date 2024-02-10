const mongoose = require('mongoose')

const dbConnect = (app) => {
    mongoose
.connect(
    `mongodb+srv://ayalaemanuel68:${process.env.MONGO_DB_PASS}@cluster0.5dtzpgv.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
.then((result) => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Servidor escuchado en el puerto ${PORT}`)
    })
    console.log('Conexion exitosa a la BBDD')
})

.catch((err) => console.log(err))
}

module.exports = dbConnect