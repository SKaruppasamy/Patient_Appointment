var mongoose = require('mongoose');

//schema
var Schema = mongoose.Schema({
    Appointment : {
        type : String,
        required: false 
    },
    Appointment_Identifier: {
        type: String,
        required: false 
    },
    Appointment_status: {
        type: String,
        required: true
    },
    Appointment_CancellationReason: {
        type: String,
        required: false
    },
    Appointment_Specialty: {
        type: String,
        required: true
    },
    Appointment_ReasonCode: {
        type: String,
        required:true
    },
    Appointment_Priority : {
        type: String,
        required:false
    },
    Appointment_Description: {
        type: String,
        required:false
    },
    Appointment_SupportingInformation: {
        type: String,
        required: false
    },
    Appointment_start: {
        type: Date,
        required: false
    },
    Appointment_end: {
        type: Date,
        required: false
    },
    Appointment_Slot: {
        type: String,
        required: false
    },
    Appointment_Comment: {
        type: String,
        required: false
    },
    Appointment_Participant: {
        type: String,
        required:false
    },
    Appointment_Participant_type: {
        type: String,
        required: false
    },
    Appointment_Participant_actor: {
        type: String,
        required: true
    },
    Appointment_Participant_required: {
        type: String,
        required : true
    },
    Appointment_Participant_status: {
        type: String,
        required: true
    },
    Appointment_Participant_Period: {
        type: String,
        required: false
    },
    Appointment_requestedPeriod: {
        type: String,
        required: false
        
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var patient_Appoint = module.exports = mongoose.model('bio', Schema);

module.exports.get = function (callback, limit) {
   patient_Appoint.find(callback).limit(limit); 
}