const add = require("../main");
it('should add two numbers',()=>{
expect(add(2,3)).toBe(5);
});
 function add (left,right){
     return left+right;
 }
 module.exports=add;
 