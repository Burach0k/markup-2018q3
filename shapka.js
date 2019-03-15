window.onscroll = function () { 
    if (document.documentElement.scrollTop>= 100 ) {
 		document.getElementById("container").style.backgroundColor = "#252525";
    }else{
    	document.getElementById("container").style.backgroundColor = "transparent";
    }
};

let img=document.getElementsByClassName("workplace");


let buttons = document.getElementsByClassName("radioButton");
buttons[0].onclick=()=>{
    let i=isChecked(0);
    if(i===undefined) return undefined;
    let j=Math.abs(i-2);

    buttons[i].checked=false;
    img[j].style.zIndex=-1;
    img[2].style.zIndex=-2;
    img[j].style.left="-100%";
    setTimeout(function() {
        img[2].style.zIndex=-1;
        img[j].style.zIndex=-3;
        img[j].style.left="0";
    },350);
}


buttons[1].onclick=()=>{
    let i=isChecked(1);
    if(i===undefined) return undefined;
    let j=Math.abs(i-2);
    buttons[i].checked=false;
    img[j].style.zIndex=-1;
    img[1].style.zIndex=-2;
    img[j].style.left="-100%";

    setTimeout(function() {
        img[1].style.zIndex=-1;
        img[j].style.zIndex=-3;
        img[j].style.left="0";

    },350);
}


buttons[2].onclick=()=>{
    let i=isChecked(2);
    if(i===undefined) return undefined;
    let j=Math.abs(i-2);
    buttons[i].checked=false;
    img[j].style.zIndex=-1;
    img[0].style.zIndex=-2;
    img[j].style.left="-100%";

    setTimeout(function() {
        img[0].style.zIndex=-1;
        img[j].style.zIndex=-3;
        img[j].style.left="0";

    },350);
}




function isChecked(index){
    for (let i=0; i<buttons.length;i++){
        if(buttons[i].checked&&index!=i) return i;
    }
}
