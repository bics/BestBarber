function showModal(faq, id) {    
    
    clearOutOptions();
    getEmployeeNames();

    if (faq)
    {
        document.getElementById("faq-container").style.display = "block";
        document.getElementById("modal-title").innerHTML = "Question";
        document.getElementById("date-picker").style.display = "none";
        document.getElementById("name-selector").style.display = "none";
        document.getElementById("confirmation-text").innerHTML = "Thank you, we will get back to you as soon as we can.";
    }
    else
    {
        document.getElementById("modal-title").innerHTML = "Appointment";
        document.getElementById("date-picker").style.display = "block";
        document.getElementById("name-selector").style.display = "block";
        document.getElementById("name-selector").required = true;
        selectEmployee(id);
        document.getElementById("date").min = getCurrentDate();
        document.getElementById("confirmation-text").innerHTML = "Thank you for choosing an appointment with us.";
        document.getElementById("faq-container").style.display = "none";

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
    if (document.getElementById("faq-input-box").value == "")
    {
        return false;
    }

    return true;
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("faq-input-box").value = "";
    document.getElementById("date").value = "";
}

function getCurrentDate() {
    //Code snippet taken from chatGPT
    return new Date().toISOString().split("T")[0];
}

function getEmployeeNames() {
    const employees = document.getElementsByClassName("employee-name");
    for (let i=0;i<employees.length;i++)
    {
        let functionHelper = employees[i].id.split('-')
        let employeeIdFormatted = functionHelper[0] + " " + functionHelper[1];
        let option = document.createElement("option");
        option.text = employeeIdFormatted ;
        option.value = employeeIdFormatted;
        option.className = "employee-dropdown-option";
        document.getElementById("employee-select").add(option);
    }
}

function clearOutOptions ()
{
    const dropdownOptions = document.getElementsByClassName("employee-dropdown-option");
    for (let i=dropdownOptions.length-1;i>=0;i--)
    {
        document.getElementById("employee-select").remove(i);
    }
}

function selectEmployee(id) {
    const dropdownOptions = document.getElementsByClassName("employee-dropdown-option");
    for (let i=0;i<dropdownOptions.length;i++)
    {
        if (id == dropdownOptions[i].value)
        {
            document.getElementById("employee-select").selectedIndex = i;
        }
    }

}