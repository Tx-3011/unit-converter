let value = document.getElementById("inputBox").value
let convert = document.getElementById("convert")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function convertLength1(length){
    return length*3.2808
}

function convertVolume1(volume){
    return volume*0.2641
}

function convertMass1(mass){
    return mass*2.2046
}

function convertLength2(length){
    return length/3.2808
}

function convertVolume2(volume){
    return volume/0.2641
}

function convertMass2(mass){
    return mass/2.2046
}


convert.addEventListener("click",function(){
    let value = document.getElementById("inputBox").value
    length.textContent = `${value} meters = ${convertLength1(value)} feet | ${value} feet = ${convertLength2(value)} meters`


})