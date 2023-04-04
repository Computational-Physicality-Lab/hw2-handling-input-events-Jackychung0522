/*
* all the code for homework 2 goes into this file.
You will attach event handlers to the document, workspace, and targets defined in the html file
to handle mouse, touch and possible other events.

You will certainly need a large number of global variables to keep track of the current modes and states
of the interaction.
*/

		
		
        
		
        // var divs=document.querySelectorAll(".target")
        // var isMouseDown=false;
        // let isDragging = false;
        // let currentDraggable = null;
        // function onMouseDown(event) {
        //     if(event.detail==2){
        //         isDragging=true;
        //         currentDraggable=true;
        //         var div = event.target;
        //         var startX = event.clientX - div.offsetLeft;
        //         var startY = event.clientY - div.offsetTop;
        //         isMouseDown=true;
        //         document.addEventListener("mousemove", onMouseMove);
        //         document.addEventListener("mouseup", onMouseUp);
        //     }
        //     var div = event.target;
        //     var startX = event.clientX - div.offsetLeft;
        //     var startY = event.clientY - div.offsetTop;
        //     isMouseDown=true;
        //     document.addEventListener("mousemove", onMouseMove);
        //     document.addEventListener("mouseup", onMouseUp);
        //     function onMouseMove(event) {
        //         if(isDragging){
        //             event.preventDefault();
        //             var newLeft = event.clientX - startX;
        //             var newTop = event.clientY - startY;
        //             div.style.left = newLeft + "px";
        //             div.style.top = newTop + "px";
        //         }
        //         var newLeft = event.clientX - startX;
        //         var newTop = event.clientY - startY;
        //         div.style.left = newLeft + "px";
        //         div.style.top = newTop + "px";
        //     }
        //     function onMouseUp(event) {
        //         if(isDragging){
        //             isDragging=false;
        //             currentDraggable=null;
        //             document.removeEventListener("mousemove", onMouseMove);
        //             document.removeEventListener("mouseup", onMouseUp);
        //         }
        //         isMouseDown=false;
        //         document.removeEventListener("mousemove", onMouseMove);
        //         document.removeEventListener("mouseup", onMouseUp);
                
               
        //     }
            
        // }
        
        // document.body.addEventListener("click", function() {
			
		// 	for (var j = 0; j < divs.length; j++) {
		// 		divs[j].classList.remove("selected");
		// 	}
		// });
		// for (var i = 0; i < divs.length; i++) {
           
		// 	divs[i].addEventListener("mousedown", onMouseDown);
            
        //     if(isMouseDown==false){

            
        //         divs[i].addEventListener("click", function(event) {
        //             event:Event
        //             event.stopPropagation();
        //             for (var j = 0; j < divs.length; j++) {
        //                 divs[j].classList.remove("selected");
        //             }
        //                 this.classList.add("selected");
                    
        //         })
        //     }
            
		// }
        
// const targetElems = document.querySelectorAll('.target');
// const workspace=document.querySelectorAll("#workspace");
// let selectedTarget = null;
// let isDragging = false;
// let originalPos = null;
// let lastSelectedTarget=null;
// Define states
// const State = {
//   IDLE: 'idle',
//   SELECTED: 'selected',
//   DRAGGING: 'dragging',
//   FOLLOW: 'follow',
// //   BLUE:'blue',
// //   RED:'red',
// };
// class Div {
//     constructor(element) {
//       this.element = element;
//       this.color = 'red'; 
//     }
  
//     setColor(color) {
//       this.color = color;
//       this.element.style.backgroundColor = color;
//     }
//   }
  

//   const divs = [];
//   for (const target of targetElems) {
//     const div = new Div(target);
//     divs.push(div);
//   }
  
 
  
  
  
  
  

// let currentState = State.IDLE;
// let currentColor=State.RED;
// let selectedDiv = null;

// // Define event handlers
// function handleMouseClick(event){
//     const dx = event.clientX - originalPos.x;
//     const dy = event.clientY - originalPos.y;
   
//     // if(!(selectedDiv.classList.contains("target")) ){
//     // for(var j = 0; j < targetElems.length; j++) {
//     //     targetElems[j].style.backgroundColor='red';
//     //     lastSelectedTarget.style.backgroundColor ='red';
//     //      currentColor=State.RED;
//     // }
    
//     // }
//     // if(selectedDiv.element.classList.contains("target")){
//     //     if(dx==0 && dy==0 && selectedDiv){
//     //         selectedDiv.setColor(blue);
//     //         currentColor=State.BLUE;
//     //     }
        
//     //     // if(currentColor==State.BLUE){
//     //     //     selectedTarget.style.backgroundColor ='blue';
//     //     // }
//     // }
//     if (currentState === State.SELECTED && selectedDiv) {
//         selectedDiv.setColor('blue');
//       }
// }

// function handleMouseDown(event) {
    
//         if (currentState == State.IDLE ) {
//             selectedDiv = divs.find(div => div.element === event.target);
//             currentState = State.SELECTED;
//         }
//         if (selectedDiv && event.target === selectedDiv.element &&event.target.classList.contains('target')) {
//             isDragging = true;
//             originalPos = {
//             x: event.clientX,
//             y: event.clientY,
//             top: selectedDiv.element.offsetTop,
//             left: selectedDiv.element.offsetLeft,
//             };
//             currentState = State.DRAGGING;
//         }
    
