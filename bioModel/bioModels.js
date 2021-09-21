var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    Appointment_Identifier: {
        type: String,
        required: true
    },
    Appointment_status: {
        type: String,
        required: true
    },
    Appointment_CancellationReason: {
        type: String,
        required: true
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
        required:true
    },
    Appointment_Description: {
        type: String,
        required:true
    },
    Appointment_SupportingInformation: {
        type: String,
        required: true
    },
    Appointment_start: {
        type: Date,
        required: true
    },
    Appointment_end: {
        type: Date,
        required: true
    },
    Appointment_Slot: {
        type: String,
        required: true
    },
    Appointment_Comment: {
        type: String,
        required: true
    },
    Appointment_Participant: {
        type: String,
        required: true
    },
    Appointment_Participant_type: {
        type: String,

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
        required: true
    },
    Appointment_requestedPeriod: {
        type: String,
        required: true
        
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}