const express =  require("express");
const router = express.Router();
const Rentals = require('./models/rentals');
router.get('',function(req, res){
    Rentals.find({},function(err, allRentals){
        res.json(allRentals);
    })
});


router.get('/:id', function (req, res) {
   
    const rentalId = req.params.id;
    Rentals.findById(rentalId, function (err, rental) {
        if (err) {
            res.status(422).send({ errors: { 'title': 'DB error' } });
        }
        res.json(rental);
    });
});

module.exports = router;