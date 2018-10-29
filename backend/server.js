import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Contract from './models/Contract';

const app = express();
const router = express.Router();

// to get/give data to the db if its not local hosted
app.use(cors());

//if i want to get data from the db(wich are stored as json)
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/contracts', { useNewUrlParser: true });

//store the mongoose connection inside the const so that we can add eventListeners
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection estabilished successfully");
});

//end-point to send a GET request to get back the list of contracts as JSON
router.route('/contracts').get((req, res) => {
    Contract.find((err, contracts) => {
        if (err)
            console.log(err);
        else
            res.json(contracts)
    });
});

// this end-point is used to send a GET request to retrieve a single contract
router.route('/contracts/:id').get((req, res) => {
    Contract.findById(req.params.id, (err, contract) => {
        if (err)
            console.log(err);
        else
            res.json(contract)
    });
});

// end-point to send a POST request for creating new contracts
router.route('/contracts/add').post((req, res) => {
    let contract = new Contract(req.body);
    //because its a mongoose model we can use .save to save the new contract to the db asynchronosly
    contract.save()
        .then(contract => {
            res.status(200).json({ 'contract': "Contract Added Successfully!" });
        })
        .catch(err => {
            res.status(400).send('Failed to create new Contract');
        });
});

// end-point for updating existing contracts
router.route('/contracts/update/:id').put((req, res) => {
    // Contract.findByIdAndUpdate({ _id: req.params.id }, (err, contract) => {
    //     if (err)
    //         res.json(err);
    //     else
    //         res.status(200).json({ 'contract': "Contract Updated Successfully" });
    // });

    Contract.findById(req.params.id, (err, contract) => {
        if (!contract)
            return next(new Error("Could not find the contract"));
        else {

            contract.titulliProkurimit = req.body.titulliProkurimit;
            contract.dataPublikimit = req.body.dataPublikimit;
            contract.dataNenshkrimit = req.body.dataNenshkrimit;
            contract.vleraFillestare = req.body.vleraFillestare;
            contract.vleraFinale = req.body.vleraFinale;
            contract.drejtoria = req.body.drejtoria;

            contract.save().then(contract => {
                res.json('Contract updated successfully');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/contracts/delete/:id').delete((req, res) => {
    Contract.findByIdAndDelete({ _id: req.params.id }, (err, contract) => {
        if (err)
            res.json(err);
        else
            res.json('Contract removed successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log("Express server running!"));