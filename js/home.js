
// VARIABLES -----------------------------------------------

var red = document.querySelector('#businessTrucks');

// sets the height of the red swoosh to the height of the hero panel,
// equalizes the heights of the cars and personal trucks panel on medium size
function setHeroHeight() {
    var cars = document.querySelector('#cars');
    var personalTrucks = document.querySelector('#personalTrucks').offsetHeight;
    // var personalTrucks = document.querySelector('#personalTrucks');
    if(window.innerWidth >= 1024) {       
        // cars.style.height = "auto";
        var carSelection = document.querySelector('#carSelection').offsetHeight;
        // var carSelection = document.querySelector('#carSelection').style.height;
        // console.log(carSelection+' is the car selection height');
        red.style.height = carSelection+'px';
    }
    else if(window.innerWidth >= 639 && window.innerWidth < 1024) {
        cars.style.height=personalTrucks+'px';
    }
    else if(window.innerWidth < 638) {
        cars.style.height = 'auto';
    }
}

window.onresize = function(e) {
	setHeroHeight();
};

window.onload = setHeroHeight;


