let getCharacterBtn = $(".random-character");
let getResultDiv = $(".results");
let clearBtn = $("<button></button>");

clearBtn.text("Collapse");

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

		// console.log(character.titles.length);
		info += `<br><strong>Name</strong>: ${character.name}</br>`;
		info += `<br>Gender: ${character.gender}</br>`;
		info += `<br>Born: ${character.born}</br>`;
		info += `<br>Died: ${character.died}</br>`;
		info += `<br>Title: `;

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
				info += `<br>Played by: Not played by anyone in the show!</br>`;
			} else {
				info += `<br>Played By: <a href="https://www.google.com/search?q=${character.playedBy}">${character.playedBy}</a></br>`;
			}
		}
		$(getResultDiv).html(info);
	});
});

clearBtn.on("click", () => {
	getResultDiv.empty();
});
