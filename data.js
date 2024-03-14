module.exports = () =>{
    const data={
        products:[]
    }
    for(let i=0;i<15;i++){
        data.products.push({
            id:1,title:`products${i}`
        })
    }
    return data
}