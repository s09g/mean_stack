// Get 'home' page
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title : 'Loc8r - find a place to work with wifi',
        pageHeader :{
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m' 
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
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