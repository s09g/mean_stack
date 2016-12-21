// Get 'home' page
module.exports.homelist = function(req, res){
    res.render('locations-list', {title: "Home"});
};

// Get 'Location Info' page
module.exports.locationInfo = function(req, res){
    res.render('index', {title: "Location Info"});
};

// Get 'Add review' page
module.exports.addReview = function(req, res) {
    res.render('index', {title: 'Add Review'});
};