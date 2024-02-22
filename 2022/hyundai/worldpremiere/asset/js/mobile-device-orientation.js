let landscapeMessageDom = document.createElement('div')
landscapeMessageDom.style.display = "flex"
landscapeMessageDom.style.justifyContent = "center"
landscapeMessageDom.style.alignItems = "center"
landscapeMessageDom.style.textAlign = "center"
landscapeMessageDom.style.flexWrap = "wrap"
landscapeMessageDom.style.width = "100vw"
landscapeMessageDom.style.height = "100vh"
landscapeMessageDom.style.position = "fixed"
landscapeMessageDom.style.left = "0"
landscapeMessageDom.style.top = "0"
landscapeMessageDom.style.background = "#000"
landscapeMessageDom.style.color = "#fff"
landscapeMessageDom.style.fontSize = "25px"
landscapeMessageDom.style.padding = "20px"
landscapeMessageDom.style.zIndex = "99999"
landscapeMessageDom.innerHTML = "Landscape not supported. please keep the device in portrait mode."


function isLandscape(){
	if (window.innerWidth > window.innerHeight) {
		console.log(landscapeMessageDom)
		let bodyInterval = setInterval(()=>{
			if(document.querySelector("body")){
	    		document.querySelector("body").append(landscapeMessageDom)
	    		clearInterval(bodyInterval)
			}
		}, 10)
	} else {
		landscapeMessageDom.remove()
	}
}
isLandscape()
window.addEventListener('resize', isLandscape)