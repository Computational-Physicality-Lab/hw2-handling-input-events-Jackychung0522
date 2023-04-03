// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {
    // To see the shirts object, run:
    let Tshirt=document.getElementsByClassName("T-SHIRTS")[0];
     let x=shirts.length;
     let buttonarray=new Array(x);
     let imgbuttonarray=new Array(x);
    for(let step = 0; step < shirts.length; step++){
        var newdivForBlocks=document.createElement("div");
        var newdiv = document.createElement("div");
        var newaforimg=document.createElement("a");
        var newimg= document.createElement("img");
        var newp=document.createElement("p");
        var newpp=document.createElement("p");
        var newdivforbutton=document.createElement("div");
        var leftbutton=document.createElement("button");
        var rightbutton=document.createElement("button");
        var imgbutton=document.createElement("button");
        newp.innerHTML=shirts[step].name;
        newpp.innerHTML="Available in "+Object.keys(shirts[step].colors).length+" colors";
        newdivForBlocks.setAttribute("class","divForBlocks");
        newdiv.setAttribute("class","block");
        //newaforimg.setAttribute("href","details.html");
        newimg.setAttribute("src",shirts[step].colors.white.front);
        newp.setAttribute("class","productname");
        newpp.setAttribute("class","colornumber");
        newdivforbutton.setAttribute("class","productbutton");
        leftbutton.setAttribute("class","innerproductbutton");
        leftbutton.setAttribute("onclick","location.href='not_implemented.html'");
        rightbutton.setAttribute("class","innerproductbutton");
        rightbutton.setAttribute("id","button"+step);
        rightbutton.setAttribute("onclick","location.href='details.html'");
        imgbutton.setAttribute("id","img"+step);
        imgbutton.setAttribute("class","imgbutton");
        imgbutton.setAttribute("onclick","location.href='details.html'");
        leftbutton.innerHTML='Quick view';
        rightbutton.innerHTML='See Page';
        Tshirt.appendChild(newdivForBlocks);
        newdivForBlocks.appendChild(newdiv);
       
        newdiv.appendChild(imgbutton);
        imgbutton.appendChild(newimg);
        newdiv.appendChild(newp);
        newdiv.appendChild(newpp);
        newdiv.appendChild(newdivforbutton);
        newdivforbutton.appendChild(leftbutton);
        newdivforbutton.appendChild(rightbutton);    
        buttonarray[step]= document.getElementById('button'+step);
        buttonarray[step].addEventListener("click",function(){
            localStorage.setItem("selectedButton",JSON.stringify(shirts[step]));
            
    
        })
        imgbuttonarray[step]=document.getElementById('img'+step);
        imgbuttonarray[step].addEventListener("click",function(){
            localStorage.setItem("selectedButton",JSON.stringify(shirts[step]));
            
    
        })
    }
    // buttonarray[0].addEventListener("click",function(){
    //     localStorage.setItem("selectedButton",JSON.stringify(shirts[0]));

    // })
    // buttonarray[1].addEventListener("click",function(){
    //     localStorage.setItem("selectedButton", JSON.stringify(shirts[1]));

    // })
    // buttonarray[2].addEventListener("click",function(){
    //     localStorage.setItem("selectedButton", JSON.stringify(shirts[2]));

    // })
    // buttonarray[3].addEventListener("click",function(){
    //     localStorage.setItem("selectedButton",JSON.stringify(shirts[3]));

    // })
    //var selectedButton = localStorage.getItem("selectedButton");

    console.log(shirts);
    // Your Code Here
};

