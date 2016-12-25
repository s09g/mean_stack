// Get 'home' page
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title : 'Loc8r - find a place to work with wifi',
        pageHeader :{
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        }
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