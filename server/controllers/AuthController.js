const authSchema = require('../models/AuthModel')


const getData = (req, res) => {
    authSchema.find()
        .then(data => {
            res.status(200).json({
                message: 'All Data Retreived',
                result: data
            })
        })
        .catch(err => {
            res.status(404).json({
                message: err
            })
        })
}


module.exports = {
    getData: getData
}
// module.exports = {
//     getData: function (req, res) {
//         res.send('All todos')
//     }
// }