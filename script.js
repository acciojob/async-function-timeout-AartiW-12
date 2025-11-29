//your JS code here. If required.


document.getElementById("btn").addEventListener("click", async ()=>{
	const textVal = document.getElementById("text").value;
	const numVal  = document.getElementById("delay").value;
	const outputDiv = document.getElementById("output")
	await display(numVal);
	outputDiv.textContent = textVal
})

async function display(ms){
	return new Promise((resolve)=>{
		setTimeout(resolve,ms)
	})
}
