const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName:{
        type: String
    },
    mobileNo: {
        type: Number
    },
    email:{
        type: String
    },
    profileSummary:{
        type: String
    },
    location:{
        type: String
    },
    experience:{
        type: String
    },
    currentSalary:{
        type: String
    },
    expectedSalary:{
        type: String
    },
    resumeHeadline:{
        type: String
    },
    keyskills:{
        type: String
    },
    employment:{
        type: String
    },
    education:{
        type: String
    },
    itSkills:{
        type: String
    },
    project:{
        type: String
    },
    DOB:{
        type: String
    },
    address:{
        type: String
    },
    gender:{
        type: String
    },
    pincode:{
        type: String
    },
    maritalStatus:{
        type: String
    },
    hometown:{
        type: String
    },
    ObjId: {
        type: ObjectID
    },
})