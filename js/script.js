let objBox={};


let inputs = document.getElementsByTagName('input');
console.log(inputs);
for(let inp of inputs ){
	inp.addEventListener('change',	function (){
				let prop = this.getAttribute('tag');

			 	if(this.getAttribute('type') == 'range')
					objBox[prop] = this.value + "px";
				else
					objBox[prop] = this.value;

				//console.log(objBox);
				let box = document.getElementById('box');
				for(let key in objBox){
					box.style.setProperty(key, objBox[key]);
					console.log(key+ ":" + objBox[key] + ";");
				}
			}
		);
}

function getCode(){
	let boxCode = document.getElementById('code');

	let str = "";
	for(let key in objBox){
		str += key + ":" + objBox[key] + ";\n";
	}
	boxCode.value = str;
}