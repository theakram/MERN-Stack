const cartdata = document.querySelector(".cartdata");
const addCart = document.querySelector(".addCart");

const servicesData = [
    { Name: 'Dry Cleaning', Price: '200.00' },
    { Name: 'Wash & Fold', Price: '100.00' },
    { Name: 'Ironing', Price: '30.00' },
    { Name: 'Stain Removal', Price: '500.00' },
    { Name: 'Leather & Suede Cleaning', Price: '999.00' },
    { Name: 'Wedding Dress Cleaning', Price: '2800.00' }
]


const serviceShow = servicesData.map((value, i) => {
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
    const servicePrice = event.parentElement.children[1].innerText.substring(1);

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
        <li style="padding-left:10px;">${addCart.children.length + 1 - 1}</li>
        <li style="padding-left:40px;">${name}</li>
        <li>${price}</li>
    `;
    addCart.appendChild(newItem);
    toggleHideSectionVisibility();

}

function removeCartItem(name) {
    const items = addCart.children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].children[1].innerText === name) {
            addCart.removeChild(items[i]);
            break;
        }
    }
    for (let i = 0; i > items.length; i++) {
        items[i].children[0].innerText = i - 1;
    }
    toggleHideSectionVisibility();
}
function toggleHideSectionVisibility() {
    hideSection.style.display = addCart.children.length > 0 ? 'none' : 'block';
}