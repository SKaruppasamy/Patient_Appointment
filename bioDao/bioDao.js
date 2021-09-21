Bio = require('../bioModel/bioModels.js');
    // ViewAll Bio
exports.bioDao_index= function(req,res){
    Bio.get(function (err, bio) {
        if (err)
            res.json({
            status: "error",
            message: err
            });
        res.json({
            message: "*** Patient Appointment ***",
            status: "success",
            message: "Got Patient Appointment Successfully!",
            data: bio       
        });
    });
};
    
    // New Bio
exports.bioDao_add = function (req, res) {
        var bio = new Bio();
        bio.Appointment_Identifier = req.body.Appointment_Identifier;
        bio.Appointment_status = req.body.Appointment_status;
        bio.Appointment_CancellationReason = req.body.Appointment_CancellationReason;
        bio.Appointment_Specialty = req.body.Appointment_Specialty;
        bio.Appointment_ReasonCode = req.body.Appointment_ReasonCode;
        bio.Appointment_Priority = req.body.Appointment_Priority;
        bio.Appointment_Description = req.body.Appointment_Description;
        bio.Appointment_SupportingInformation = req.body.Appointment_SupportingInformation;
        bio.Appointment_start = req.body.Appointment_start;
        bio.Appointment_end = req.body.Appointment_end;
        bio.Appointment_Slot = req.body.Appointment_Slot;
        bio.Appointment_Comment = req.body.Appointment_Comment ;
        bio.Appointment_Participant = req.body.Appointment_Participant;
        bio.Appointment_Participant_type = req.body.Appointment_Participant_type;
        bio.Appointment_Participant_actor = req.body.Appointment_Participant_actor;
        bio.Appointment_Participant_required = req.body.Appointment_Participant_required;
        bio.Appointment_Participant_status = req.body.Appointment_Participant_status;
        bio.Appointment_Participant_Period = req.body.Appointment_Participant_Period;
        bio.Appointment_requestedPeriod = req.body.Appointment_requestedPeriod;
               
        //Save and check error
        bio.save(function (err) {
            
            if (err)
                res.json(err);
            
            res.json({
                message: "*** Patient Appointment ***",
                message: "New Patient Appointment Added!",
                data: bio
            });
        });
    };


     // View Bio
exports.bioDao_view = function (req, res) {
        Bio.findById(req.params.bio_id, function (err, bio) {
            if (err)
                res.send(err);
            res.json({
                message: "*** Patient Appointment ***",
                message: 'Patient Appointment Details',
                data: bio
            });
        });
    };

    // Update Bio
exports.Dao_update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
        res.send(err);
        bio.Appointment_Identifier = req.body.Appointment_Identifier;
        bio.Appointment_status = req.body.Appointment_status;
        bio.Appointment_CancellationReason = req.body.Appointment_CancellationReason;
        bio.Appointment_Specialty = req.body.Appointment_Specialty;
        bio.Appointment_ReasonCode = req.body.Appointment_ReasonCode;
        bio.Appointment_Priority = req.body.Appointment_Priority;
        bio.Appointment_Description = req.body.Appointment_Description;
        bio.Appointment_SupportingInformation = req.body.Appointment_SupportingInformation;
        bio.Appointment_start = req.body.Appointment_start;
        bio.Appointment_end = req.body.Appointment_end;
        bio.Appointment_Slot = req.body.Appointment_Slot;
        bio.Appointment_Comment = req.body.Appointment_Comment ;
        bio.Appointment_Participant = req.body.Appointment_Participant;
        bio.Appointment_Participant_type = req.body.Appointment_Participant_type;
        bio.Appointment_Participant_actor = req.body.Appointment_Participant_actor;
        bio.Appointment_Participant_required = req.body.Appointment_Participant_required;
        bio.Appointment_Participant_status = req.body.Appointment_Participant_status;
        bio.Appointment_Participant_Period = req.body.Appointment_Participant_Period;
        bio.Appointment_requestedPeriod = req.body.Appointment_requestedPeriod;
    
        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
                res.json ({
                message: "*** Patient Appointment ***",
                message: "Patient Appointment Updated Successfully",
                data: bio
                });
        });
    });
};

    // Delete Bio
exports.Dao_Delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
         }, function (err, contact) {
            if (err)
                res.send(err)
            res.json({
                message: "*** Patient Appointment ***",
                status: "success",
                message: 'Patient Appointment Deleted'
        });
    });
};  
      