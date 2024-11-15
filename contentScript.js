// Create a new div element that will act as the overlay
const overlayDiv = document.createElement('div');
const overlayBackgroundDiv = document.createElement('div');

overlayDiv.id ="overlayDiv";
overlayDiv.style.position = 'fixed';
overlayDiv.style.top = '100px';  // Leave 100px at the top
overlayDiv.style.left = '0'; 
overlayDiv.style.width = '100%';
overlayDiv.style.height = 'calc(100vh - 100px)';  // Calculate height minus 100px
overlayDiv.style.backgroundPosition = 'center';  // Center the image
overlayDiv.style.backgroundSize = "cover"; // Change to create movement
overlayDiv.style.zIndex = '9999';  // Ensure it is on top of other elements
overlayDiv.style.color = 'white';  // Text color white
overlayDiv.style.display = 'flex';  // Flexbox for layout
overlayDiv.style.flexDirection = 'column';  // Stack elements vertically
overlayDiv.style.alignItems = 'center';  // Center items horizontally
overlayDiv.style.justifyContent = 'center';  // Center items vertically
overlayDiv.style.overflow ='hidden';

// Apply the silver shine animation using CSS
overlayBackgroundDiv.style.overflow ='hidden';
overlayBackgroundDiv.style.position = 'absolute';
overlayBackgroundDiv.style.borderRadius='100%';
overlayBackgroundDiv.style.width = '200vw';
overlayBackgroundDiv.style.height = "200vw";  // Calculate height minus 100px
overlayBackgroundDiv.style.background = 'linear-gradient(135deg, #F8B195, #ff6694, #C06C84, #6C5B7B, #355C7D)';
overlayBackgroundDiv.style.backgroundSize = '100% 100%'; // Change to create movement
overlayBackgroundDiv.style.animation = 'shine 30s linear infinite'; // Add animation
overlayBackgroundDiv.style.transition ='all 5s linear'; // Transition 
overlayBackgroundDiv.style.color = 'white';  // Text color white
overlayBackgroundDiv.style.zIndex = '-1';  // Ensure it is on top of other elements
overlayBackgroundDiv.style.display = 'flex';  // Flexbox for layout
overlayBackgroundDiv.style.flexDirection = 'column';  // Stack elements vertically
overlayBackgroundDiv.style.alignItems = 'center';  // Center items horizontally
overlayBackgroundDiv.style.justifyContent = 'center';  // Center items vertically
overlayBackgroundDiv.style.opacity= '100%';  // Center items vertically

// Add a close button to the div
const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.style.padding = '10px 20px';
closeButton.style.backgroundColor = '#FF6347';  // Tomato color
closeButton.style.color = 'white';
closeButton.style.border = 'none';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '16px';
closeButton.style.marginTop = '20px';
closeButton.style.borderRadius = '30px';
closeButton.style.bottom = '100px';
closeButton.style.position = 'absolute';
closeButton.style.zIndex = '999';

closeButton.addEventListener('mouseenter', function (){
  overlayHead.textContent = 'Are you sure ?';
  overlayText.textContent ="Hey! Hey!, Think befora close. If you push that button with out thinking,You are going to lose you time and mind... Be kind and Mindful to your self"
  overlayHead.marginBottom = '50px';
  overlayBackgroundDiv.style.transition ='all 1s linear';
  overlayBackgroundDiv.style.background = 'linear-gradient(135deg, #F8B195, #ff1447, #17000f, #17000f)';
})
closeButton.addEventListener('mouseleave', function (){
  overlayHead.textContent = 'Stay Focused !';
  overlayText.textContent = 'Remember, you are the one who can change your life. Stay focused, and keep moving forward—your dedication and hard work will make a lasting impact.';
  overlayBackgroundDiv.style.transition ='all 1s linear';
  overlayBackgroundDiv.style.background = 'linear-gradient(135deg, #F8B195, #ff6694, #C06C84, #6C5B7B, #355C7D)';
})
// Close the overlay when the button is clicked
closeButton.addEventListener('click', () => {
  overlayDiv.style.display = "none";
});

// Add some text to the div
const overlayText = document.createElement('h1');
overlayText.style.width ='60vw';
overlayText.textContent = 'Remember, you are the one who can change your life. Stay focused, and keep moving forward—your dedication and hard work will make a lasting impact.';
overlayText.style.fontSize = '36px';
overlayText.style.textAlign = 'center';
overlayText.style.fontFamily ="'Courier New', monospace";

const overlayHead = document.createElement('h1');
overlayHead.textContent = 'Stay Focused !';
overlayHead.style.fontSize = '6rem';
overlayHead.style.transition ='all 1s linear';
overlayHead.style.textAlign = 'center';

