var numsquares=9;
var colors=generateRandomColor(numsquares);
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetbutton=document.querySelector("#reset");
var pickcolor = pickColor();
var colordisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var easybtn=document.querySelector("#easyBtn");
var mediumbtn=document.querySelector("#mediumBtn");
var hardbtn=document.querySelector("#hardBtn");



easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	mediumbtn.classList.remove("selected");
	hardbtn.classList.remove("selected");
	numsquares=3;
	colors = generateRandomColor(numsquares);
    	pickcolor = pickColor();
    	colordisplay.textContent = pickcolor;
    	for (var i = 0 ; i < squares.length ; i++) {
     squares[i].style.background = colors[i];
     if(colors[i]){
     	squares[i].style.background=colors[i];
     }
     else{
     	squares[i].style.display="none";
     }
     }
})
mediumbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
	mediumbtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares=6;
	colors = generateRandomColor(numsquares);
    	pickcolor = pickColor();
    	colordisplay.textContent = pickcolor;
    	for (var i = 0 ; i < squares.length ; i++) {
     squares[i].style.background = colors[i];
     if(colors[i]){
     	squares[i].style.background=colors[i];
     squares[i].style.display="block";
     }else{
     	squares[i].style.display="none";
     	
     }
     }	
})
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	mediumbtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares=9;
	colors = generateRandomColor(numsquares);
    	pickcolor = pickColor();
    	colordisplay.textContent = pickcolor;
    	for (var i = 0 ; i < squares.length ; i++) {
     squares[i].style.background = colors[i];
     squares[i].style.background=colors[i];
     squares[i].style.display="block";
     
     }
})
    resetbutton.addEventListener("click",function(){
    	colors = generateRandomColor(numsquares);
    	pickcolor = pickColor();
    	messageDisplay.textContent=null;
    	this.textContent="New colors";
    	colordisplay.textContent = pickcolor;
    	for (var i = 0 ; i < squares.length ; i++) {
     squares[i].style.background = colors[i];}
     h1.style.background = "steelblue";
    })
    colordisplay.textContent = pickcolor;
    for (var i = 0 ; i < squares.length ; i++) {
     squares[i].style.background = colors[i];
     squares[i].addEventListener("click",function(){
     	var clickedColor = this.style.background;
     	if (clickedColor===pickcolor) { 
     		messageDisplay.textContent = "correct";
     		changeColor(clickedColor);
     		h1.style.background = clickedColor;
     		resetbutton.textContent = "Play Again!!"; 
     	} 
     	else { 
     		this.style.background="#232323";
     		messageDisplay.textContent = "Try Again";}
    })
       }   
       function changeColor(color){
       	for (var i = 0; i < squares.length; i++) {
       	        		squares[i].style.background = color;
       	        	}        	
       } 
       function pickColor() {
       	var random = Math.floor(Math.random() * colors.length);
       	return colors[random];
       }
       function generateRandomColor(num) {
       	var arr=[];
       	for (var i = 0; i < num; i++) {
       		arr.push(randomColor());  }
       	return arr;
       }
       function randomColor()
       {var r = Math.floor(Math.random() * 256), g = Math.floor(Math.random() * 256), b = Math.floor(Math.random() * 256);
       	return "rgb("+ r+ ", "+ g+ ", "+ b +")";

       }