var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iotproject-26b0f-default-rtdb.firebaseio.com/"
});

const db = admin.database();

const { Router}= require('express');
const router = Router();

router.get('/main', (req, res) => {
    db.ref('DHT').once('value', (snapshot) => {
        data = snapshot.val();
        res.render('main', {});
     });
})

router.get('/plants', (req, res) => {
    res.render('plants', {});
})

router.get('/data', (req, res) => {
    res.render('data', {});
})

router.get('/', (req, res) => {
    res.render('main', {});
})


router.post('/new-contact', (req, res) => {
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newContact);
    res.redirect('/');
});

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});

db.ref('DHT').on('value', (snapshot) => {
    data = snapshot.val();
    if (data) {
        aWss.clients.forEach((client) => {
            client.send(JSON.stringify(data));
        })
    }
});

db.ref('Distance').on('value', (snapshot) => {
    data = snapshot.val();
    if (data) {
        aWss.clients.forEach((client) => {
            client.send(JSON.stringify({distance:data}));
        })
    }
});

db.ref('LDR_Value').on('value', (snapshot) => {
    data = snapshot.val();
    if (data) {
        aWss.clients.forEach((client) => {
            client.send(JSON.stringify({ldr_value:data}));
        })
    }
});

db.ref('Soil_cap').on('value', (snapshot) => {
    data = snapshot.val();
    if (data) {
        aWss.clients.forEach((client) => {
            client.send(JSON.stringify({csms_value:data}));
        })
    }
});

module.exports = router;