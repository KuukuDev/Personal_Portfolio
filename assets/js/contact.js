/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_hw8n32b','template_gshxv08','#contact-form','TG27PNxFDpJN4svWJ')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Message Sent'


        //Remove message after 3 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)

        //Clear input fields
        contactForm.reset()
    }, () => {
        //Show Error Messaage
        contactMessage.textContent = 'Message Not Sent'
    })
}

contactForm.addEventListener('submit', sendEmail)