function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "wishquiz_feedback": contactForm.projectsummary.value, 
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        });
}