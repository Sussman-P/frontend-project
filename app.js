let getCharacterBtn = $(".random-character");
let getResultDiv = $(".results");
let clearBtn = $("<button></button>");

clearBtn.text("Clear");

$("body").append(clearBtn);

getCharacterBtn.on("click", () => {
	let randNum = Math.floor(Math.random() * 1000 + 1);
	console.log(randNum);
	let info = '<div class="info-card">';
	$.get(`https://www.anapioficeandfire.com/api/characters/${randNum}`, (character) => {
		if (character.died === "") {
			character.died = "not dead...yet";
		}
		if (character.born === "") {
			character.born = "no date set";
		}
		if (character.titles.length === 0) {
			character.titles = ["no titles"];
		}
		if (character.playedBy === [""]) {
			character.playedBy = ["Not played by anyone in the show"];
		}

		console.log(character.titles.length);
		info += `<br>Name: ${character.name}</br>`;
		info += `<br>Gender: ${character.gender}</br>`;
		info += `<br>Born: ${character.born}</br>`;
		info += `<br>Died: ${character.died}</br>`;
		info += `<br>Titles: ${character.titles}</br>`;
		info += `<br>Played By: <a href="https://www.google.com/search?q=${character.playedBy}">${character.playedBy}</a></br>`;
		$(getResultDiv).html(info);
	});
});

clearBtn.on("click", () => {
	getResultDiv.empty();
});
