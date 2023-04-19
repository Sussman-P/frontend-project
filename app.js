let getCharacterBtn = $(".random-character");
let getHouseBtn = $(".rand-house");
let getBookBtn = $(".rand-book");
let getCharResultDiv = $(".char-results");
let getHouseResultDiv = $(".house-results");
let getBookResultDiv = $(".book-results");
let charClearBtn = $(".char-clear-btn");
let houseClearBtn = $(".house-clear-btn");
let bookClearBtn = $(".book-clear-btn");
houseClearBtn.hide();
charClearBtn.hide();
bookClearBtn.hide();

// Generate Random Character Facts
getCharacterBtn.on("click", () => {
	let randNum = Math.floor(Math.random() * 2138 + 1);
	console.log(randNum);
	let info = '<div class="char-card">';
	$.get(`https://www.anapioficeandfire.com/api/characters/${randNum}`, (character) => {
		if (character.died === "") {
			character.died = "not dead...yet";
		}
		if (character.born === "") {
			character.born = "no date set";
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

		for (let actor of character.playedBy) {
			console.log(actor.length === 0);
			if (actor.length === 0) {
				info += `<br><strong>Played by</strong>: Not played by anyone in the show!</br>`;
			} else {
				info += `<br><strong>Played By</strong>: <a href="https://www.google.com/search?q=${character.playedBy}">${character.playedBy}</a></br>`;
			}
		}
		info += "<br></br>";

		info += "</div>";
		charClearBtn.show();
		$(getCharResultDiv).html(info);
	});
});

// Generate Random house Facts
getHouseBtn.on("click", () => {
	let randNum = Math.floor(Math.random() * 444 + 1);
	console.log(randNum);
	let info = '<div class="house-card">';
	$.get(`https://www.anapioficeandfire.com/api/houses/${randNum}`, (house) => {
		info += `<br><strong>House Name</strong>: ${house.name}</br>`;
		if (house.region === "") {
			info += `<br><strong>Region</strong>: There is no Region associated with this house!`;
		}
		info += `<br><strong>Region</strong>: ${house.region}</br>`;
		houseClearBtn.show();
		info += "<br></br>";
		info += "</div>";
		$(getHouseResultDiv).html(info);
	});
});

//Random Book info
getBookBtn.on("click", () => {
	let randNum = Math.floor(Math.random() * 12 + 1);
	console.log(randNum);

	let info = '<div class="book-card">';
	$.get(`https://www.anapioficeandfire.com/api/books/${randNum}`, (book) => {
		bookClearBtn.show();
		info += `<br><a href='https://www.google.com/search?q=GOT%20${book.name}'>${book.name}</a></br>`;
		info += "<br></br>";

		info += "</div>";

		$(getBookResultDiv).html(info);
	});
});

charClearBtn.on("click", () => {
	getCharResultDiv.empty();
	charClearBtn.hide();
});

houseClearBtn.on("click", () => {
	getHouseResultDiv.empty();
	houseClearBtn.hide();
});

bookClearBtn.on("click", () => {
	getBookResultDiv.empty();
	bookClearBtn.hide();
});
