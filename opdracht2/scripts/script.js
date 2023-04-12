// function openMenu() {
//     var x = document.getElementById("shoe-buttons");
//     if (x.style.display === "none") {
//       x.style.display = "grid";
//     } else {
//       x.style.display = "none";
//     }
// }

// const toeImages = [
//     "images/toe/ToeWhite.png",
//     "images/toe/ToeBlack.png",
//     "images/toe/ToeBlue.png",
//     "images/toe/ToeLime.png",
//     "images/toe/ToeRed.png",
//     "images/toe/ToeGrey.png"
// ]

// let currentToeIndex = -1;

// function nextToeImage() {
// 	// Get the image element from the HTML
// 	const toeImage = document.getElementById("toe-shoe");

//     // Increment the current image index
// 	currentToeIndex++;

// 	// If the index goes beyond the length of the array, reset it to 0
// 	if (currentToeIndex >= toeImages.length) {
// 		currentToeIndex = 0;
// 	}

// 	// Set the src attribute of the image element to the current image in the array
// 	toeImage.src = toeImages[currentToeIndex];
// }

// // Call the nextImage function initially to display the first image
// nextToeImage();


// const noseImages = [
//     "images/nose/NoseWhite.png",
//     "images/nose/NoseBlack.png",
//     "images/nose/NoseBlue.png",
//     "images/nose/NoseLime.png",
//     "images/nose/NoseRed.png",
//     "images/nose/NoseGrey.png"
// ]

// let currentNoseIndex = -1;

// function nextNoseImage() {
// 	const noseImage = document.getElementById("nose-shoe");

// 	currentNoseIndex++;

// 	if (currentNoseIndex >= noseImages.length) {
// 		currentNoseIndex = 0;
// 	}

// 	noseImage.src = noseImages[currentNoseIndex];
// }

// nextNoseImage();

// const sideImages = [
//     "images/side/SideWhite.png",
//     "images/side/SideBlack.png",
//     "images/side/SideBlue.png",
//     "images/side/SideLime.png",
//     "images/side/SideRed.png",
//     "images/side/SideGrey.png"
// ]

// let currentSideIndex = -1;

// function nextSideImage() {
// 	const sideImage = document.getElementById("side-shoe");

// 	currentSideIndex++;

// 	if (currentSideIndex >= sideImages.length) {
// 		currentSideIndex = 0;
// 	}

// 	sideImage.src = sideImages[currentSideIndex];
// }

// nextSideImage();

// const swooshImages = [
//     "images/swoosh/SwooshWhite.png",
//     "images/swoosh/SwooshBlack.png",
//     "images/swoosh/SwooshBlue.png",
//     "images/swoosh/SwooshLime.png",
//     "images/swoosh/SwooshRed.png",
//     "images/swoosh/SwooshGrey.png"
// ]

// let currentSwooshIndex = -1;

// function nextSwooshImage() {
// 	const swooshImage = document.getElementById("swoosh-shoe");

// 	currentSwooshIndex++;

// 	if (currentSwooshIndex >= swooshImages.length) {
// 		currentSwooshIndex = 0;
// 	}

// 	swooshImage.src = swooshImages[currentSwooshIndex];
// }

// nextSwooshImage();

// const laceImages = [
//     "images/lace/LaceWhite.png",
//     "images/lace/LaceBlack.png",
//     "images/lace/LaceBlue.png",
//     "images/lace/LaceLime.png",
//     "images/lace/LaceRed.png",
//     "images/lace/LaceGrey.png"
// ]

// let currentLaceIndex = -1;

// function nextLaceImage() {
// 	const laceImage = document.getElementById("lace-shoe");

// 	currentLaceIndex++;

// 	if (currentLaceIndex >= laceImages.length) {
// 		currentLaceIndex = 0;
// 	}

// 	laceImage.src = laceImages[currentLaceIndex];
// }

// nextLaceImage();

// const upperImages = [
//     "images/upper/UpperWhite.png",
//     "images/upper/UpperBlack.png",
//     "images/upper/UpperBlue.png",
//     "images/upper/UpperLime.png",
//     "images/upper/UpperRed.png",
//     "images/upper/UpperGrey.png"
// ]

