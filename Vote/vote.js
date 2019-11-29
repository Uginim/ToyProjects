var fs = require('fs');
var data = fs.readFileSync('./vote.txt','utf8');
function readData(data){
	var cntA, cntO;
	cntA=0;
	cntO=0;
	for(var i=0;i<data.length;i++){
		if(data.charAt(i)==='#'){
			i+=1;
			if(data.substring(i,i+6)==='안드방 투표'){
				i+=6;
				i+=2;//개행 cr,lf '\r','\n'
				
				for(;data.charAt(i)==='\r' || data.charAt(i)==='\n';i++){
					i+=1;
				}
				// console.log(data.substring(i,i+2));
				if(data.substring(i,i+2)==='찬성'){
					cntA+=1;
				}else if(data.substring(i,i+2)==='반대'){
					cntO+=1;					
				}
			}
			
		}
		
		
	}
	return {
		'찬성':cntA,
		'반대':cntO
		
	}
}
var result = readData(data);
console.log(result);
	
	// console.log(data);

fs.readFile('./vote.txt','utf8',function(err, data){
	
	// console.log(data);
});