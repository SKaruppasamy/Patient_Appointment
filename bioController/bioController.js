bioService= require('../bioService/bioService.js');
    // ViewAll Bio
exports.index = function(err,bio)
 {
     bioService.bioService_index(err,bio);
        if (err) return console.error(err); 
};
    // New Bio
exports.add = function (err,bio) {
    
    bioService.bioService_add(err,bio);
        if (err) return console.error(err); 
};
    // View Bio
exports.view = function (err, bio) {
    bioService.bioService_view(err,bio);
        if (err) return console.error(err); 
     
  };
  // Update Bio
exports.update = function (err,bio) {
    bioService.bioService_update(err,bio);
        if (err) return console.error(err); 
};
    // Delete Bio
exports.Delete = function (err, bio) {
    bioService.bioService_Delete(err,bio);
        if (err) return console.error(err); 
    };
  