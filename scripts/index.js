//store the products array in localstorage as "products"

// Adding submit Event to the form
document.querySelector('#products').addEventListener('submit',addProductfunc)

// productArr is array to store the product objects
var productArr= JSON.parse(localStorage.getItem('products')) || []

// function that works on Submit
function addProductfunc(){

    // to prevent the refreshing to the form
    event.preventDefault()

    // constructor function to construct product Objects
    function ProductData(type,desc,price,image){
        this.type= type;
        this.desc= desc;
        this.price= price;
        this.image= image;
    }

    // using new key word to make objects
    let productObj = new ProductData(products.type.value, products.desc.value, products.price.value, products.image.value)

    
    // checking that empty entries do not sent to localstorage
    if(productObj.type== "" || productObj.desc== "" || productObj.price== "" || productObj.image== ""){
        alert('fill all details!!')
    }
    else{

        // Pushing objects in to the productArr
        productArr.push(productObj)

        // setting Item into local storage
        localStorage.setItem('products',JSON.stringify(productArr))

        // It is used to empty the form after data has been added
        window.location.reload()
    }
}
