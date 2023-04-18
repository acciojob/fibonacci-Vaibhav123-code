function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let c
	if(num ==1)
		return 0;
	if(num ==2)
		return 0
	for(let i=0;i<num-2;i++){
		c = a+b;
		a=b;
		b=c;
	}
	return c;
}

module.exports = fibonacci;
