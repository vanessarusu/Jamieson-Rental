var reserveForm = document.querySelector('#reserveForm');

var formValid = false;
var pickupDate = false;
var dropoffDate = false;
var submitReservation = document.querySelector('#submitReservation');
submitReservation.disabled = true;
var buttonValidation = document.querySelector("#buttonValidation");
var KMS = document.querySelector('#KMS');
var estimatedKMS = document.querySelector('#estimatedKMS');
if(estimatedKMS) {
    estimatedKMS.value = '';
}
var selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
var dateTextHint = document.querySelector('.dateTextHint');
// var buttonTextHint = document.querySelector('.buttonTextHint');





function removeKMS() {
    $("#KMS").slideUp();
    selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
    // estimatedKMS.value = '';
    validateForm();
}
function addKMS() {
    $("#KMS").slideDown();
    selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
    validateForm();
}


function validateForm() {
    // dateTextHint.innerHTML ='';
    // buttonTextHint.innerHTML ='';
        
    var pickupTime = document.querySelector('#pickupTime').value;
    var dropOffTime = document.querySelector('#dropOffTime').value;
    // console.log(pickupDate.date.getTime());
    // console.log(dropoffDate.date.getTime());
        if(pickupDate.date.getTime() == dropoffDate.date.getTime()) {
            console.log('in the if statement where pickupDate getTime and DropoffDate getTime are the same');
            if(dropOffTime >= pickupTime) {
                dateTextHint.innerHTML='Dates are not valid';
                formNotValid();
                console.log('form isnt valid from dropoffTime is bigger or equal to pickup time');
            return;
            }
    }
    if (selectedVehicle == 'truck-option') {
        if(pickupDate != false && (estimatedKMS.value !=false || estimatedKMS.value != 0 || estimatedKMS.value !='') && estimatedKMS.value > -1) {
            formIsValid();
        }
        else {
            formNotValid();
        }
    }
    else if(selectedVehicle !='truck-option') {
        if(pickupDate !=false) {
            formIsValid();
        }
    }
    else {
        formNotValid();
    }
}

function formIsValid() {
    buttonValidation.classList.remove('gray-button');
    buttonValidation.classList.add('red-button');
    submitReservation.disabled = false;
}
function formNotValid() {
    buttonValidation.classList.add('gray-button');
    buttonValidation.classList.remove('red-button');
    submitReservation.disabled = true;
}


var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var pickupDate = $('#pickupDate').fdatepicker({
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    if (ev.date.valueOf() > dropoffDate.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 2);
        dropoffDate.update(newDate);
    }
    pickupDate.hide();
    validateForm();
    $('#dropoffDate')[0].focus();
}).data('datepicker');
var dropoffDate = $('#dropoffDate').fdatepicker({
    onRender: function (date) {
        return date.valueOf() <= pickupDate.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    dropoffDate.hide();
    validateForm();
}).data('datepicker');


