function randomNumbers (contatore){
    const numeri = [];
    for (let i=0; i<contatore; i++){
        numeri.push(Math.floor(Math.random() * 100)+1);
    }
    
    return numeri;
}
console.log(randomNumbers(5)); //console.log per controllo