// Create a link element
// const linkElement = document.createElement('a');
// linkElement.href = 'https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&pp=iAQB';  // Change to your desired link
// linkElement.textContent = 'Learn Java Script';  // Link text
// linkElement.style.color = 'white';  // Link color
// linkElement.style.fontSize = "20px" // Font Size
// linkElement.style.textDecoration = 'none';  // Underline the link
// linkElement.style.margin = "10px 50px 10px 50px"; // Margine
// linkElement.style.padding = "10px"; // Padding
// linkElement.style.minWidth = "300px";
// linkElement.style.textAlign= "center";
// linkElement.style.border = "1px white solid";
// linkElement.style.borderRadius = "15px";
// linkElement.style.transition = "all 0.5s ";
// linkElement.style.animation = "boxShadowShine 20s linear infinite";

// Animations
// linkElement.addEventListener('mouseenter', function (){
// linkElement.style.transform = "scale(110%)";
// linkElement.style.boxShadow = '0px 0px 50px  rgb(255, 255, 255), 0px 0px 10px rgb(255, 255, 255) inset';
// linkElement.style.borderRadius =  "0px";
// linkElement.style.color = "black";
// linkElement.style.backgroundColor = '#9effec';
// linkElement.style.border = "none";
// linkElement.style.border = "1px white solid";
// })

// linkElement.addEventListener('mouseleave', function() {
// linkElement.style.transform = "scale(100%)";
// linkElement.style.margin = "10px 50px 10px 50px"; // Margine
// linkElement.style.padding = "10px"; // Padding
// linkElement.style.minWidth = "300px";
// linkElement.style.textAlign= "center";
// linkElement.style.borderRadius = "15px";
// linkElement.style.border = "1px white solid";
// linkElement.style.color = "white";
// linkElement.style.backgroundColor ='';
// });

// const linkElement2 = document.createElement('a');
// linkElement2.href = 'https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&pp=iAQB';  // Change to your desired link
// linkElement2.textContent = 'Learn Prompt Enginering';  // Link text
// linkElement2.style.fontSize = "20px" // Font Size
// linkElement2.style.color = 'white';  // Link color
// linkElement2.style.textDecoration = 'none';  // Underline the link
// linkElement2.style.margin = "10px 50px 10px 50px"; // Margine
// linkElement2.style.padding ="10px"; // Padding
// linkElement2.style.minWidth ="300px"
// linkElement2.style.textAlign= "center"
// linkElement2.style.border = "1px white solid"
// linkElement2.style.borderRadius ="15px"
// linkElement2.style.transition ="all 0.5s ";
// linkElement2.style.animation ="boxShadowShine 20s linear infinite";

// linkElement2.addEventListener('mouseenter', function (){
// linkElement2.style.transform = "scale(110%)";
// linkElement2.style.boxShadow = '0px 0px 50px  rgb(255, 255, 255), 0px 0px 10px rgb(255, 255, 255) inset';
// linkElement2.style.borderRadius ="0px";
// linkElement2.style.backgroundColor ='#9effec';
// linkElement2.style.color="black";
// linkElement2.style.border = "none";
// linkElement2.style.border = "1px white solid"
// });

// linkElement2.addEventListener('mouseleave', function() {
// linkElement2.style.transform = "skewy(0) scale(100%)";
// linkElement2.style.margin = "10px 50px 10px 50px"; // Margine
// linkElement2.style.padding = "10px"; // Padding
// linkElement2.style.minWidth = "300px";
// linkElement2.style.textAlign= "center";
// linkElement2.style.borderRadius = "15px";
// linkElement2.style.border = "1px white solid"
// linkElement2.style.backgroundColor ='';
// linkElement2.style.color= "white";
// });

//Link Bar
const linkBar = document.createElement('div');
linkBar.style.display="flex";
linkBar.style.flex = 'flex-wrap';
linkBar.style.flexDirection = 'raw';  // Stack elements vertically
linkBar.style.alignItems = 'center';  // Center items horizontally
linkBar.style.overflowX = "scroll";
linkBar.style.height = "20vh";
linkBar.style.width = "100vw";
linkBar.style.marginBottom="50px";

// Append the elements to the overlay div

overlayDiv.appendChild(overlayBackgroundDiv);  // Add the Background
overlayDiv.appendChild(overlayHead);  // Add the head
overlayDiv.appendChild(overlayText);  // Add the text
// linkBar.appendChild(linkElement);  // Add the link
// linkBar.appendChild(linkElement2);  // Add the link
overlayDiv.appendChild(linkBar);
overlayDiv.appendChild(closeButton);  // Add the close button


// Append the div to the body of the webpage
document.body.appendChild(overlayDiv);

