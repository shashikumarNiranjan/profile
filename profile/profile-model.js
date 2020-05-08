const mongoose = require('mongoose')

const Profile = mongoose.model('Profile', require('./profile-schema'));

module.exports = Profile;