// }

// function handleMouseUp(event) {
//   if (currentState === State.DRAGGING) {
//     isDragging = false;
//     currentState = State.SELECTED;
//   }

// }

// function handleMouseMove(event) {
//   if (currentState === State.DRAGGING) {
//     const dx = event.clientX - originalPos.x;
//     const dy = event.clientY - originalPos.y;
//     selectedDiv.element.style.top = `${originalPos.top + dy}px`;
//     selectedDiv.element.style.left = `${originalPos.left + dx}px`;
//   }
// //   if (currentState === State.FOLLOW) {
// //     selectedTarget.style.top = `${event.clientY}px`;
// //     selectedTarget.style.left = `${event.clientX}px`;
// //   }
// }

// function handleKeyDown(event) {
//   if (event.key === 'Escape' && currentState === State.DRAGGING) {
//     selectedDiv.element.style.top = `${originalPos.top}px`;
//     selectedDiv.element.style.left = `${originalPos.left}px`;
//     currentState = State.SELECTED;
//   }
// }

// function handleBodyClick(event) {
//   if (currentState === State.SELECTED) {
//     selectedDiv.element.style.backgroundColor = '';
//     currentState = State.IDLE;
//     selectedDiv = null;
//     currentColor=State.RED;
//   }
// }
// function handleDoubleClick(event) {
//     if (currentState === State.SELECTED && selectedTarget === event.target) {
//       currentState = State.FOLLOW;
//     }
//   }
  
// Attach event listeners
// document.body.addEventListener('mousedown', handleMouseDown);
// document.body.addEventListener('mouseup', handleMouseUp);
// document.body.addEventListener('mousemove', handleMouseMove);
// document.body.addEventListener('keydown', handleKeyDown);
// document.body.addEventListener('click', handleBodyClick);
// document.body.addEventListener('click',handleMouseClick);
//document.body.addEventListener('dblclick', handleDoubleClick);
        // Attach event listeners
      // Define state enumeration
const State = {
    IDLE: 'idle',
    SELECTED: 'selected',
    DRAGGING: 'dragging',
    FOLLOWING: 'following',
  };
  var x1,x2
  // Define Div class
  class Div {
    constructor(element) {
      this.element = element;
      this.color = 'red';
      this.state = State.IDLE;
      this.originalPos = null;
      this.isDragging = false;
      this.isfollowing = false;
      this.lastTouch=null;
      this.lastTap = 0;
      this.initialDistance=0;
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
       
    if(event.target.classList.contains("target")){
          
      if (this.state === State.IDLE) {
        for (const div of divs) {
          div.setColor('red');
          div.setState(State.IDLE);
          console.log(this.state);
        }
        
       
        if(this.color=='red '&&this.state==State.DRAGGING){
            this.setColor('red');
            this.setState(State.SELECTED);
            console.log(this.state);
        }
        else if(this.color=='blue'&&this.state==State.DRAGGING){
            this.setColor('blue');
            this.setState(State.SELECTED);
            console.log(this.state);
        }
        else{
            this.setColor('blue');
            this.setState(State.SELECTED);
            console.log(this.state);
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
    handleMouseMove(event) {
      if (this.state === State.DRAGGING) {
        const dx = event.clientX - this.originalPos.x;
        const dy = event.clientY - this.originalPos.y;
        this.element.style.top = `${this.originalPos.top + dy}px`;
        this.element.style.left = `${this.originalPos.left + dx}px`;

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
        this.isDragging = false;
        this.setState(State.IDLE);
        console.log(this.state);
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
            this.isfollowing=true;
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
        if (event.touches.length == 2) {
            
            x1 = event.touches[0].clientX;
            
            //initialWidth = parseInt(document.defaultView.getComputedStyle(resizeableDiv,null).getPropertyValue("width"));
            console.log(x1);
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
        if (event.touches.length == 2 &&this.element.initialWidth !== null) {
            x2 = event.touches[1].clientX;
            console.log(x2);
            var newWidth = this.initialWidth + x2 - x1;
            console.log(this.initialWidth);
            this.element.style.width = newWidth + 'px';
            this.element.style.left=this.element.offsetLeft+(x1-x2)/2;
          }
        if (this.state == State.DRAGGING && event.touches.length == 1){
          const dx = event.touches[0].clientX - this.originalPos.x;
          const dy = event.touches[0].clientY - this.originalPos.y;
          this.element.style.top = `${this.originalPos.top + dy}px`;
          this.element.style.left = `${this.originalPos.left + dx}px`;

        }
        // else if(this.state == State.FOLLOWING ){
        //     const dx = event.touches[0].clientX- this.originalPos.x;
        //     const dy = event.touches[0].clientY- this.originalPos.y;
        //     this.element.style.top = event.touches[0].clientY - this.element.offsetHeight / 2 + "px";
        //     this.element.style.left = event.touches[0].clientX - this.element.offsetWidth / 2 + "px";
        // }
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
        
        this.initialWidth = null;
        // if (this.state == State.FOLLOWING) {
        //     this.isFollowing = false;
        //     this.setState(State.IDLE);
        //     console.log(this.state);
        //   }
        //document.body.removeEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
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
  
                    