// Add the keyframes animation for the shine effect
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText =`
@keyframes shine {
  0% {
    background-position: 0% 50%;
    transform: rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    transform: rotate(180deg);
  }
  100% {
    background-position: 0% 50%;
    transform: rotate(360deg);
  }
}

@keyframes boxShadowShine {
  0% {
    box-shadow: 0px 0px 0px #ffb6be, 0px 0px 0px #ffb6be inset;
  }
  15% {
    box-shadow: 30px 0px 40px #ffb6be, 100px 0px 50px #ffb6be inset;
  }
  30% {
    box-shadow: -30px 0px 50px #ffb6be, 0px -50px 50px #ffb6be inset;
  }
  45% {
    box-shadow: 0px 0px 40px #ffb6be, -100px 0px 50px #ffb6be inset;
  }
  60% {
    box-shadow: -30px 0px 50px #ffb6be, 0px 50px 50px #ffb6be inset;
  }
  75% {
    box-shadow: 30px 0px 40px #ffb6be, 100px 0px 50px #ffb6be inset;
  }
  85% {
    box-shadow: 0px 0px 50px #ffb6be, 0px -50px 50px #ffb6be inset;
  }
  90% {
    box-shadow: -30px 0px 40px #ffb6be, -100px 0px 50px #ffb6be inset;
  }
  100% {
    box-shadow: 0px 0px 0px #ffb6be, 0px 0px 0px #ffb6be inset;
  }
}
::-webkit-scrollbar {
  width: 2px;
  height :2px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px white;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #C06C84;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff6694;
}
`;
document.head.appendChild(styleSheet);

// Function to create the button
function createButton(name, url) {
  const newButton = document.createElement('button');
  newButton.textContent = name;
  newButton.style.margin = '20px';
  newButton.setAttribute('data-link', url);
  newButton.style.color = 'white';  // Link color
  newButton.style.fontSize = "20px" // Font Size
  newButton.style.textDecoration = 'none';  // Underline the link
  newButton.style.margin = "10px 50px 10px 50px"; // Margine
  newButton.style.padding ="10px"; // Padding
  newButton.style.minWidth ="300px";
  newButton.style.background = "transparent";
  newButton.style.textAlign= "center";
  newButton.style.border = "1px white solid";
  newButton.style.borderRadius ="15px";
  newButton.style.transition ="all 0.5s ";
  newButton.style.animation ="boxShadowShine 20s linear infinite";
  newButton.style.display = 'flex';
  newButton.style.alignItems ='center';
  newButton.style.justifyContent = 'center'
  newButton.style.flexDirection = 'row';

  // Add a click event to navigate to the provided URL
  newButton.addEventListener('click', () => {
      window.location.href = url;
  });

  newButton.addEventListener('mouseenter', function (){
    newButton.style.transform = "scale(110%)";
    newButton.style.boxShadow = '0px 0px 50px  rgb(255, 255, 255), 0px 0px 10px rgb(255, 255, 255) inset';
    newButton.style.borderRadius =  "0px";
    newButton.style.color = "black";
    newButton.style.backgroundColor = '#9effec';
    newButton.style.border = "none";
    newButton.style.border = "1px white solid";
    })
    
    newButton.addEventListener('mouseleave', function() {
    newButton.style.transform = "scale(100%)";
    newButton.style.margin = "10px 50px 10px 50px"; // Margine
    newButton.style.padding = "10px"; // Padding
    newButton.style.minWidth = "300px";
    newButton.style.textAlign= "center";
    newButton.style.borderRadius = "15px";
    newButton.style.border = "1px white solid";
    newButton.style.color = "white";
    newButton.style.backgroundColor ='transparent';
    });
    
  // Add a remove button for each created button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.style.marginLeft = '30px';
  removeBtn.style.border = "none";
  removeBtn.style.background = 'transparent';
  removeBtn.style.color = 'white';
  removeBtn.style.zIndex = '9999';
  
  removeBtn.addEventListener('click', () => {
      newButton.remove();
      removeBtn.remove();

      // Remove from storage
      chrome.storage.local.get(['buttons'], function(result) {
          const buttons = result.buttons || [];
          const updatedButtons = buttons.filter(btn => btn.name !== name);
          chrome.storage.local.set({ buttons: updatedButtons });
      });
  });

  // Append the buttons to the body or specific section
 linkBar.appendChild(newButton);
  newButton.appendChild(removeBtn);
}

// Listen for the message from popup.js to create the button and store it
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { name, url } = request;
  
  // Create the button on the page
  createButton(name, url);
  
  // Store the button details in chrome storage
  chrome.storage.local.get(['buttons'], function(result) {
      const buttons = result.buttons || [];
      buttons.push({ name, url });
      chrome.storage.local.set({ buttons });
  });
});

// Load buttons from storage when the page is loaded
chrome.storage.local.get(['buttons'], function(result) {
  const buttons = result.buttons || [];
  buttons.forEach(button => {
      createButton(button.name, button.url);
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showOverlay") {
      overlayDiv.style.display = "flex";
  }
});