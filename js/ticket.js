function scrollToSection(sectionId) {
    console.log('Button pressed');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function clickbutton() {
    scrollToSection('seat-select');
}

function ShowSeat() {
    scrollToSection('show-seat-info');
}

function ShowOffers() {
    scrollToSection('offers');
}

// function selectSeat(seat) {
//     // Replace this with your logic to get class and price based on the seat
//     var className = "Economy";
//     var price = "550";

//     // Create elements and set content
//     var seatElement = document.createElement("h6");
//     seatElement.textContent = seat;

//     var classElement = document.createElement("h6");
//     classElement.textContent = className;

//     var priceElement = document.createElement("h6");
//     priceElement.textContent = price;

//     // Get the info container and append the elements
//     var infoContainer = document.getElementById("infoContainerEmpty");
//     infoContainer.appendChild(seatElement);
//     infoContainer.appendChild(classElement);
//     infoContainer.appendChild(priceElement);
// }
// var selectedSeats = []; // Assume you have selected seats array
var totalPriceElement = document.getElementById("totalPrice");
var afterCouponPriceElement = document.getElementById("afterCouponPrice");

// function selectSeat(seat) {
//     // Replace this with your logic to get class and price based on the seat
//     var className = "Economy";
//     var price = 550; // Use a numerical value for price

//     // Create elements and set content
//     var seatElement = document.createElement("p");
//     seatElement.textContent = "Seat " + seat;

//     var classElement = document.createElement("p");
//     classElement.textContent = className;

//     var priceElement = document.createElement("p");
//     priceElement.textContent = "$" + price;

//     // Get the info container and append the elements
//     var infoContainer = document.getElementById("infoContainerEmpty");
//     infoContainer.appendChild(seatElement);
//     infoContainer.appendChild(classElement);
//     infoContainer.appendChild(priceElement);

//     // Update the selected seats array
//     selectedSeats.push({ seat: seat, class: className, price: price });

//     // Update total amount
//     updateTotal();
// }

var selectedSeats = []; // Assume you have selected seats array
var maxSeats = 4; // Maximum number of seats allowed

function selectSeat(seat) {
    var button = document.getElementById(seat);

    // Check if the seat is already selected
    var seatIndex = selectedSeats.findIndex(s => s.seat === seat);
    
    if (seatIndex === -1 && selectedSeats.length < maxSeats) {
        // Seat not selected and within the limit, proceed to select
        var className = "Economy";
        var price = 550; // Use a numerical value for price

        // Create elements and set content
        var seatElement = document.createElement("p");
        seatElement.textContent = "" + seat;

        var classElement = document.createElement("p");
        classElement.textContent = className;

        var priceElement = document.createElement("p");
        priceElement.textContent = "" + price;

        // Get the info container and append the elements
        var infoContainer = document.getElementById("infoContainerEmpty");
        infoContainer.appendChild(seatElement);
        infoContainer.appendChild(classElement);
        infoContainer.appendChild(priceElement);

        // Update the selected seats array
        selectedSeats.push({ seat: seat, class: className, price: price });

        // Update total amount
        updateTotal();

        // Change button color to orange
        button.style.backgroundColor = "orange";
    } else if (seatIndex !== -1) {
        // Seat is already selected, unselect it
        var infoContainer = document.getElementById("infoContainerEmpty");
        
        // Remove the seat information from the info container
        infoContainer.removeChild(infoContainer.lastChild);
        infoContainer.removeChild(infoContainer.lastChild);
        infoContainer.removeChild(infoContainer.lastChild);

        // Remove the seat from the selectedSeats array
        selectedSeats.splice(seatIndex, 1);

        // Update total amount
        updateTotal();

        // Change button color back to default
        button.style.backgroundColor = "";
    }
}





function updateTotal() {
    var total = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);
    totalPriceElement.textContent = total;
    applyCoupon(); // Apply coupon on every total update
}

function applyCoupon() {
    var couponInput = document.getElementById("couponInput").value;
    var discount = 0;

    // Check if the applied coupon is 'c100'
    if (couponInput === 'c100') {
        discount = 100;
    }

    var totalAfterDiscount = totalPriceElement.textContent - discount;
    afterCouponPriceElement.textContent = Math.max(totalAfterDiscount, 0); // Ensure the price is not negative
}