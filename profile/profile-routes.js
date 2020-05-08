const router = require('express').Router();

const Profile = require('./profile-model'); 


 router.route('/profile').post((req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNo = req.body.mobileNo;
    const email = req.body.email;
    const profileSummary =  req.body.profileSummary;
    const location =  req.body.location;
    const experience =  req.body.experience;
    const currentSalary =  req.body.currentSalary;
    const expectedSalary =  req.body.expectedSalary;
    const resumeHeadline =  req.body.resumeHeadline;
    const keyskills =  req.body.keyskills;
    const employment =  req.body.employment;
    const education =  req.body.education;
    const itSkills =  req.body.itSkills;
    const project =  req.body.project;
    const DOB =  req.body.DOB;
    const address =  req.body.address;
    const gender =  req.body.gender;
    const pincode =  req.body.pincode;
    const maritalStatus =  req.body.maritalStatus;
    const hometown =  req.body.hometown;



    
            var ProfileObj = {
                firstName : firstName,
                lastName : lastName,
                mobileNo : mobileNo,
                email : email,
                profileSummary : profileSummary,
                location : location,
                experience : experience,
                currentSalary : currentSalary,
                expectedSalary : expectedSalary,
                resumeHeadline : resumeHeadline,
                keyskills: keyskills,
                employment:employment,
                education:education,
                itSkills:itSkills,
                project:project,
                DOB:DOB,
                address:address,
                gender:gender,
                pincode:pincode,
                maritalStatus:maritalStatus,
                hometown:hometown

            }
        
            Profile.create(ProfileObj, (err, Profile) => {
                        if (err) {
                            res.json({
                                success: false,
                                message: 'Profile not added ',
                                error: err
                            });
                        }
        
                        res.json({
                            success: true,
                            message: "Profile added successfully",
                            result: Profile
                        });
        
                    });
});


router.route('/profile-data').get((req, res) => {

    Profile.find({},function(err, response){
        if(err){
            console.log(err)
            res.json({
                success: false,
                message: "something went wrong!",
                error: err
            })
        } else {
            res.json({
                success: true,
                message: "Profile found",
                result: response
            })
        }
    
       
    })
});




module.exports = router;