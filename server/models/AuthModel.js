const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Confirm_Password: {
        type: String,
        required: true
    },
    Account_Type: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('registration', RegistrationSchema)