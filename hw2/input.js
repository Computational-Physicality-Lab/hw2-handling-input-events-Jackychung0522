/*
* all the code for homework 2 goes into this file.
You will attach event handlers to the document, workspace, and targets defined in the html file
to handle mouse, touch and possible other events.

You will certainly need a large number of global variables to keep track of the current modes and states
of the interaction.
*/

const State = {
    IDLE: 'idle',
    SELECTED: 'selected',
    DRAGGING: 'dragging',
    FOLLOWING: 'following',
    RESIZE:'resize',
  };
  var x1,x2
  // Define Div class
  
  class Div {
    constructor(element) {
      this.element = element;
      this.color = 'red';
      this.state = State.IDLE;
      this.originalPos = {x: 0,
      y: 0,
      }
      this.isChange=false;
      this.isDragging = false;
      this.isfollowing = false;
      this.lastTouch=null;
      this.lastTap = 0;
      this.initialDistance=0;
      this.x1=0;
      this.x2=0;
      this.scalex=1;
      this.lastScalex=1;
      element.addEventListener('mousedown', this.handleMouseDown.bind(this));
        element.addEventListener('mousemove', this.handleMouseMove.bind(this));
        element.addEventListener('mouseup', this.handleMouseUp.bind(this));
        element.addEventListener('touchstart', this.handleTouchStart.bind(this));
        element.addEventListener('touchmove', this.handleTouchMove.bind(this));
        element.addEventListener('touchend', this.handleTouchEnd.bind(this));
        element.addEventListener('dblclick', this.handleDoubleClick.bind(this));
    }
  
    setColor(color) {
      this.color = color;
      this.element.style.backgroundColor = color;
    }
  
    setState(state) {
      this.state = state;
    }
  
    handleMouseDown(event) {
       var  wait=false;
    for(const div of divs) {
        if(div.isFollowing==true){
            wait=true;
            break;
        }
    }
    console.log(wait);
    this.isChange=false;
    if(wait==false){
        if(event.target.classList.contains("target")){
            var originalColor=this.element.style.backgroundColor;
            console.log(originalColor);
        if (this.state === State.IDLE) {
            for (const div of divs) {
            if(div.state==State.IDLE){
                div.setColor('red');
                div.setState(State.IDLE);
                console.log(this.state);
                }
            }
        
        }
        if (event.target === this.element) {
            this.isDragging = true;
            this.originalPos = {
            x: event.clientX,
            y: event.clientY,
            top: this.element.offsetTop,
            left: this.element.offsetLeft,
            };
                this.setState(State.DRAGGING);
            
            console.log(this.state);
            //element.addEventListener('click', this.handleClick.bind(this));
        
        }
        
    }
    
    }
    
    
}
    handleMouseMove(event) {
      if (this.state === State.DRAGGING) {
        this.isChange=false;
        var dx=0;
        var dy=0;
        dx = event.clientX - this.originalPos.x;
        dy = event.clientY - this.originalPos.y;
        this.element.style.top = `${this.originalPos.top + dy}px`;
        this.element.style.left = `${this.originalPos.left + dx}px`;
        if(dx!=0 || dy !=0){
            
            this.isChange=true;
        }
      }
      
      if (this.state === State.FOLLOWING) {
        const dx = event.clientX - this.originalPos.x;
        const dy = event.clientY - this.originalPos.y;
        this.element.style.top = `${this.originalPos.top + dy}px`;
        this.element.style.left = `${this.originalPos.left + dx}px`;
      }
    }
  
    handleMouseUp(event) {
      if (this.state === State.DRAGGING) {
          if(!this.isChange){
              
              for (const div of divs) {
                
                    div.setColor('red');
                    div.setState(State.IDLE);
                    
                }
                this.setColor("blue");
              this.setState(State.SELECTED);
          }
          else{
              if(this.element.style.backgroundColor!='blue'){
                this.isDragging = false;
                this.setState(State.IDLE);
                console.log(this.state);
              }
              else{
                this.setColor("blue");
                this.isDragging = false;
                this.setState(State.SELECTED);
                console.log(this.state);
              }
            
          }
        //window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        //window.removeEventListener('mouseup', this.handleMouseUp.bind(this));
      }
    }
    handleDoubleClick(event) {
        if (event.target === this.element) {
          this.originalPos = {
            x: event.clientX,
            y: event.clientY,
            top: this.element.offsetTop,
            left: this.element.offsetLeft,
          };
          this.setState(State.FOLLOWING);
          console.log(this.state);
          this.isFollowing = true;
          window.addEventListener('mousemove', this.handleMouseMove.bind(this));
          window.addEventListener('mouseup', this.handleMouseUpFollowing.bind(this));
        }
      }
    
      handleMouseUpFollowing(event) {
        if (this.isFollowing) {
          this.isFollowing = false;
          this.setState(State.IDLE);
          window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
          window.removeEventListener('mouseup', this.handleMouseUpFollowing.bind(this));
        }
      }
      handleTouchStart(event) {
        event.preventDefault();
        
        const now = new Date().getTime();
        if(now-this.lastTap<300){
            this.setState(State.FOLLOWING);
            this.isFollowing=true;
            this.originalPos = {
                x: event.touches[0].clientX - this.element.offsetWidth / 2 ,
                y: event.touches[0].clientY - this.element.offsetWidth / 2,
                top: this.originalPos.y + "px",
                left: this.originalPos.x + "px"
              };
            console.log("following");
            window.addEventListener('touchmove', this.handleTouchMove.bind(this));
            window.addEventListener('touchend', this.handleTouchEnd.bind(this));
           
    } 
        this.lastTap = now;
        if (event.touches.length == 2 ) {
            //this.setState(State.RESIZE);
            this.x1 = event.touches[0].clientX;
           
            console.log(this.state);
            //initialWidth = parseInt(document.defaultView.getComputedStyle(resizeableDiv,null).getPropertyValue("width"));
            //console.log(this.x1);
          }   
          else {
            this.setState(State.IDLE);
        }
        //document.body.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
            if(event.touches.length==1 && this.state!=State.FOLLOWING){
                this.lastTouch = event.touches[0];
                if (this.state === State.IDLE) {
                for (const div of divs) {
                    div.setColor('red');
                    div.setState(State.IDLE);
                }
            
                this.setColor('blue');
                this.setState(State.SELECTED);
                console.log(this.state);
                }
            
                
                this.originalPos = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY,
                    top: this.element.offsetTop,
                    left: this.element.offsetLeft,
                };
                this.isDragging=true;
                this.setState(State.DRAGGING);
                console.log(this.state);
            }
        }
    
      handleTouchMove(event) {
        event.preventDefault();
        console.log(event.touches.length);
        if (event.touches.length == 2 ) {
            for(const div of divs){
                if(div.element.style.backgroundColor=='blue'){
                    div.x2 = event.touches[1].clientX;
                    div.initialWidth=parseInt(div.element.style.width.match(/\d+/));
                    //console.log("initialWidth"+this.initialWidth);
                    // this.x1 = event.touches[0].clientX;
                    // this.x2 = event.touches[1].clientX;
                    // console.log("X1"+this.x1);
                    // console.log("X2"+this.x2);
                    var newWidth = div.initialWidth+div.x1 - div.x2;
                    
                    //console.log(this.initialWidth);
                    div.scalex=newWidth/div.initialWidth;
                    if(div.scalex<=0.3){
                        div.scalex=0.3;
                    }
                    console.log("scalex:"+div.scalex);
                    //this.element.style.top=`50%`
                    //this.element.style.left=`50%`
                    //this.element.style.top = `${this.originalPos.top }px`;
                    //this.element.style.left = `${this.originalPos.left }px`;
                    div.element.style.transform=`scaleX(${div.scalex})`
                    //this.element.style.width = newWidth + 'px';
                    //this.element.style.left=this.element.offsetLeft+(x1-x2)/2;
                }
            }
            
          }
        if (this.state == State.DRAGGING && event.touches.length ==1){
          const dx = event.touches[0].clientX - this.originalPos.x;
          const dy = event.touches[0].clientY - this.originalPos.y;
          this.element.style.top = `${this.originalPos.top + dy}px`;
          this.element.style.left = `${this.originalPos.left + dx}px`;

        }
        else if(this.state == State.FOLLOWING ){
            const dx = event.touches[0].clientX- this.originalPos.x;
            const dy = event.touches[0].clientY- this.originalPos.y;
            this.element.style.top = event.touches[0].clientY - this.element.offsetHeight / 2 + "px";
            this.element.style.left = event.touches[0].clientX - this.element.offsetWidth / 2 + "px";
        }
        else if (event.touches.length > 1 && (this.state == State.DRAGGING ) ){ 
            this.isDragging = false;
            this.following=false;
            this.element.style.top = `${this.originalPos.top}px`;
            this.element.style.left = `${this.originalPos.left}px`;
            this.setState(State.IDLE);
            //console.log("two");
                        //this.setColor('red');
          }
        
          
      }
      
      handleTouchEnd(event) {
        event.preventDefault();
        if (this.state == State.DRAGGING) {
          this.isDragging = false;
          this.setState(State.IDLE);
          console.log(this.state);
        }
        if (event.touches.length >=3 && (this.state == State.RESIZE ) ){ 
            this.setState(State.IDLE);
            this.element.style.transform=`scaleX(1)`;
            console.log(event.touches.length);
            //this.lastScalex=this.scalex;
            console.log("lsatS:"+this.lastScalex);
            
            //console.log("two");
                        //this.setColor('red');
          }
        if(this.state==State.RESIZE && event.touches.length < 2){
            this.state=State.IDLE;
            this.lastScalex=this.scalex;
            console.log("lsatS:"+this.lastScalex);
            //this.element.style.width=this.element.style.width*this.scalex;
            console.log(this.state);
        }
        
        
        if (this.state == State.FOLLOWING) {
            this.isFollowing = false;
            this.setState(State.IDLE);
            console.log(this.state);
            const dx = event.touches[0].clientX- this.originalPos.x;
            const dy = event.touches[0].clientY- this.originalPos.y;
            this.element.style.top = event.touches[0].clientY - this.element.offsetHeight / 2 + "px";
            this.element.style.left = event.touches[0].clientX - this.element.offsetWidth / 2 + "px";
          }
        document.body.removeEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
      }
    }
  
  
  // Create Div objects for each target element
  const divs = [];
  const targetElems = document.querySelectorAll('.target');
  for (const target of targetElems) {
    const div = new Div(target);
    divs.push(div);
  }
  
  // Define event handlers
  function handleGlobalMouseDown(event) {
    if (!event.target.classList.contains("target") ){
      for (const div of divs) {
        div.setColor('red');
        div.setState(State.IDLE);
        console.log(this.state);
      }
    }
  }
//   function handleGlobalTouchEnd(event) {
//     if (!event.touches[0].classList.contains("target") ){
//       for (const div of divs) {
//         div.setColor('red');
//         div.setState(State.IDLE);
//         console.log(this.state);
//       }
//     }
//   }
  
  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      for (const div of divs) {
        if (div.state === State.SELECTED || div.state === State.DRAGGING||div.state==State.FOLLOWING) {
          div.element.style.top = `${div.originalPos.top}px`;
          div.element.style.left = `${div.originalPos.left}px`;
          div.setState(State.IDLE);
        }
    }
      
    }
  }
  
  
  // Add event listeners
  window.addEventListener('mousedown', handleGlobalMouseDown);
  //window.addEventListener('touchend', handleGlobalTouchEnd);
  window.addEventListener('keydown', handleKeyDown);
  
                    
