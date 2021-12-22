const express = require ('express')
const app = express()
const path = require ('path')
const Timing = (req, res, next) => {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    if (day > 6 || hour > 22 || hour < 9) {
        res.sendFile(path.join(__dirname, "Closed.html"))
    } else {
        next();
    }
};
 
app.use(Timing,express.static(path.join(__dirname,'public')))


app.use(express.static(path.join(__dirname, 'public')))

app.listen(5000, (err) => {
    if (err){
        throw err
    }else {
        console.log('RANI MAZELT NEKHDEM')
    }
})