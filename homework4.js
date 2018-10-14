# homework4

// Problem 1
const star = function (x) {
  while(x>0){
    return star(x-1)+"*";
  }
  x = x-1;
 	 return "";
};
const space = function(y){
	if(y===0){
		return "";
	}
	return space(y-1)+"+";
};

const cycle = function(a) {
	const looper =function(b){
	  while (b>0){
	    console.log(space(a-b)+star(2*b-1));
		looper(b-1);
        b=b-a;
      }
      return ;
};
  return looper(a);
};
const k = cycle(4);
// Problem 2
const a=function(b,c){
	let val=[];
	let index = 0;
	while (index < b.length){
		val[val.length] = b[index];
		index=index + 1;
	};
	let baobab = 0;
	while (baobab < c.length){
		val[val.length]= c[baobab];
		baobab=baobab + 1;
	};
	return val;
};
  console.log(a([1,2,34],[2,3,4,6]));


// Problem 3
 function forEach (a, b) {
 a1 = 0;
 while(a1 < a.length) {
    b(a[a1]);
 	a1++;
 }
 }
 
 
 forEach([4, 3, 2], function(val) {

  console.log(val);

});

// Problem 4
function minInArr(array){
  let index = 0;
  let min = array[index];
  while(index < array.length){
    if(array[index] < min){
      min = array[index];
    }
    index++;
  }
  return min;
}

function findMinMax(array, boolean){
    if(boolean === "true"){
      return(maxInArr(array));
    }
    if(boolean === "false"){
      return(minInArr(array));
    }
}
console.log(findMinMax([-5, 10, 11, -50], true);


//Problem 5
const forEach = function (array){
	let w = 0 ;
	let s = "";
	while (w<array.length){
		s = array[length-1]
		w = w + 1;
		return (s);
	}
};	
console.log(forEach([2,4,5,6,10]))


//Problem 6
const s = function (array){
	let length = array.length;
	let sum = 0;
	while (length > 0){
		sum = sum + array[length-1];
		length = length - 1;
	}
	return sum;
     };
console.log (s([1,2,3,4,10]))

  //Problem 7
  const f = function (string){
      let num = string.length;
    let str1 =0;
    let str2 = "";
    while(num>0){
      
      str1= string[num-1];
  	  str2 = str2 + str1;
      num = num - 1;
    }
    return str2;
  }
  console.log (f("niaga_suineg_eht_s'ti"));


 //Problem 8
 function begemotik(input){
    let begem = " ";
    while(input > 0){
      begem = begem + "*";
      input = input - 1;
    }
    return begem;
}

function jiraff(input1){
  let bp = "";
  while(input1 > 0){
    bp = bp + "_";
    input1= input1 - 1;
  }
  return bp;
}

 function checkerboard(klik){
  let q = 2;
  let a = 0; 
  while(a < klik){
    if(q%2===0){
      console.log(begemotik(klik));  
    }
    if(q%2===1){
      
    console.log(jiraff(1) + begemotik(klik));
    }
    q=q+1;
    a=a+1;
   }
 }
 checkerboard(8); 