// let currentUpperIndex = -1;

// function nextUpperImage() {
// 	const upperImage = document.getElementById("upper-shoe");

// 	currentUpperIndex++;

// 	if (currentUpperIndex >= upperImages.length) {
// 		currentUpperIndex = 0;
// 	}

// 	upperImage.src = upperImages[currentUpperIndex];
// }

// nextUpperImage();

// const heelImages = [
//     "images/heel/HeelWhite.png",
//     "images/heel/HeelBlack.png",
//     "images/heel/HeelBlue.png",
//     "images/heel/HeelLime.png",
//     "images/heel/HeelRed.png",
//     "images/heel/HeelGrey.png"
// ]

// let currentHeelIndex = -1;

// function nextHeelImage() {
// 	const heelImage = document.getElementById("heel-shoe");

// 	currentHeelIndex++;

// 	if (currentHeelIndex >= heelImages.length) {
// 		currentHeelIndex = 0;
// 	}

// 	heelImage.src = heelImages[currentHeelIndex];
// }

// nextHeelImage();

// const backImages = [
//     "images/back/BackWhite.png",
//     "images/back/BackBlack.png",
//     "images/back/BackBlue.png",
//     "images/back/BackLime.png",
//     "images/back/BackRed.png",
//     "images/back/BackGrey.png"
// ]

// let currentBackIndex = -1;

// function nextBackImage() {
// 	const backImage = document.getElementById("back-shoe");

// 	currentBackIndex++;

// 	if (currentBackIndex >= backImages.length) {
// 		currentBackIndex = 0;
// 	}

// 	backImage.src = backImages[currentBackIndex];
// }

// nextBackImage();


// const soleImages = [
//     "images/sole/SoleWhite.png",
//     "images/sole/SoleBlack.png",
//     "images/sole/SoleGrey.png"
// ]

// let currentSoleIndex = -1;

// function nextSoleImage() {
// 	const soleImage = document.getElementById("sole-shoe");

// 	currentSoleIndex++;

// 	if (currentSoleIndex >= soleImages.length) {
// 		currentSoleIndex = 0;
// 	}

// 	soleImage.src = soleImages[currentSoleIndex];
// }

// nextSoleImage();


// function openMenuToe() {
//     var x = document.getElementById("toeColors");
//     if (x.style.display === "none") {
//       x.style.display = "flex";
//     } else {
//       x.style.display = "none";
//     }
// }

// function openMenuNose() {
//     var x = document.getElementById("noseColors");
//     if (x.style.display === "none") {
//       x.style.display = "flex";
//     } else {
//       x.style.display = "none";
//     }
// }

// function openMenu() {
//     var x = document.getElementById("colors");
//     if (x.style.display === "none") {
//       x.style.display = "flex";
//     } else {
//       x.style.display = "none";
//     }
// }

// function openMenuSole() {
//     var x = document.getElementById("colors-sole");
//     if (x.style.display === "none") {
//       x.style.display = "flex";
//     } else {
//       x.style.display = "none";
//     }
// }

// const radioButtons = document.getElementsByName("itemSelect");

// radioButtons.forEach(radio => {
//     return radio.addEventListener("click", (event) => {
        
//         const activeElement = document.getElementById(`droptarget${event.target.value}`);
//         console.log(activeElement)

//         if(activeElement){
//             activeElement.style.zIndex = "99";
//             activeElement.draggable = true;

//             let dragged = null;
//             let current = null;

//             const dragWhite = document.getElementById("dragWhite");
//             const dragBlack = document.getElementById("dragBlack");
//             const dragBlue = document.getElementById("dragBlue");
//             const dragLime = document.getElementById("dragLime");
//             const dragRed = document.getElementById("dragRed");
//             const dragGrey = document.getElementById("dragGrey");

//             dragWhite.addEventListener("dragstart", (event) => {
//                 dragged = event.target;

//                 current = activeElement.dataset.color;
//             });

