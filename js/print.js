$(document).ready(function() {

	// function to print the confirmation
	function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    $('#printButton').click(function(){
    	printDiv('printableConfirmation');
    });

});