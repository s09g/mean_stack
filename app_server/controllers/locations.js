var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "dafault": Date.now}
});

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});



// Get 'home' page
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title : 'Loc8r - find a place to work with wifi',
        pageHeader :{
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Lock8r \
        helps you find places to work when out and about. \
        Perhaps with coffee, cake or a pint? Let Lock8r help \
        you find the place you're looking for."
    });
};



// Get 'Location Info' page
module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: "Location Info"});
};

// Get 'Add review' page
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {title: 'Add Review'});
};