let initDetails = () => {
    // To see the shirts object, run:
    
    var shirtarray=["beepboop","car","plaid","melon"];
    let Details=document.getElementsByClassName("Details")[0];
    var x=JSON.parse(localStorage.getItem("selectedButton"));
    localStorage.clear();
    localStorage.setItem("side",JSON.stringify("front"));
    let shirt;
    if (x.name=="Beep Boop"){
        shirt=shirtarray[0];
    }
    else if (x.name=="Car-negie Mellon"){
        shirt=shirtarray[1];
    }
    else if (x.name=="Forever Plaid"){
        shirt=shirtarray[2];
    }
    else if (x.name=="Carnegie Mellon Melon"){
        shirt=shirtarray[3];
    }

    var newdiv = document.createElement("div");
    var newdivforImage=document.createElement("div");
    var newdivforText=document.createElement("div");
    var newdivforDirection=document.createElement("div");
    var newdivforColor=document.createElement("div");
    var newp=document.createElement("p");
    var newpforPrice=document.createElement("p");
    var newpforIntro=document.createElement("p");
    var newpforDirection=document.createElement("p");
    var newpforColor=document.createElement("p");
    var frontbutton=document.createElement("button");
    var backbutton=document.createElement("button");
    var newimg = document.createElement("img");
    newimg.setAttribute("src",x.colors.white.front);
    localStorage.setItem("color",JSON.stringify("white"));
    localStorage.setItem("side",JSON.stringify("front"));
    newimg.setAttribute("class","picture");
    newdiv.setAttribute("class","detail");
    newdivforImage.setAttribute("class","divforImage");
    newdivforText.setAttribute("class","divforText");
    newdivforDirection.setAttribute("class","divforDirection");
    newdivforColor.setAttribute("class","divforColor");
    newp.setAttribute("class","productdetailname");
    newpforPrice.setAttribute("class","price");
    newpforIntro.setAttribute("class","intro");
    newpforDirection.setAttribute("class","direction");
    newpforColor.setAttribute("class","color");
    frontbutton.setAttribute("class","button");
    backbutton.setAttribute("class","button");
    newp.innerHTML=x.name;
    newpforPrice.innerHTML=x.price;
    newpforIntro.innerHTML=x.description;
    newpforDirection.innerHTML="Side:";
    newpforColor.innerHTML="Color:";
    frontbutton.innerHTML="Front";
    backbutton.innerHTML="Back";
    const dataArray = Object.keys(x.colors);
    Details.appendChild(newdiv);
    newdiv.appendChild(newdivforImage);
    newdivforImage.appendChild(newp);
    newdivforImage.appendChild(newimg);
    newdiv.appendChild(newdivforText);
    newdivforText.appendChild(newpforPrice);
    newdivforText.appendChild(newpforIntro);
    newdivforText.appendChild(newdivforDirection);
    newdivforText.appendChild(newdivforColor);
    newdivforDirection.appendChild(newpforDirection);
    newdivforDirection.appendChild(frontbutton);
    newdivforDirection.appendChild(backbutton);
    newdivforColor.appendChild(newpforColor);
    var colorbutton=new Array(dataArray.length);
    for(let i=0;i<dataArray.length;i++){
        colorbutton[i]=document.createElement("button");
        colorbutton[i].setAttribute("class","colorbutton");
        colorbutton[i].innerHTML=dataArray[i];
        colorbutton[i].setAttribute( "style","background-color:"+dataArray[i]);
        newdivforColor.appendChild(colorbutton[i]);
        colorbutton[i].addEventListener("click",function(){
            localStorage.setItem("color",JSON.stringify(dataArray[i]));
            img="shirt_images/"+shirt+"-"+JSON.parse(localStorage.getItem("color"))+"-"+JSON.parse(localStorage.getItem("side"))+".png";
            newimg.setAttribute("src",img);
            
        })
        
    }
    frontbutton.addEventListener("click",function(){
        localStorage.setItem("side",JSON.stringify("front"));
        img="shirt_images/"+shirt+"-"+JSON.parse(localStorage.getItem("color"))+"-"+JSON.parse(localStorage.getItem("side"))+".png";
        newimg.setAttribute("src",img);
        
    })
    backbutton.addEventListener("click",function(){
        localStorage.setItem("side",JSON.stringify("back"));
        img="shirt_images/"+shirt+"-"+JSON.parse(localStorage.getItem("color"))+"-"+JSON.parse(localStorage.getItem("side"))+".png";
        newimg.setAttribute("src",img);
        
    })
    console.log(shirts);

    // Your Code Here
};