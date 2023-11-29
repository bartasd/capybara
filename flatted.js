let a = [1,2,[1,3,[1,2],4]];
console.log(a)
while(!a.every(el => typeof el === "number"))
{
    a=a.flat();

}

console.log(a)
