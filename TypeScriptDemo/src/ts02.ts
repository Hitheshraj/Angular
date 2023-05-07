function greet():void{
    console.log("Hellow there..");
}
greet();

function multiply(a:number,b:number): number{
    return a*b;
}

console.log(multiply(5,3));

function add(a:number,b:number,c?:number): number{
    return a+b+(c||0);
}
console.log(add(4,5));
console.log(add(3,5,6));

function expo(value:number,expo:number=2):number{
    return value**expo;
}

console.log(expo(4,5));
console.log(expo(4));//2 is defalut