function selectSize() {
    var x = document.getElementById("sizeList");
    var i = x.selectedIndex;
    document.getElementById("sizeChosen").innerHTML = x.options[i].text;
}

function openMenu() {
    var x = document.getElementById("shoe-buttons");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
}

const toeImages = [
    "images/toe/ToeWhite.png",
    "images/toe/ToeBlack.png",
    "images/toe/ToeBlue.png",
    "images/toe/ToeLime.png",
    "images/toe/ToeRed.png",
    "images/toe/ToeGrey.png"
]

let currentToeIndex = -1;

function nextToeImage() {
	// Get the image element from the HTML
	const toeImage = document.getElementById("toe-shoe");

    // Increment the current image index
	currentToeIndex++;

	// If the index goes beyond the length of the array, reset it to 0
	if (currentToeIndex >= toeImages.length) {
		currentToeIndex = 0;
	}

	// Set the src attribute of the image element to the current image in the array
	toeImage.src = toeImages[currentToeIndex];
}

// Call the nextImage function initially to display the first image
nextToeImage();


const noseImages = [
    "images/nose/NoseWhite.png",
    "images/nose/NoseBlack.png",
    "images/nose/NoseBlue.png",
    "images/nose/NoseLime.png",
    "images/nose/NoseRed.png",
    "images/nose/NoseGrey.png"
]

let currentNoseIndex = -1;

function nextNoseImage() {
	const noseImage = document.getElementById("nose-shoe");

	currentNoseIndex++;

	if (currentNoseIndex >= noseImages.length) {
		currentNoseIndex = 0;
	}

	noseImage.src = noseImages[currentNoseIndex];
}

nextNoseImage();

const sideImages = [
    "images/side/SideWhite.png",
    "images/side/SideBlack.png",
    "images/side/SideBlue.png",
    "images/side/SideLime.png",
    "images/side/SideRed.png",
    "images/side/SideGrey.png"
]

let currentSideIndex = -1;

function nextSideImage() {
	const sideImage = document.getElementById("side-shoe");

	currentSideIndex++;

	if (currentSideIndex >= sideImages.length) {
		currentSideIndex = 0;
	}

	sideImage.src = sideImages[currentSideIndex];
}

nextSideImage();

const swooshImages = [
    "images/swoosh/SwooshWhite.png",
    "images/swoosh/SwooshBlack.png",
    "images/swoosh/SwooshBlue.png",
    "images/swoosh/SwooshLime.png",
    "images/swoosh/SwooshRed.png",
    "images/swoosh/SwooshGrey.png"
]

let currentSwooshIndex = -1;

function nextSwooshImage() {
	const swooshImage = document.getElementById("swoosh-shoe");

	currentSwooshIndex++;

	if (currentSwooshIndex >= swooshImages.length) {
		currentSwooshIndex = 0;
	}

	swooshImage.src = swooshImages[currentSwooshIndex];
}

nextSwooshImage();

const laceImages = [
    "images/lace/LaceWhite.png",
    "images/lace/LaceBlack.png",
    "images/lace/LaceBlue.png",
    "images/lace/LaceLime.png",
    "images/lace/LaceRed.png",
    "images/lace/LaceGrey.png"
]

let currentLaceIndex = -1;

function nextLaceImage() {
	const laceImage = document.getElementById("lace-shoe");

	currentLaceIndex++;

	if (currentLaceIndex >= laceImages.length) {
		currentLaceIndex = 0;
	}

	laceImage.src = laceImages[currentLaceIndex];
}

nextLaceImage();

const upperImages = [
    "images/upper/UpperWhite.png",
    "images/upper/UpperBlack.png",
    "images/upper/UpperBlue.png",
    "images/upper/UpperLime.png",
    "images/upper/UpperRed.png",
    "images/upper/UpperGrey.png"
]

let currentUpperIndex = -1;

function nextUpperImage() {
	const upperImage = document.getElementById("upper-shoe");

	currentUpperIndex++;

	if (currentUpperIndex >= upperImages.length) {
		currentUpperIndex = 0;
	}

	upperImage.src = upperImages[currentUpperIndex];
}

nextUpperImage();

const heelImages = [
    "images/heel/HeelWhite.png",
    "images/heel/HeelBlack.png",
    "images/heel/HeelBlue.png",
    "images/heel/HeelLime.png",
    "images/heel/HeelRed.png",
    "images/heel/HeelGrey.png"
]

let currentHeelIndex = -1;

function nextHeelImage() {
	const heelImage = document.getElementById("heel-shoe");

	currentHeelIndex++;

	if (currentHeelIndex >= heelImages.length) {
		currentHeelIndex = 0;
	}

	heelImage.src = heelImages[currentHeelIndex];
}

nextHeelImage();

const backImages = [
    "images/back/BackWhite.png",
    "images/back/BackBlack.png",
    "images/back/BackBlue.png",
    "images/back/BackLime.png",
    "images/back/BackRed.png",
    "images/back/BackGrey.png"
]

let currentBackIndex = -1;

function nextBackImage() {
	const backImage = document.getElementById("back-shoe");

	currentBackIndex++;

	if (currentBackIndex >= backImages.length) {
		currentBackIndex = 0;
	}

	backImage.src = backImages[currentBackIndex];
}

nextBackImage();


const soleImages = [
    "images/sole/SoleWhite.png",
    "images/sole/SoleBlack.png",
    "images/sole/SoleGrey.png"
]

let currentSoleIndex = -1;

function nextSoleImage() {
	const soleImage = document.getElementById("sole-shoe");

	currentSoleIndex++;

	if (currentSoleIndex >= soleImages.length) {
		currentSoleIndex = 0;
	}

	soleImage.src = soleImages[currentSoleIndex];
}

nextSoleImage();


// function dragStartHandler(ev) {
//     console.log("dragStart");
//     // Set the drag's format and data. Use the event target's id for the data
//     ev.dataTransfer.setData("text/plain", ev.target.id);
//     // Create an image and use it for the drag image
//     // NOTE: change "example.gif" to an existing image or the image will not
//     // be created and the default drag image will be used.
//     const img = new Image();
//     img.src = ["images/sole/SoleBlack.png"];
//     ev.dataTransfer.setDragImage(img, 10, 10);
//   }

//   function dragOverHandler(ev) {
//     console.log("dragOver");
//     ev.preventDefault();
//   }

//   function dropHandler(ev) {
//     console.log("Drop");
//     ev.preventDefault();
//     // Get the data, which is the id of the drop target
//     const data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }