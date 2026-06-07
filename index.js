// map ,filter, arrow fns
/*function sum(a,b){
    return a+b;
}
const sum = (a,b)=>{
    return a+b;
}
app.get("/",(req,res)=>{

}) */

    // given a new arry in which we need to multiply each value by 2 
    // [1,2,3]=> [2,4,6]
    // we can doo it by for oop or create a new arr
  /*  var input = [1, 2, 3, 4, 5];
    //by map
    const arr =input.map((i)=>{
        return 2*i;
    })
    console.log(input);
    console.log(arr); */
// filter
// filtar ot elements of particular feature 
const input =[1,2,3,4,5];
//create filter logic and five it to globle filtre function
const ans =input.filter((n)=>{
    const a= (n%2==0)? true : false
    return a;
});
console.log(input);
console.log(ans);