const express = require('express');

const app = express() // inicializar servidor con express
const port = 3000;


const morgan = require("./middlewares/morgan")
app.use(morgan(':method :url :status - :response-time ms :body'));


app.use(express.json());


const userRoutes = require("./routes/user.routes")
const completedMarkerRoutes = require("./routes/completedMarker.routes")
const markerRoutes = require("./routes/marker.routes")

app.use('/api/user', userRoutes);
app.use('/api/marker', markerRoutes);
app.use('/api/completed', completedMarkerRoutes);








app.use('*', function(req, res){
    res.status(404).render('error', { statusCode: 400 })
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});