//             dragBlack.addEventListener("dragstart", (event) => {
//                 dragged = event.target;
                  
//                   current = activeElement.dataset.color;
//             });

//             dragBlue.addEventListener("dragstart", (event) => {
//               dragged = event.target;
                
//                 current = activeElement.dataset.color;
//             });

//             dragLime.addEventListener("dragstart", (event) => {
//               dragged = event.target;
                
//                 current = activeElement.dataset.color;
//             });

//             dragRed.addEventListener("dragstart", (event) => {
//               dragged = event.target;
                
//                 current = activeElement.dataset.color;
//             });

//             dragGrey.addEventListener("dragstart", (event) => {
//               dragged = event.target;
                
//                 current = activeElement.dataset.color;
//             });

//             const target = document.getElementById(`droptarget${event.target.value}`);

//             target.addEventListener("dragover", (event) => {
//               event.preventDefault();
//             });
              
//             target.addEventListener("dragenter", (event) => {
//                 event.preventDefault();
                
//                 console.log({color: dragged.value, event});
                
//                 activeElement.dataset.color = dragged.value;
//             });
              
//             target.addEventListener("dragleave", (event) => {
//                 event.preventDefault();
                
//                 activeElement.dataset.color = current;
//             });

              
//             radioButtons.forEach((otherRadio) => {
//                 if(otherRadio !== radio) {
//                     const nonActiveElement = document.getElementById(`droptarget${otherRadio.value}`);
//                     nonActiveElement.style.zIndex = "0";
//                     nonActiveElement.draggable = false;
//                 }
//             });
//         }
//     })
// });


// let toe = document.getElementById("droptargetToe");
// let draggedToe = null;
// let currentToe = null;

// const dragWhiteToe = document.getElementById("dragWhiteToe");
// const dragBlackToe = document.getElementById("dragBlackToe");
// const dragBlueToe = document.getElementById("dragBlueToe");
// const dragLimeToe = document.getElementById("dragLimeToe");
// const dragRedToe = document.getElementById("dragRedToe");
// const dragGreyToe = document.getElementById("dragGreyToe");


// dragWhiteToe.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedToe = event.target;
      
//       currentToe = toe.dataset.color;
// });

// dragBlackToe.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedToe = event.target;
      
//       currentToe = toe.dataset.color;
// });

// dragBlueToe.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   draggedToe = event.target;
	
// 	currentToe = toe.dataset.color;
// });

// dragLimeToe.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedToe = event.target;
      
//       currentToe = toe.dataset.color;
// });

// dragRedToe.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   draggedToe = event.target;
	
// 	currentToe = toe.dataset.color;
// });

// dragGreyToe.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedToe = event.target;
      
//       currentToe = toe.dataset.color;
// });

// const targetToe = document.getElementById("droptargetToe");

// targetToe.addEventListener("dragover", (event) => {
//   // prevent default to allow drop
//   event.preventDefault();
// });

// targetToe.addEventListener("dragenter", (event) => {
//   event.preventDefault();
	
// 	console.log(draggedToe.value);
	
// 	toe.dataset.color = draggedToe.value;
// });

// targetToe.addEventListener("dragleave", (event) => {
//   event.preventDefault();
	
// 	toe.dataset.color = currentToe;
// });


// NOSE


// let nose = document.getElementById("droptargetNose");
// let draggedNose = null;
// let currentNose = null;

// const dragWhiteNose = document.getElementById("dragWhiteNose");
// const dragBlackNose = document.getElementById("dragBlackNose");
// const dragBlueNose = document.getElementById("dragBlueNose");
// const dragLimeNose = document.getElementById("dragLimeNose");
// const dragRedNose = document.getElementById("dragRedNose");
// const dragGreyNose = document.getElementById("dragGreyNose");

// dragWhiteNose.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedNose = event.target;
      
//       currentNose = nose.dataset.color;
// });

// dragBlackNose.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedNose = event.target;
      
//       currentNose = nose.dataset.color;
// });

// dragBlueNose.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   draggedNose = event.target;
	
