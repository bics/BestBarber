function showModal(faq) {    


    if (faq)
    {
        document.getElementById("calendar").style.display = "none";
        document.getElementById("faq-container").style.display = "block"
        document.getElementById("modal-title").innerHTML = "Question";
        document.getElementById("confirmation-text").innerHTML = "Thank you, we will get back to you as soon as we can.";
    }
    else
    {
        document.getElementById("modal-title").innerHTML = "Appointment";
        document.getElementById("confirmation-text").innerHTML = "Thank you for choosing an appointment with us.";
        document.getElementById("calendar").style.display = "flex";
        document.getElementById("faq-container").style.display = "none"
    }

    document.getElementById("modal-background").style.display = "flex";
}

function hideModal() {
    document.getElementById("modal-background").style.display = "none";
}

function showConfirmation() {

    let valid = validateInputFields();
    if (valid)
    {
        document.getElementById("contact-modal-confirmation").style.display = "block";
        document.getElementById("contact-modal-body").style.display = "none";
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("contact-modal-footer").style.justifyContent = "center";
        clearFields();
    }
}

function hideConfirmation() {
    document.getElementById("contact-modal-confirmation").style.display = "none";
    document.getElementById("contact-modal-body").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("contact-modal-footer").style.justifyContent = "space-between";
}

function validateInputFields() {
    let valid = false;
    let visibleFaq = document.getElementById("faq-container").style.display;
    
    valid = validateNameField();
    valid = validateEmailField();
    if (visibleFaq != "none")
    {
        valid = validateFaqContainer();
    }
    return valid;

}

function validateNameField() {
    if (document.getElementById("name").value == "")
    {
        return false;
    }
    return true;
}

function validateEmailField() {
    if (document.getElementById("email").value == "")
    {
        return false;
    }
    if (!document.getElementById("email").value.includes("@"))
    {
        return false;
    }
    return true;
}

function validateFaqContainer() {
    if (!document.getElementById("faq-input-box").value == "")
    {
        return true;
    }

    return false;
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("faq-input-box").value = "";
}

function MoveForward() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = document.getElementById("month-text").getAttribute("alt")
    if (month >= months.length-1)
    {
        month = 0;
        document.getElementById("month-text").innerHTML = months[month];
        document.getElementById("month-text").setAttribute("alt", month);
    }
    else
    {        

    month = parseInt(month) + 1 ;
    document.getElementById("month-text").innerHTML = months[month];
    document.getElementById("month-text").setAttribute("alt", month);
    }
}

function MoveBackward() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = document.getElementById("month-text").getAttribute("alt")
    if (month == 0)
    {
        month = 11;
        document.getElementById("month-text").innerHTML = months[month];
        document.getElementById("month-text").setAttribute("alt", month);
    }
    else
    {
        month = parseInt(month) - 1 ;
        document.getElementById("month-text").innerHTML = months[month];
        document.getElementById("month-text").setAttribute("alt", month);
    }
    

}

function SelectDate(x) {
    document.getElementById("month").style.display = "none";
    document.getElementById("days").style.display = "none";

    let selectedDate = document.getElementById("month-text").innerHTML + " " + x;
    document.getElementById("selected-date").innerHTML = selectedDate;
    document.getElementById("selected-date-div").style.display = "block";
}

function ReSelectDate() {        
    document.getElementById("month").style.display = "flex";
    document.getElementById("days").style.display = "flex";

    document.getElementById("selected-date-div").style.display = "none";
}