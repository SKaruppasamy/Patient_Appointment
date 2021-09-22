Dao= require('../Dao/Dao.js');
    // ViewAll patient
exports.Service_index = function(err,callback) {
    Dao.Dao_index(err,callback);
        if (err) return console.error(err); 
        callback(Patient);
    };

    // New patient
exports.Service_add = function (err,callback) {
    Dao.Dao_add(err,callback);
        if (err) return console.error(err); 
        callback(Patient);
    };

    // View patient
exports.Service_view = function (err, callback) {
    Dao.Dao_view(err,callback);
        if (err) return console.error(err); 
        callback(Patient);
     };   

     // Update patient
exports.Service_update = function (err,callback) {
    Dao.Dao_update(err,callback);
        if (err) return console.error(err); 
        callback(Patient);
    };

    // Delete Patient
exports.Service_Delete = function (err, callback) {
    Dao.Dao_Delete(err,callback);
        if (err) return console.error(err); 
        callback(Patient);
    };