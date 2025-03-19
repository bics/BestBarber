function showModal(faq) {    


    if (faq)
    {
        document.getElementById("calendar").style.display = "none";
        document.getElementById("faq-container").style.display = "block"
        document.getElementById("modal-title").innerHTML = "Question";
    }
    else
    {
        document.getElementById("modal-title").innerHTML = "Appointment";
        document.getElementById("calendar").style.display = "block";
        document.getElementById("faq-container").style.display = "none"
    }

    document.getElementById("modal-background").style.display = "block";
}

function hideModal() {
    document.getElementById("modal-background").style.display = "none";
}

function showConfirmation() {
    document.getElementById("contact-modal-confirmation").style.display = "block";
    document.getElementById("contact-modal-form").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("contact-modal-footer").style.justifyContent = "center";
}

function hideConfirmation() {
    document.getElementById("contact-modal-confirmation").style.display = "none";
    document.getElementById("contact-modal-form").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("contact-modal-footer").style.justifyContent = "space-between";
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