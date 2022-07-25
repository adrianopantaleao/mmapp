const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    phone: {
        type: String
    }
}, {
    collection: 'Employees'
})

module.exports = mongoose.model('Employee', EmployeeSchema)
