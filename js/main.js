
 function firstFunction(){
    document.write("My ist function");
}


/*
function kvadrat (n) {
    return n*n;
}
*/
/*
let kvadrat = (n) =>{
    return n*n;
}
*/
/*
a.sort((a, b)=>){

}
*/
/*
document.write(kvadrat(3))
let a = 12;
let m = kvadrat(a); //сохр перемен
console.log (m);
*/
function sum_kvadrat (n) {
    //return n*n, n+n;
    return{
        sum: n+n,
        kvadrat: n*n
    }
}

let result = sum_kvadrat(12);
console.log(result);


//firstFunction();
