// Getting all the elements needed.
let getCharacterBtn = $(".random-character");
let getHouseBtn = $(".rand-house");
let getBookBtn = $(".rand-book");
let getCharResultDiv = $(".char-results");
let getHouseResultDiv = $(".house-results");
let getBookResultDiv = $(".book-results");
let charClearBtn = $(".char-clear-btn");
let houseClearBtn = $(".house-clear-btn");
let bookClearBtn = $(".book-clear-btn");

// Hiding the clear button.
houseClearBtn.hide();
charClearBtn.hide();
bookClearBtn.hide();

// Generate Random Character Facts
function getCharacterInfo() {
	let randNum = Math.floor(Math.random() * 2138 + 1);
	console.log(randNum);

	$.get(`https://www.anapioficeandfire.com/api/characters/1935`, (character) => {
		let info = '<div class="char-card">';
		if (character.died === "") {
			character.died = "(not dead...yet)";
		}
		if (character.born === "") {
			character.born = "(no date set)";
		}

		// console.log(character.titles.length);
		if (character.name === "") {
			alert("This character has no name, so we used Aliases!");
			for (let alias of character.aliases) {
				character.name = alias;
				info += `<br><strong>Aliases</strong>: ${alias}</br>`;
			}
		} else {
			info += `<br><strong>Name</strong>: ${character.name}</br>`;
		}
		info += `<br><strong>Gender</strong>: ${character.gender}</br>`;
		info += `<br><strong>Born</strong>: ${character.born}</br>`;
		info += `<br><strong>Died</strong>: ${character.died}</br>`;
		info += `<br><strong>Title</strong>: `;

		for (let title of character.titles) {
			if (title.length === 0) {
				info += `Does not have any titles!`;
			} else {
				info += `"${title}" `;
			}
		}
		info += `</br>`;

		info += `<br><strong>Played By</strong>: `;
		for (let actor of character.playedBy) {
			console.log(actor.length === 0);
			if (actor.length === 0) {
				info += ` Not played by anyone in the show!</br>`;
			} else {
				info += `<a href="https://www.google.com/search?q=GoT%20${character.playedBy}">${character.playedBy} </a></br>`;
				break;
			}
		}
		info += "<br></br>";

		info += "</div>";

		//console.log(info);
		charClearBtn.show();
		$(getCharResultDiv).html(info);
	});
}

// Generate Random house Facts
function getHouseInfo() {
	let randNum = Math.floor(Math.random() * 444 + 1);
	console.log(randNum);
	$.get(`https://www.anapioficeandfire.com/api/houses/${randNum}`, (house) => {
		houseClearBtn.show();
		let info = '<div class="house-card">';
		info += `<br><strong>House Name</strong>: ${house.name}</br>`;
		if (house.region === "") {
			info += `<br><strong>Region</strong>: There is no Region associated with this house!`;
		} else {
			info += `<br><strong>Region</strong>: ${house.region}</br>`;
		}
		info += "<br></br>";
		info += "</div>";
		$(getHouseResultDiv).html(info);
	});
}

//Random Book info
function getBookInfo() {
	let randNum = Math.floor(Math.random() * 12 + 1);
	console.log(randNum);

	$.get(`https://www.anapioficeandfire.com/api/books/${randNum}`, (book) => {
		let info = '<div class="book-card">';
		bookClearBtn.show();
		info += `<br><strong>Book: </strong><a href='https://www.google.com/search?q=GOT%20${book.name}'>${book.name}</a></br>`;
		info += "<br></br>";
		info += "</div>";
		$(getBookResultDiv).html(info);
	});
}

// Click Events
getCharacterBtn.on("click", () => {
	getCharacterInfo();
});

// Click Events
getHouseBtn.on("click", () => {
	getHouseInfo();
});

// Click Events
getBookBtn.on("click", () => {
	getBookInfo();
});

// Clear Button Events
charClearBtn.on("click", () => {
	getCharResultDiv.empty();
	charClearBtn.hide();
});

// Clear Button Events
houseClearBtn.on("click", () => {
	getHouseResultDiv.empty();
	houseClearBtn.hide();
});

// Clear Button Events
bookClearBtn.on("click", () => {
	getBookResultDiv.empty();
	bookClearBtn.hide();
});
