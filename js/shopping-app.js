////////////////// All fetches /////////////////

/////////////// fetch products //////////////////////

// fetch for all products
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for all categories
fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for certain categories
fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for single products
fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for sort results /
fetch('https://fakestoreapi.com/products?sort=desc')
    .then(res=>res.json())
    .then(json=>console.log(json))

/////////////////////// fetch carts ////////////////////

// fetch for all carts
fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for a single cart
fetch('https://fakestoreapi.com/carts/5')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch for sorting carts
fetch('https://fakestoreapi.com/carts?sort=desc')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch get user carts
fetch('https://fakestoreapi.com/carts/user/2')
    .then(res=>res.json())
    .then(json=>console.log(json))

//////////////////////// fetch users /////////////////////////////

// fetch get all users
fetch('https://fakestoreapi.com/carts/user/2')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch get single user
fetch('https://fakestoreapi.com/users/1')
    .then(res=>res.json())
    .then(json=>console.log(json))

// fetch sort users
fetch('https://fakestoreapi.com/users?sort=desc')
    .then(res=>res.json())
    .then(json=>console.log(json))

//////////////////////// fetch login /////////////////////////

// fetch user login
fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    })
})
    .then(res=>res.json())
    .then(json=>console.log(json))



//////////////////////// Global variables ////////////////////////




///////////////////////// Functions /////////////////////////////////////
const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}

const getCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await response.json();
    return categories;
}

const getCertainCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/category/\`${certainCategories}\``);
    const certainCategories = await response.json();
    return certainCategories
}

const getSingleProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/\`${singleProduct}\``);
    const singleProduct = await response.json();
    return singleProduct;
}






















////////////////////////////////// Event Listeners //////////////////////////////////