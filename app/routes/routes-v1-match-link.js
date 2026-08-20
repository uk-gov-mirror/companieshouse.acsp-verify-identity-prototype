//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

module.exports = router

// Show session data and URLs in the terminal  
router.use((req, res, next) => {  
    const log = {  
      method: req.method,  
      url: req.originalUrl,  
      data: req.session.data  
    }  
    console.log(JSON.stringify(log, null, 2))  
    next()  
  }) 


/*
 * Start page
 */
router.post('/v1_match_link/start-page', function (req, res) {

    res.redirect('name')
    
})

/*
 * Public name, on the register
 */
router.post('/v1_match_link/name', function (req, res) {

    res.redirect('name-on-register')
    
})

/*
 * Public name, on the register
 */
router.post('/v1_match_link/name-on-register', function (req, res) {


     //Name preference 

     if (req.session.data['registerName'] === 'doc') {

        res.redirect('personal-code')

      } else {
        // go to the confirm address page
        res.redirect('name-for-the-register')
    
      }




    
})



/*
 * Name
 */
router.post('/v1_match_link/name-for-the-register', function (req, res) {

    res.redirect('personal-code')
    
})

/*
 * Personal code
 */
router.post('/v1_match_link/personal-code', function (req, res) {

    res.redirect('dob')
    
})




/*
 * Date of birth
 */
router.post('/v1_match_link/dob', function (req, res) {

    res.redirect('address-lookup')
    
})



/*
 * lookup  address
 */
router.post('/v1_match_link/address-lookup', function (req, res) {

          //if house number is empty
          if (req.session.data['house-number'] === '') {

            res.redirect('address-list')
    
          } else {
            // go to the confirm address page
            res.redirect('address-confirm')
        
          }
        
})


/*
 * Confirm home address
 */
router.post('/v1_match_link/address-confirm', function (req, res) {

    res.redirect('email-address')
    
})


/*
 * Email address
 */
router.post('/v1_match_link/email-address', function (req, res) {

    res.redirect('email-address-confirm')
    
})



/*
 * Email address confirm
 */

router.post('/v1_match_link/email-address-confirm', function (req, res) {

    if (req.session.data['email'] === 'identityduplicate@server.com') {
        res.redirect('duplicate-warning')
    } else 
    if (req.session.data['email'] === 'emailduplicate@server.com') {
        res.redirect('email-stop-screen')
    } else {
    // go to the confirm address page
        res.redirect('date-identity-checks')
    }  

})


/*
 * Duplicate warning
 */
router.post('/v1_match_link/duplicate-warning', function (req, res) {

    res.redirect('date-identity-checks')
    
})



/*
 * Date the documents were checked
 */
router.post('/v1_match_link/date-identity-checks', function (req, res) {

    res.redirect('format-of-the-documents-checked')
    
})




/*
 * Format the documents were checked
 */
router.post('/v1_match_link/format-of-the-documents-checked', function (req, res) {

     //if house number is empty
     if (req.session.data['security-check'] === 'Yes') {

        res.redirect('documents-checked-r1')

      } else {
        // go to the confirm address page
        res.redirect('documents-checked-r2')
    
      }

})




/*
 * Document group 1
 */
router.post('/v1_match_link/documents-checked-r1', function (req, res) {

    res.redirect('id-document-details')
    
})



/*
 * Document group 2
 */
router.post('/v1_match_link/documents-checked-r2', function (req, res) {

    res.redirect('id-document-details')
    
})


/*
 * Document details used for IDV
 */
router.post('/v1_match_link/id-document-details', function (req, res) {

    res.redirect('id-check')
    
})



/*
 * Declaration 
 */
router.post('/v1_match_link/id-check', function (req, res) {

    if (req.session.data['email'] === 'identityduplicate@server.com') {
        res.redirect('duplicate-stop')
    } else {
        res.redirect('check-your-answers')
    }  
    
})




/*
 * Check your answers before sending your application 
 */
router.post('/v1_match_link/check-your-answers', function (req, res) {

    res.redirect('confirmation')
    
})













  module.exports = router