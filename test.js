var mySort = require("./commonSort");

var normalArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function mess(arr){ 
    var _floor = Math.floor, _random = Math.random, 
        len = arr.length, i, j, arri, 
        n = _floor(len/2)+1; 
    while( n-- ){ 
        i = _floor(_random()*len); 
        j = _floor(_random()*len); 
        if( i!==j ){ 
            arri = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = arri; 
        } 
    } 
    //增加切牌操作 
    i = _floor(_random()*len); 
    arr.push.apply(arr, arr.splice(0,i)); 
    return arr; //要不要返回打乱后的数组呢？ 
} 

//console.info(mySort);
console.info("堆排序执行", mySort.heapSort(mess(normalArr)));