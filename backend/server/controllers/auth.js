const {contactUsEmail} = require("../mailTemplate/contact")
const contact = require("../models/contact")
const {mailSender} = require("../utils/mailSender")

exports.contact = async (req,res) => {
    try {
      const { fullName ,email, message } = req.body

      if(!fullName || !email || !message){
        return res.status(404).json({
          success:false,
          message:"fill all details"
        })
      }

      const contactDetails = contact.create({fullName,email,message});

      

      const senderResponce = await mailSender(
        email,
        "confirmation email",
        contactUsEmail(fullName,email,  message,)
      )

      const recieverResponce = await mailSender(
        "anuragrajpoot2468@gmail.com",
        "new contact details",
        `${fullName} with mail Id:${email} contacted you with a message: ${message}`

      )

      return res.json({
        success: true,
        message: "contact successfull",
        senderResponce,
        recieverResponce
      })
    } catch (error) {
      return res.json({
        error: error.message,
        success: false,
        message: `error while contacting`,
      })
    }
  }