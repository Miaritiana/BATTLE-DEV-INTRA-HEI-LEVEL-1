function howManyGifts(n,array){
    array.sort((a,b)=> a-b);
    let somme = array.reduce(function(sum,values){
        return Number(sum) + Number(values);
    },0)
    if (n==0){
        return 0;
    }
    if(somme<=n){
        return array.length;
    }
    if(somme>n){
        for(let i=1; i<array.length; i++){
            return howManyGifts(n,array.splice(0,array.length-i))
        }
    }
}
exports.howManyGifts = howManyGifts;