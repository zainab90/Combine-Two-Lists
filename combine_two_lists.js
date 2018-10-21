/* 
 Q4: Write a function that combines two lists by alternatingly taking elements, e.g.
[a,b,c], [1,2,3] ? [a,1,b,2,c,3].
[1,2,5,8,0], [9,4,8,7,6] ? [1, 9, 2, 4, 5, 8, 8, 7, 0, 6].
 */



 function combineList(list1, list2) {
// define empty list (resulting list)     
var totalList = [];
//we assume the length of list1 is the same as list2.
for (var i=0;i<list1.length;i++) {
    // first we take an element from list1, then from list2
totalList.push(list1[i]);
totalList.push(list2[i]);
}
return totalList;
     }
// to see the result, we can either call console.log or print function 

//console.log(combineList(['a','b','c'], [1,2,3]));
//console.log(combineList([1,2,5,8,0], [9,4,8,7,6]));
print(combineList(['a','b','c'], [1,2,3]));
print(combineList([1,2,5,8,0], [9,4,8,7,6]));
