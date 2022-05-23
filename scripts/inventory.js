// Getting the item from the local Storage
var productArr= JSON.parse(localStorage.getItem('products'))

// function invocation to display products
displayData(productArr)

// this function displays products uses objects saved in productArr
function displayData(data){

    // forEach is used to get all the elements in the array and a callback funtion is applied
    data.forEach(function(elem,index){

        // one div is created to append all the data from one element
        let box= document.createElement('div')

        // img tag created to show img
        let image= document.createElement('img')
        image.setAttribute('src',elem.image)

        let type= document.createElement('p')
        type.innerText= elem.type   //taking the type form the object data

        let desc= document.createElement('p')
        desc.innerText= elem.desc  //taking the desc form the object data

        let price= document.createElement('p')
        price.innerText= elem.price   //taking the price form the object data

        // remove button created
        let remove= document.createElement('button')
        remove.innerText= 'Remove'
        remove.setAttribute('id','remove_product') 

        // added on click event on remove button to remove the items
        remove.addEventListener('click',function(){
            removefunc(elem,index)  //function invoked here and used anonymous function in the eventListener
        })

        box.append(image,type,desc,price,remove)  //appended data in the box
        document.querySelector('#all_products').append(box)  //appended data box containing into the all_products div
    })
}

// function to remove products
function removefunc(elem,index){
    productArr.splice(index,1) // splice to delete items using index and count of deletion
    localStorage.setItem('products',JSON.stringify(productArr)) //setting all the items after deleting some item
    window.location.reload() //reloaded the page to remove the product immidiately from the dom after clickin gon remove
}