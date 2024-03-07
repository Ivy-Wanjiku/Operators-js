let a="extravaganza"
let b=a.slice(7,11)
console.log(b);

let origString="The quick fox jumped over the lazy dog"
let stringToAdd="eat"
let indexPosition= (0,4)
newString=origString.substring(4/indexPosition)+stringToAdd+origString.substring(indexPosition)
console.log(newString);



const story="The quick brown fox jumps over the lazy dog"
let c="the"
let d="brown"
console.log((story.match(/the/)).length);
console.log((story.match(/brown/)).length);

const string1="The pupils are reading in the library"
let e=string1.includes("are")
console.log(e);
const string2="The child was sitting on the table before it fell"
let f=string2.includes("sitting")
console.log(f);

let g="wonderful"
let string=g.toUpperCase()
console.log(string);
let h="amazing"
let newG=h.toLowerCase()
console.log(newG);
let x="undErneath"
let newX=x.toLowerCase()
console.log(newX);
const str = "A wonderful world";
let titleCase = "";
str.split(" ").forEach(word => {
	const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	titleCase += capitalizedWord + " ";
});
console.log(titleCase);
