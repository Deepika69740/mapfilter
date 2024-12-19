let m=[10,20,30,43]
console.log(m.filter(x=>x>=30))
let n=[4,3,2,6,5,7]
console.log(n.filter(y=>y%2==0));
let o=[4,3,2,6,5,7]
console.log(o.filter(y=>y%2!=0));
let p=[10,-40,-9,4,8]
console.log(p.filter(x=>x>0));
let products = [
  { name: "apple", price: 1.99 },
  { name: "banana", price: 0.99 },
  { name: "orange", price: 2.49 },
  { name: "kiwi", price: 3.29 }
];
var expensiveProducts = products.filter(product => product.price > 2);
console.log(expensiveProducts)


// // examples of map

let q=[2,3,4,5]
console.log(q.map(x=>x*2))
let d=[0,2,10,4,6]
console.log(d.map(f=>f/2))
let s=[-1,8,-9,3,-4]
console.log(s.map(p=>p*(-1)))


// // examples of for each
var a=[1,2,3,4,5]
a.foreach(x=>
    console.log(x)
)