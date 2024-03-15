let arr =[2,3,4]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr)
})

arr.forEach((element,index,arr)=>{
    console.log("arrows:",index,element,arr);
})


const heros=["a","b","c"]
heros.forEach((el) =>{console.log(el.toUpperCase());})

heros.map(function(element,index,heros){
    console.log(index,element,heros);
})