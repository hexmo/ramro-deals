var mainData;
var subData;
var productDisplayClass = document.getElementById('product-display');

// listener
window.addEventListener('DOMContentLoaded', (event) => {
    displayData(mainData);
});


// this method json data embedded in html page
function assignData(jsonfile) {
    mainData = jsonfile;
    subData = jsonfile;
}

function displayData(data) {
    // looping through json data
    for (var i = 0; i < data.length; i++) {
        // card OR product container
        var productDiv = document.createElement("div");
        productDiv.className = 'product-card'
        productDisplayClass.appendChild(productDiv);

        // image
        var image = document.createElement("img");
        image.className = 'product-image';
        image.src = data[i].image_url;

        // name
        var productName = document.createElement("h1");
        productName.className = 'product-name';
        productName.innerHTML = data[i].name;

        // name and image append
        productDiv.appendChild(image);
        productDiv.appendChild(productName);

        // price
        var productPrice = document.createElement("h2");
        productPrice.className = 'product-price';
        productPrice.innerHTML = "NRs: " + data[i].price;

        // vendor
        var productLink = document.createElement('a');
        productLink.className = 'product-link';
        productLink.href = data[i].product_url;
        productLink.target = '_blank'
        productLink.innerHTML = "Buy it on " + data[i].vendor;

        // price and vendor container
        var priceVendor = document.createElement("div");
        priceVendor.className = 'price-vendor-container';

        // append price and vendor
        priceVendor.appendChild(productPrice);
        priceVendor.appendChild(productLink);

        // append price-vendor-container to product container
        productDiv.appendChild(priceVendor);
    }
}

function clearData() {
    productDisplayClass.innerHTML = "";
}

function sortingFilter(){
    sortObj = document.getElementById('sort-filter');

    if(sortObj.selectedIndex == 0){
        setDefault();
    }else if (sortObj.selectedIndex == 1){
        setIncreasingPrice();
    }else if (sortObj.selectedIndex == 2){
        setDecreasingPrice();
    }
}


function setDefault() {
    // clearing all data
    clearData();

    displayData(mainData);
}

function setDecreasingPrice() {
    // clearing all data
    clearData();

    subData.sort(compareHighPrice);

    displayData(subData);

}

function setIncreasingPrice() {
    // clearing all data
    clearData();

    subData.sort(compareLowPrice);

    displayData(subData);
}

// comparision coditions
function compareLowPrice(a, b) {
    let comparision = 0;

    if (a.price > b.price) {
        comparision = 1;
    } else if (a.price < b.price) {
        comparision = -1;
    }

    return comparision;
}

function compareHighPrice(a, b) {
    let comparision = 0;

    if (a.price < b.price) {
        comparision = 1;
    } else if (a.price > b.price) {
        comparision = -1;
    }

    return comparision;
}
