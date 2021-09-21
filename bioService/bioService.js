bioDao= require('../bioDao/bioDao.js');
    // ViewAll Bio
exports.bioService_index = function(err,bio) {
    bioDao.bioDao_index(err,bio);
        if (err) return console.error(err); 
    };

    // New Bio
exports.bioService_add = function (err,bio) {
    bioDao.bioDao_add(err,bio);
        if (err) return console.error(err); 
    };

    // View Bio
exports.bioService_view = function (err, bio) {
    bioDao.bioDao_view(err,bio);
        if (err) return console.error(err); 
     };   

     // Update Bio
exports.bioService_update = function (err,bio) {
    bioDao.bioDao_update(err,bio);
        if (err) return console.error(err); 
    };

    // Delete Bio
exports.bioService_Delete = function (err, bio) {
    bioDao.bioDao_Delete(err,bio);
        if (err) return console.error(err); 
    };
      