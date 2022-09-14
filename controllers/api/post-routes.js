const express= require ('express');
const PORT = 3001;
const app = express();

app.get('/api/reviews', (req, res) =>{
    res.json(`${req.method} request recived`);

    console.info(req.rawHeaders);

    console.info(`${req.method} request recieved`);
});

app.post('/api/reviews', (req, res) =>{
    res.json(`${req.method} request received`);

    console.info(req.rawHeaders);

    onsole.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
