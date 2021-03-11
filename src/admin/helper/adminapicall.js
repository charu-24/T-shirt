


//category calls

export const createCategory = (userId, token, category) =>{
    return fetch(`${process.env.API}/category/create/${userId}`, {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }
    )
    .then(response =>{ return response.json()})
    .catch(err => console.log(err))
}

//get all categories
export const getAllCategory = () => {
    return fetch(`${process.env.API}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}



//products calls

export const createProduct =(userId, token,product) => {
    return fetch(`${process.env.API}/product/create/${userId}`, {
        method: "POST",
        headers:{
            Accept: "application/json",
           
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//get all products
export const getAllProduct = () => {
    return fetch(`${process.env.API}/products`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


//delete a product
export const deleteProduct =(productId, userId, token) =>{
    console.log(`${process.env.API}/product/${userId}`)
    return fetch(`${process.env.API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers:{
            Accept: "application/json",
           
            Authorization: `Bearer ${token}`
        }

    })
    .then(response => {
        console.log("hey",response)
        return response.json()
    })
    .catch(err => console.log("hey erry",err))
}



//get a product
export const getProduct = productId =>{
    
    return fetch(`${process.env.API}/product/${productId}`, {
        method: "GET"
    })
    .then(response => {
       
        return response.json()
    })
    .catch(err => console.log(err))
}

//update a product
export const updateProduct = (productId, userId, token, product) =>{    
    
    return fetch(`${process.env.API}/product/${productId}/${userId}`, {
        
        method: "PUT",
        headers:{
            Accept: "application/json",
           
            Authorization: `Bearer ${token}`
        },
        body: product

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))

}

///DELETE CATEGORY

export const deleteCategory =(categoryId, userId, token) =>{
    console.log(`${process.env.API}/product/${userId}`)
    return fetch(`${process.env.API}/category/${categoryId}/${userId}`, {
        method: "DELETE",
        headers:{
            Accept: "application/json",
           
            Authorization: `Bearer ${token}`
        }

    })
    .then(response => {
        console.log("hey",response)
        return response.json()
    })
    .catch(err => console.log("hey erry",err))
}

//update categories
export const updateThisCategory = (categoryId, userId, token, category) =>{
    return fetch(`${process.env.API}/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers:{
            Accept: "application/json",
            
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }
    )
    .then(response =>{ return response.json()})
    .catch(err => console.log(err))
}

//get category
export const getCategory = categorytId =>{
    return fetch(`${process.env.API}/category/${categorytId}`, {
        method: "GET"
    })
    .then(response => {
        console.log(response)
        return response.text()
    })
    .catch(err => console.log(err))
}