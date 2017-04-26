(function(){
    var submitReservationButton = document.querySelector('#submitReservationButton');
    var rentalDetailsForm = document.querySelectorAll('#rentalDetailsForm input');
    submitReservationButton.disabled = true;


    var firstName = document.querySelector('#rentalDetailsForm #firstName');
    var lastName = document.querySelector('#rentalDetailsForm #lastName');
    var daytimePhone = document.querySelector('#rentalDetailsForm #daytimePhone');

    for(var i = 0; i< rentalDetailsForm.length; i++) {
        rentalDetailsForm[i].addEventListener('keyup', checkValid, false);
    }
    function checkValid(e) {
        if(firstName.value!='' && lastName.value!='' && daytimePhone.value !='') {
            submitReservationButton.disabled = false;
            submitReservationButton.classList.remove('gray-button');
            submitReservationButton.classList.add('go-button-green');
        }
        else {
            submitReservationButton.disabled = true;
            submitReservationButton.classList.add('gray-button');
            submitReservationButton.classList.remove('go-button-green');
        }
    }
})();