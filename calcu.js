let status = 'off';  // Initialize the status variable

// Function to add input to the calculator display
function addInput(value) {
    if (calstatus === 'on') {
        form1.answer.value += value;
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Clear input
function clearInput() {
    if (calstatus === 'on') {
        form1.answer.value = '';
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Square root function
function sqrt() {
    if (calstatus === 'on') {
        if (form1.answer.value) {
            form1.answer.value = Math.sqrt(parseFloat(form1.answer.value));
        } else {
            swal('Please enter a value for square root', '', 'error');
        }
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Delete last input (backspace)
function DEL() {
    if (status === 'on') {
        form1.answer.value = form1.answer.value.slice(0, -1);
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Percent function
function percent() {
    if (calstatus === 'on') {
        if (form1.answer.value) {
            form1.answer.value = parseFloat(form1.answer.value) / 100;
        } else {
            swal('Please enter a value for percentage', '', 'error');
        }
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Toggle calculator on/off
function onandoff() {
    if (calstatus === 'on') {
        calstatus = 'off';
        document.getElementById("btn").style = "background-color:#252525";
        document.getElementById("btn").value = 'on';
        document.getElementById("cal").readOnly = true; // Make the input readonly when off
        swal('Calculator is now off', '', 'warning');
    } else {
        calstatus = 'on';
        document.getElementById("btn").style = "background-color: #2a73ff; border-radius:15px; width:130px; height:60px;";
        document.getElementById("btn").value = 'off';
        document.getElementById("cal").readOnly = false; // Allow input when on
        swal('Calculator is now on', '', 'success');
    }
}

// Handle calculation
function calculate() {
    if (calstatus === 'on') {
        try {
            form1.answer.value = eval(form1.answer.value);
        } catch (e) {
            swal('Invalid input', '', 'error');
        }
    } else {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}

// Prevent form submission and check if calculator is off
function clck(event) {
    event.preventDefault();  // Prevent form submission
    if (calstatus === 'off') {
        swal('Click on the "on" button to use the calculator', '', 'error');
    }
}