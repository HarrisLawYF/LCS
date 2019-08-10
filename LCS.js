//LCS
// Eg, ABCD compares with AD
// [A]BCD, [A]D --> Check A
// [A]BCD, [A]D --> Check B
// [A]BCD, [A]D --> Check C
// [A]BC[D], [A][D] --> Check D
var matching = [];
function LCS(array1, array2, m, n){
	if(m == -1 || n == -1){
		return 0;
	}
	if(array1[m] == array2[n]){
		matching.push(array1[m]);
		return 1 + LCS(array1, array2, m-1, n-1);
	} else{
		//find the max value between moving pointer on x array forward, or moving pointer on y array forward
		//if there are duplicated matches in both paths, only the one generates more points get selected
		return Math.max(LCS(array1, array2, m-1, n),LCS(array1, array2, m, n-1));
	}
}

var x = ["A","C","D","F"];
var y = ["C","B","F"];

console.log(LCS(x,y,x.length-1,y.length-1));
console.log([...new Set(matching)]);