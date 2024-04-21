let currentProductIndex = 0;
const products = [
    { name: 'Dry Cleaning', price: '100.00', img: '/image_langry.jpg' },
    { name: 'iron', price: '30.00', img: '/ironimage.jpg' },
    { name: 'Dry Cleaning wedding', price: '200.00', img: '/dry-cleaning-a-wedding-dress.webp' },
    { name: 'sofa clining', price: '100.00', img: '/sofa clinning.jpg' },
];

const additembtn = document.querySelector('.additembtn');
const skipitembtn = document.querySelector('.skipitembtn');
const addData = document.getElementById('addData');
const images = document.getElementById('images');
const imagesData = document.getElementById('imagesData');
let msgEl = document.getElementById('msg');

let totalAmount = 0;

function displayProductDetails(product) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <div class="a">
                <div class="b">
                    <p style="padding-left:10px;">${addData.children.length+1}</p>
                    <p>${product.name}</p>
                </div>
                <div>
                    <p>${product.price}</p>
                </div>
            </div>`;

    addData.appendChild(listItem);

    images.innerHTML = `
            <img src="${product.img}" alt="product_image">`;

    imagesData.innerHTML = `
            <h3 class="imageData">${product.name}<i class="fa-solid fa-indian-rupee-sign"> ${product.price}</i></h3>`;

    totalAmount += parseFloat(product.price);
    document.getElementById('totalAmount').innerText = `${totalAmount.toFixed(2)}`;
    document.getElementById('hideSection').style.display = 'none';
}


additembtn.addEventListener('click', function () {
    if (currentProductIndex < products.length) {
        const currentProduct = products[currentProductIndex];
        displayProductDetails(currentProduct);
    }
    currentProductIndex++;
    btnBookNow.style.backgroundColor = "#3b64d3d5"
    btnBookNow.style.color = "aliceblue"
    msgEl.innerHTML = "";
});

skipitembtn.addEventListener('click', function () {
    if (currentProductIndex < products.length) {
        currentProductIndex++;
    }
});
let btnBookNow = document.getElementById('btnBookNow');

btnBookNow.addEventListener('click', function (event) {
    event.preventDefault();
    let addDataList = document.getElementById('addData').getElementsByTagName('li');
    
    if (addDataList.length === 0) {
        displayErrorMessage("Add the item to the cart to book");
    } else {
        
        bookNow();
    }
});

function displayErrorMessage(message) {
    msgEl.innerHTML = `<a href="#"><i class="fa fa-info-circle"></i>${message}</a>`;
    msgEl.classList.add("error");
}

function clearErrorMessage() {
    let msgEl = document.getElementById('msg');
    msgEl.innerHTML = "";
    msgEl.classList.remove("error");
    msgEl.classList.remove("success");
}

function bookNow() {
    clearErrorMessage();

    let fullName = document.querySelector('.fullname').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    
    if (fullName === "" || email === "" || phoneNumber === "") {
        displayErrorMessage("Thank you for contacting. We will get back to you soon.");
    }
}
