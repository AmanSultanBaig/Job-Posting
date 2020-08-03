const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/job-posting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connection Established'))
    .catch((err) => console.log(err))

module.exports = mongoose;