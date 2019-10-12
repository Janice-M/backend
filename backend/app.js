import express from 'express';

const app = express

import bodyParser from 'body-parser';

app.use((req, res, next) => {
    console.log('Rafiki your request has been received !');
    next();
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'A pair of Eluid Kipchoge shoes',
            description: 'You do not deserve this',
            imageUrl: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/10/15/ineos1010a.jpg?w968',
            price: 600000,
            userId: 'eliud159',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
  });



export default app;