var reserveForm = document.querySelector('#reserveForm');
console.log(reserveForm);

var formValid = false;
var pickupDate = false;
var dropoffDate = false;
var selectedDropOff;
var selectedPickUp;
var vehicleType;
var location;


var submitReservation = document.querySelector('#submitReservation');
submitReservation.disabled = true;

var buttonValidation = document.querySelector("#buttonValidation");
var KMS = document.querySelector('#KMS');
var estimatedKMS = document.querySelector('#estimatedKMS');



var pickupTime = document.querySelector('#pickupTime').value;
var dropOffTime = document.querySelector('#dropOffTime').value;




// if(estimatedKMS) {
//     estimatedKMS.value = '';
// }

var selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
var dateTextHint = document.querySelector('.dateTextHint');
pickupLocation = document.querySelector('select[name="location"]').value;
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
    // console.log($('input:radio[name=vehicle]'));
    // vehicleType = $('input:radio[name=vehicle]');
    // location = $('select[name="location"]');

    selectedPickUp = $('#pickupDate').datepicker("getDate");
    selectedDropOff = $('#dropOffDate').datepicker("getDate");


    // if both pickup and drop off times are filled out

    if(selectedPickUp && selectedDropOff) {
        console.log('in the validation');


        // if both dates are on the same day
        if(selectedPickUp.getTime() == selectedDropOff.getTime()) {
            console.log('in the if statement where pickupDate getTime and DropoffDate getTime are the same');
            
            if(dropOffTime >= pickupTime) {
                // dateTextHint.innerHTML='Dates are not valid';
                formNotValid();
                console.log('form isnt valid from dropoffTime is bigger or equal to pickup time');
            return;
            }
        }

        // if the renter is choosing a truck, make sure estimated kms is filled out
        if (selectedVehicle == 'truck-option') {
            // var estimatedKMS = document.querySelector('#estimatedKMS').value;
            console.log('in the selected truck option');
            console.log(selectedPickUp);
            console.log(estimatedKMS.value);
            if(selectedPickUp != false && (estimatedKMS.value !=false || estimatedKMS.value != 0 || estimatedKMS.value !='') && estimatedKMS.value > -1) {
                formIsValid();
            }
            else {
                formNotValid();
            }
        }
        // if the renter is choosing anything other than a truck
        else if(selectedVehicle !='truck-option') {
            if(selectedPickUp && selectedDropOff) {
                formIsValid();
            }
        }
        else {
            formNotValid();
        }
    }
}

function formIsValid() {
    //change button appearance and enable click
    buttonValidation.classList.remove('gray-button');
    buttonValidation.classList.add('go-button-green');
    submitReservation.disabled = false;
}
function formNotValid() {
    //change button appearance and disable click;
    buttonValidation.classList.add('gray-button');
    buttonValidation.classList.remove('go-button-green');
    submitReservation.disabled = true;
}


$( "#pickupDate" ).datepicker({
    minDate: 0,
    showOtherMonths: true,
    buttonImage: "/images/calendar-datepicker-icon.png",
    showOn: 'both',
    gotoCurrent: true,
    defaultDate: +1,
    prevText: "<< ",
    nextText: ' >>',
    onSelect: function (evt, ui) {
            var dropoffDate = $('#dropOffDate');
            var startDate = $(this).datepicker('getDate');
            startDate.setDate(startDate.getDate() + 1);
            var minDate = $(this).datepicker('getDate');
            dropoffDate.datepicker('setDate', startDate);
            dropoffDate.datepicker('option', 'minDate', startDate);
            validateForm();
            // $(this).datepicker('option', 'minDate', minDate);
        }
});



$( "#dropOffDate" ).datepicker({
    minDate: 0,
    showOtherMonths: true,
    buttonImage: "/images/calendar-datepicker-icon.png",
    showOn: 'both',
    gotoCurrent: true,
    defaultDate: +1,
    nextText: ' >>',
    prevText: '<< ',
    onSelect: function (evt, ui) {
            validateForm();
        }
});

$('form').submit(function(e){
    e.preventDefault();

    console.log('in the submit');
    var formdata = {
        vehicle : selectedVehicle,
        pickupLocation : pickupLocation,

        pickupDate : selectedPickUp,
        pickupTime : pickupTime,

        dropOffDate : selectedDropOff,
        dropOffTime : dropOffTime,
        estimatedKMS : estimatedKMS
    };
    console.log(formdata);
    // $.ajax({
    //     type: 'POST',
    //     url: '#',
    //     data: formdata,
    //     dataType: json,
    //     encode: true
    // })
    // .done(function(data){
    //     console.log(data);
    // });
    // e.preventDefault();
});
