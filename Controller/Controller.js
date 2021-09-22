Service= require('../Service/Service.js');
    // ViewAll Patient
exports.index = function(err,Patient)
 {
     Service.Service_index(err,Patient);
        if (err) return console.error(err); 
};
    // New Patient
exports.add = function (err,Patient) {
    
    Service.Service_add(err,Patient);
        if (err) return console.error(err); 
};
    // View Patient
exports.view = function (err, Patient) {
    Service.Service_view(err,Patient);
        if (err) return console.error(err); 
     
  };
  // Update Patient
exports.update = function (err,Patient) {
    Service.Service_update(err,Patient);
        if (err) return console.error(err); 
};
    // Delete Patient
exports.Delete = function (err, Patient) {
    Service.Service_Delete(err,Patient);
        if (err) return console.error(err); 
    };
  