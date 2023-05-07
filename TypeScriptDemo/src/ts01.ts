const car:{make:string;model:string;year:number}={
    make:"toyata",
    model:"Innova",
    year:20233,
};
console.log(car);

const house={
    type:"duplex",
};
//Interface and inheritace
interface Icar{
    make:string;
    model:string;
    year:number;
    colour:string
};
const newcar:Icar={
    make:"Honda",
    model:"city",
    year:2020,
    colour:"red",
};

console.log(newcar);

interface IsafeCar extends Icar{
    airbag:number;
};
const EVcar:IsafeCar={
    airbag:4,
    make:"Audi",
    model:"ax3",
    year:2020,
    colour:"grey",
};
console.log(EVcar);