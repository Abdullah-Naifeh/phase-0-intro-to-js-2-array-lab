// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] ;

function destructivelyAppendCat (){
    cats.push("Ralph")
}

function destructivelyPrependCat (){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat (){
    cats.pop()
}

function destructivelyRemoveFirstCat (){
    cats.shift()
}


// function appendCat (newCat){

//     console.log([...cats , newCat]) 
// };

console.log(cats)
// appendCat("Broom")

function appendCat (newCat){

    newCat = [...cats , "Broom"]
    
    return newCat ;
};

console.log(appendCat())

function prependCat (prependedCat){

    prependedCat = [ "Arnold" ,...cats ]
    
    return prependedCat ;
};

console.log(prependCat())

function removeLastCat (slicedLastItem){
    slicedLastItem = cats.slice(0 ,-1)

    return slicedLastItem;
}

console.log(removeLastCat())

function removeFirstCat (slicedFirstItem){
    slicedFirstItem = cats.slice(1)

    return slicedFirstItem;
}

console.log(removeFirstCat())