const cartdata = document.querySelector(".cartdata");
const addCart = document.querySelector(".addCart");
const totalAmountDisplay = document.querySelector("#totalAmount"); // Assuming you have an element with id="totalAmount" to display total amount

let totalAmount = 0; // Variable to keep track of total amount

const servicesData = [
    { Name: 'Dry Cleaning', Price: '200.00' },
    { Name: 'Wash & Fold', Price: '100.00' },
    { Name: 'Ironing', Price: '30.00' },
    { Name: 'Stain Removal', Price: '500.00' },
    { Name: 'Leather & Suede Cleaning', Price: '999.00' },
    { Name: 'Wedding Dress Cleaning', Price: '2800.00' }
];

const serviceShow = servicesData.map((value) => {
    return `
        <ul class="first">
            <li>${value.Name}</li>
            <li>&#8377;${value.Price}</li>
            <button onclick="ToggalBtn(this)">Add Item <i class="fa-regular fa-circle-plus"></i></button>
        </ul>`;
});

cartdata.innerHTML = serviceShow.join('');

function ToggalBtn(event) {
    let text = event.innerHTML;
    const serviceName = event.parentElement.children[0].innerText;
    const servicePrice = parseFloat(event.parentElement.children[1].innerText.substring(1)); // Parse price as float

    if (text === 'Add Item <i class="fa-regular fa-circle-plus"></i>') {
        event.innerHTML = 'Remove Item <i class="fa-regular fa-circle-minus"></i>';
        event.style.color = '#8d0940';

        addCartItem(serviceName, servicePrice);
    } else {
        event.innerHTML = 'Add Item <i class="fa-regular fa-circle-plus"></i>';
        event.style.color = 'black';

        removeCartItem(serviceName);
    }
    toggleHideSectionVisibility();
}

function addCartItem(name, price) {
    const newItem = document.createElement('ul');
    newItem.innerHTML = `
        <li style="padding-left:10px;">${addCart.children.length + 1}</li>
        <li style="padding-left:40px;">${name}</li>
        <li>&#8377;${price.toFixed(2)}</li>
        
    `;
    addCart.appendChild(newItem);

    totalAmount += price; // Add to total amount
    updateTotalAmount(); // Update total amount display

    // Update serial numbers
    updateSerialNumbers();

    document.querySelector(".bookBtn").style.backgroundColor = "blue";
    document.querySelector(".bookBtn").style.color = "white";
    document.querySelector(".additem").innerText = "";
}

function removeCartItem(name) {
    const items = addCart.children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].children[1].innerText === name) {
            const price = parseFloat(items[i].children[2].innerText.substring(1)); // Parse price as float
            addCart.removeChild(items[i]);
            totalAmount -= price; // Subtract from total amount
            break;
        }
    }
    updateTotalAmount(); // Update total amount display

    updateSerialNumbers();
}

function updateTotalAmount() {
    totalAmountDisplay.textContent = ` ${totalAmount.toFixed(2)}`; // Update total amount display
}

function updateSerialNumbers() {
    const items = addCart.children;
    for (let i = 0; i < items.length; i++) {
        items[i].children[0].innerText = i + 0; // Update serial numbers starting from 1
    }
}

function toggleHideSectionVisibility() {
    hideSection.style.display = addCart.children.length > 0 ? 'none' : 'block';
}


document.querySelector(".bookBtn")
.addEventListener("click", (event)=>{
    event.preventDefault();

    let fullName = document.querySelector(".fullname");
    let email = document.getElementById("email");
    let phoneNumber = document.getElementById("phoneNumber");

    if (fullName.checkValidity() && email.checkValidity() && phoneNumber.checkValidity()) {
        // All fields are valid, change button background color to red
        console.log("all right");
        
    } else {
        document.querySelector(".additem").innerHTML = `<a href="#">
                                <i style="padding: 0 5px;" class="fa-regular fa-circle-info"></i>
                                <span class="firzi">Add the item to the cart to book</span>
                            </a>`;
        // If any field is invalid, do not change the button color
        console.log("Form is not valid.");
    }
});
