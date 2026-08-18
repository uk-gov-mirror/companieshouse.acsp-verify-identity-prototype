//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



router.use('/', require('./routes/routes-v4.js'))


router.use('/', require('./routes/routes-v5.js'))

router.use('/', require('./routes/routes-v6.js'))


router.use('/', require('./routes/routes-v7.js'))

router.use('/', require('./routes/routes-v8.js'))

router.use('/', require('./routes/routes-v9.js'))

router.use('/', require('./routes/routes-v10.js'))

router.use('/', require('./routes/routes-v11.js'))

router.use('/', require('./routes/routes-v12.js'))

router.use('/', require('./routes/routes-v13.js'))

router.use('/', require('./routes/routes-v1-match-link.js'))

router.use('/', require('./routes/routes-v1-amend.js'))

router.use('/', require('./routes/routes-v2-amend.js'))

router.use('/', require('./routes/routes-v1-reverify.js'))

module.exports = router