let firstname="Raj";
console.log(firstname);

let lastname="Urs";
console.log(lastname);

let x:any=true;
console.log(x);

x="somevalue";
console.log(x);

const names:String[]=[];
names.push("obj1");
names.push("obj2");
names.push("obj3");
console.log(names);

const countryNames:readonly string[]=["India","USA","UK"]
//countryNames.push("Russia");It is readonly

const numbers=[1,2,3,4];
numbers.push(78);
//numbers.push("x");Not a number shows error

let ourttuple:[number,boolean,string];
ourttuple=[5,false,"hellow"];
//ourttuple=[4,"iii",true];The data types are different so does not add

const graph:[number,number]=[34.55,45.56];
console.log(graph);
const [val1,val2]=graph;
console.log(val1);
console.log(val2);