// 	currentNose = nose.dataset.color;
// });

// dragLimeNose.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedNose = event.target;
      
//       currentNose = nose.dataset.color;
// }); 

// dragRedNose.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   draggedNose = event.target;
	
// 	currentNose = nose.dataset.color;
// });

// dragGreyNose.addEventListener("dragstart", (event) => {
//     // store a ref. on the dragged elem
//     draggedNose = event.target;
      
//       currentNose = nose.dataset.color;
// });

// const targetNose = document.getElementById("droptargetNose");

// console.log(nose , targetNose)

// targetNose.addEventListener("dragover", (event) => {
//   // prevent default to allow drop
//   event.preventDefault();
// });

// targetNose.addEventListener("dragenter", (event) => {
//   event.preventDefault();
	
// 	console.log(draggedNose.value);
	
// 	nose.dataset.color = draggedNose.value;
// });

// targetNose.addEventListener("dragleave", (event) => {
//   event.preventDefault();
	
//   nose.dataset.color = currentNose;
// });

// De gebruiker kan verschillende delen van de schoen aanpassen via een menu

// const openMenuToe = document.getElementById("toggle-menu-button-toe");
// openMenuToe.addEventListener("click", toggleMenu);

// const openMenuNose = document.getElementById("toggle-menu-button-nose");
// openMenuNose.addEventListener("click", toggleMenu);

// const openMenuSide = document.getElementById("toggle-menu-button-side");
// openMenuSide.addEventListener("click", toggleMenu);

// const openMenuSwoosh = document.getElementById("toggle-menu-button-swoosh");
// openMenuSwoosh.addEventListener("click", toggleMenu);

// const openMenuLace = document.getElementById("toggle-menu-button-lace");
// openMenuLace.addEventListener("click", toggleMenu);

// const openMenuUpper = document.getElementById("toggle-menu-button-upper");
// openMenuUpper.addEventListener("click", toggleMenu);

// const openMenuHeel = document.getElementById("toggle-menu-button-heel");
// openMenuHeel.addEventListener("click", toggleMenu);

// const openMenuBack = document.getElementById("toggle-menu-button-back");
// openMenuBack.addEventListener("click", toggleMenu);

// const openMenuSole = document.getElementById("toggle-menu-button-sole");
// openMenuSole.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   const buttonId = event.target.id;
//   const fieldsetId = buttonId.replace("toggle-menu-button-", "");

//   const currentOpenFieldset = document.querySelector(`fieldset:not(.hidden):not(#${fieldsetId}-buttons)`);
//   if (currentOpenFieldset) {
//     currentOpenFieldset.classList.add("hidden");
//   }

//   const targetFieldset = document.getElementById(`${fieldsetId}-buttons`);
//   targetFieldset.classList.toggle("hidden");
// }

// De gebruiker kan zijn/haar maat selecteren en displayen

let mybtn = document.getElementById("size-button")
mybtn.addEventListener("click", sizes)

function sizes() {
    var x = document.getElementById("sizeList");
    var i = x.selectedIndex;
    document.getElementById("sizeChosen").innerHTML = x.options[i].text;
}

// De gebruiker kan verschillende delen van de schoen aanpassen via een uitklapbaar menu

const toggleButtons = document.querySelectorAll('[id^="toggle-menu-button-"]');
toggleButtons.forEach(button => button.addEventListener("click", toggleMenu));

function toggleMenu(event) {
  const buttonId = event.target.id;
  const fieldsetId = buttonId.replace("toggle-menu-button-", "");

  const currentOpenFieldset = document.querySelector(`fieldset:not(.hidden):not(#${fieldsetId}-buttons)`);
  if (currentOpenFieldset) {
    currentOpenFieldset.classList.add("hidden");
  }

  const gekozenFieldset = document.getElementById(`${fieldsetId}-buttons`);
  gekozenFieldset.classList.toggle("hidden");
}

let draggedButton = null;
let currentButton = null;
let imgToChance = null
let currentColor = null;


// Buttons assignen aan drag & Drop en klikken

