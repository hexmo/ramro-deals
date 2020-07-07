var mainData;
var subData;
var currentData;
var currentPage = 1;
var lastPage = 1;
var paginationSize = 8;
var productDisplayClass = document.getElementById('product-display');

// listener
window.addEventListener('DOMContentLoaded', (event) => {
    pagination();
    displayData(mainData, currentPage);
    currentData = mainData;

    // adding color to first button
    colorFirstPaginationButton()
});


// this method json data embedded in html page
function assignData(jsonfile) {
    mainData = jsonfile;
    subData = JSON.parse(JSON.stringify(jsonfile));
}

function displayData(data, pageNumber) {
    startIndex = (pageNumber - 1) * paginationSize;

    if (pageNumber === lastPage) {
        endIndex = data.length;
    } else {
        endIndex = startIndex + paginationSize;
    }
    // looping through json data
    for (var i = startIndex; i < endIndex; i++) {
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

function sortingFilter() {
    sortObj = document.getElementById('sort-filter');

    if (sortObj.selectedIndex == 0) {
        setDefault();
    } else if (sortObj.selectedIndex == 1) {
        setIncreasingPrice();
    } else if (sortObj.selectedIndex == 2) {
        setDecreasingPrice();
    }
}


function setDefault() {
    // clearing all data
    clearData();
    displayData(mainData, 1);
    colorFirstPaginationButton()
    currentData = mainData;
}

function setDecreasingPrice() {
    // clearing all data
    clearData();
    // sort data
    subData.sort(compareHighPrice);
    // display data
    displayData(subData, 1);
    colorFirstPaginationButton()
    currentData = subData;

}

function setIncreasingPrice() {
    // clearing all data
    clearData();
    // sort data
    subData.sort(compareLowPrice);
    // display data
    displayData(subData, 1);
    colorFirstPaginationButton()
    currentData = subData;
}

// comparision functions

// low price comparision function
function compareLowPrice(a, b) {
    let comparision = 0;

    if (a.price > b.price) {
        comparision = 1;
    } else if (a.price < b.price) {
        comparision = -1;
    }

    return comparision;
}

// high price comparision function
function compareHighPrice(a, b) {
    let comparision = 0;

    if (a.price < b.price) {
        comparision = 1;
    } else if (a.price > b.price) {
        comparision = -1;
    }

    return comparision;
}

// pagination codes start from here

// pagination
function pagination() {
    paginationContainer = document.getElementById('pagination-container');
    var totalPages = Math.ceil(mainData.length / paginationSize);
    lastPage = totalPages;

    for (let i = 0; i < totalPages; i++) {
        button = document.createElement('div');
        button.className = 'pagination-button';
        button.id = 'pg-btn-' + (i + 1);
        button.onclick = function () {
            changePaginationData(i + 1);
        }
        button.innerHTML = i + 1;
        // attaching
        paginationContainer.appendChild(button);
    }

}

function changePaginationData(id) {
    currentPage = id;
    clearData();
    displayData(currentData, id);

    //changing pagination button color
    previousSelectedButton = document.getElementsByClassName("active");
    previousSelectedButton[0].classList.remove('active');

    currentSelectedButton = document.getElementById("pg-btn-"+id);
    currentSelectedButton.classList.add('active');
};

function colorFirstPaginationButton(){
    // removing color from previously selected button
    previousSelectedButton = document.getElementsByClassName("active");
    if(previousSelectedButton.length > 0){
        previousSelectedButton[0].classList.remove('active');
    }

    // adding color to first button
    currentSelectedButton = document.getElementById("pg-btn-1");
    currentSelectedButton.classList.add('active');
}
