patient_Appoint = require('../Model/Models.js');
    // ViewAll patient
exports.Dao_index= function(req,callback){
    patient_Appoint.get(function (err, Patient) {
        if (err)
            callback.json({
            status: "error",
            message: err
            });
        callback.json({
            message: "*** Patient Appointment ***",
            status: "success",
            message: "Got Patient Appointment Successfully!",
            callack(Patient);      
        });
    });
};
    
    // New patient
exports.Dao_add = function (req, callback) {
        var Patient= new patient_Appoint();
        Patient.Appointment = req.body.Appointment;
        Patient.Appointment_Identifier = req.body.Appointment_Identifier;
        Patient.Appointment_status = req.body.Appointment_status;
        Patient.Appointment_CancellationReason = req.body.Appointment_CancellationReason;
        Patient.Appointment_Specialty = req.body.Appointment_Specialty;
        Patient.Appointment_ReasonCode = req.body.Appointment_ReasonCode;
        Patient.Appointment_Priority = req.body.Appointment_Priority;
        Patient.Appointment_Description = req.body.Appointment_Description;
        Patient.Appointment_SupportingInformation = req.body.Appointment_SupportingInformation;
        Patient.Appointment_start = req.body.Appointment_start;
        Patient.Appointment_end = req.body.Appointment_end;
        Patient.Appointment_Slot = req.body.Appointment_Slot;
        Patient.Appointment_Comment = req.body.Appointment_Comment ;
        Patient.Appointment_Participant = req.body.Appointment_Participant;
        Patient.Appointment_Participant_type = req.body.Appointment_Participant_type;
        Patient.Appointment_Participant_actor = req.body.Appointment_Participant_actor;
        Patient.Appointment_Participant_required = req.body.Appointment_Participant_required;
        Patient.Appointment_Participant_status = req.body.Appointment_Participant_status;
        Patient.Appointment_Participant_Period = req.body.Appointment_Participant_Period;
        Patient.Appointment_requestedPeriod = req.body.Appointment_requestedPeriod;
               
        //Save and check error
        Patient.save(function (err) {
            
            if (err)
                callback.json(err);
            
            callback.json({
                message: "*** Patient Appointment ***",
                message: "New Patient Appointment Added!",
                callback(Patient);
            
            });
        });
    };


     // View patient
exports.Dao_view = function (req, callback) {
        patient_Appoint.findById(req.params.Patient_id, function (err, Patient) {
            if (err)
                callback.send(err);
            callback.json({
                message: "*** Patient Appointment ***",
                message: 'Patient Appointment Details',
                callback(Patient);
            });
        });
    };

    // Update patient
exports.Dao_update = function (req, callback) {
    patient_Appoint.findById(req.params.Patient_id, function (err, Patient) {
        if (err)
        callback.send(err); 
        Patient.Appointment = req.body.Appointment;
        Patient.Appointment_Identifier = req.body.Appointment_Identifier;
        Patient.Appointment_status = req.body.Appointment_status;
        Patient.Appointment_CancellationReason = req.body.Appointment_CancellationReason;
        Patient.Appointment_Specialty = req.body.Appointment_Specialty;
        Patient.Appointment_ReasonCode = req.body.Appointment_ReasonCode;
        Patient.Appointment_Priority = req.body.Appointment_Priority;
        Patient.Appointment_Description = req.body.Appointment_Description;
        Patient.Appointment_SupportingInformation = req.body.Appointment_SupportingInformation;
        Patient.Appointment_start = req.body.Appointment_start;
        Patient.Appointment_end = req.body.Appointment_end;
        Patient.Appointment_Slot = req.body.Appointment_Slot;
        Patient.Appointment_Comment = req.body.Appointment_Comment ;
        Patient.Appointment_Participant = req.body.Appointment_Participant;
        Patient.Appointment_Participant_type = req.body.Appointment_Participant_type;
        Patient.Appointment_Participant_actor = req.body.Appointment_Participant_actor;
        Patient.Appointment_Participant_required = req.body.Appointment_Participant_required;
        Patient.Appointment_Participant_status = req.body.Appointment_Participant_status;
        Patient.Appointment_Participant_Period = req.body.Appointment_Participant_Period;
        Patient.Appointment_requestedPeriod = req.body.Appointment_requestedPeriod;
    
        //save and check errors
        Patient.save(function (err) {
            if (err)
                callback.json(err)
                callback.json ({
                message: "*** Patient Appointment ***",
                message: "Patient Appointment Updated Successfully",
                callback(Patient);
                });
        });
    });
}; 

    // Delete patient
exports.Dao_Delete = function (req, callback) {
    patient_Appoint.deleteOne({
        _id: req.params.Patient_id
         }, function (err, contact) {
            if (err)
                callback.send(err)
            callback.json({
                message: "*** Patient Appointment ***",
                status: "success",
                message: 'Patient Appointment Deleted',
                callback(Patient);
        });
    });
};  
      