const buttons = document.querySelectorAll("fieldset button");

buttons.forEach(button => {

    button.addEventListener("dragstart", dragstart);

    button.addEventListener("dragend", dragend);

    button.addEventListener("click", changeColor);
});

// Klik events toepassen

function changeColor(event) {
	const clickedButton = event.target;
	
	// plaatje dat kan veranderen opzoeken
	const fieldset = clickedButton.closest("fieldset");
	const fieldsetName = fieldset.name;
	imgToChance = document.getElementById(fieldsetName);
	// en anders kleurtje geven
	imgToChance.dataset.color = clickedButton.value;
	
	// buttons aanpassen
	// huidige button opzoeken
	currentButton = fieldset.querySelector("[aria-pressed='true']");
	// aria-pressed swappen
	currentButton.ariaPressed = false;
	clickedButton.ariaPressed = true;
	
	// opruimen
	currentButton = null;
	imgToChance = null;
}


// Drag and drop functie toepassen

// plaatjes die kunnen veranderen drop-targets maken
const imgs = document.querySelectorAll(".shoe-container img");

// Elke img een droptarget maken
imgs.forEach(img => {
	
	// prevent default to allow drop
	img.addEventListener("dragover", event => {
		event.preventDefault();
	});

	
	// als over de dropTarget gehoverd wordt, het plaatje alvast aanpassen
	img.addEventListener("dragenter", event => {
		imgToChance.dataset.color = draggedButton.value;
		
		// buttons swappen
		currentButton.ariaPressed = false;
		draggedButton.ariaPressed = true;
	});

	
	// als het dropTarget verlaten wordt
	// het plaatje weer naar de huidige versie veranderen
	img.addEventListener("dragleave", event => {
		imgToChance.dataset.color = currentColor;

		// reset cursor to grabbing - om bugje op te lossen
		draggedButton.classList.remove("dragging");
		setTimeout( () => {
			draggedButton.classList.add("dragging");
		}, 10);
		
		// button terug swappen
		currentButton.ariaPressed = true;
		draggedButton.ariaPressed = false;
	});
});


// Drag-start functie

function dragstart(event) {

	draggedButton = event.target;
	// cursor wordt grabbing handje om te laten zien dat je het kan vastpakken
	draggedButton.classList.add("dragging");
	
	// plaatje dat kan veranderen opzoeken
	const fieldset = draggedButton.closest("fieldset");
	const fieldsetName = fieldset.name;
	imgToChance = document.getElementById(fieldsetName);
	// plaatje laten luisteren naar pointer events
	imgToChance.classList.add("drop-target");
	// de huidige kleur bewaren
	currentColor = imgToChance.dataset.color;
	
	// huidige button opslaan en bewaren
	currentButton = fieldset.querySelector("[aria-pressed='true']");
}


// Drag stop functie

function dragend() {
	// cursor weer normaal
	draggedButton.classList.remove("dragging");
	// plaatje niet meer laten luisteren naar pointer events
	imgToChance.classList.remove("drop-target");
	
	// opruimen
	draggedButton = null;
	currentButton = null;
	imgToChance = null
	currentColor = null;
}

const screenshotBtn = document.querySelector("#screenshot-button"),
screenshotPreview = document.querySelector(".src-preview"),
closeBtn = screenshotPreview.querySelector("#close-btn");

const captureScreen = async () => {
    try {
        // Toestemming om scherm te recorden
        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
        const video = document.createElement("video");
        
        video.addEventListener("loadedmetadata", () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Afmetingen van het scherm vaststellen
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            video.play();

            // Image maken van het schermrecorden
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop(); 
            // Het eerste beeld vastleggen van de video als img
            
            // canvas data als preview img zetten
            screenshotPreview.querySelector("img").src = canvas.toDataURL();
            screenshotPreview.classList.add("show");
        });
        video.srcObject = stream; 
    } catch (error) {
        alert("Screenshot has failed");
    }
}

closeBtn.addEventListener("click", () => screenshotPreview.classList.toggle("show"));
screenshotBtn.addEventListener("click", captureScreen);
