const db = require("../config");
const Data = db.data;

// Create and Save a new Data
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userID) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Data.find({ 'marketID': req.body.marketID, 'cmdtyID': req.body.cmdtyID }, '', function (err, mydata) {
        //console.log(athletes)
        if (mydata.length == 0) {
            const data = new Data({
                userID: req.body.userID,
                marketID: req.body.marketID,
                cmdtyID: req.body.cmdtyID,
                price: (req.body.price / req.body.convFctr),
                priceUnit: req.body.priceUnit,
                cmdtyname: req.body.cmdtyname,
                marketName: req.body.marketName,
                marketType: req.body.marketType
            });

            // Save  in the database
            data
                .save(data)
                .then(data => {
                    res.status(500).send({
                        message:
                            { 'status': 'success', 'id': data._id }
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating ."
                    });
                });
        }
        else {
            var id = mydata[0]._id;
            Data.findByIdAndUpdate(id, { price: ((mydata[0].price + (req.body.price / req.body.convFctr)) / 2) }, { useFindAndModify: false })
                .then(data => {
                    if (!data) {
                        res.status(404).send({
                            message: `Cannot update Data with id=${id}. Maybe Data was not found!`
                        });
                    } else res.status(500).send({
                        message:
                            { 'status': 'success', 'id': data._id }
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error "
                    });
                });
        }
        if (err) return handleError(err);
    })
};

exports.report = (req, res) => {
    const id = req.params.id;

    Data.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving  with id=" + id });
        });
}
