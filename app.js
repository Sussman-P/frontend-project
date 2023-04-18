let getCharacterBtn = $(".snow");
let getResultDiv = $(".results");

getCharacterBtn.on("click", () => {
	let info = '<div class="info-card">';
	$.get("https://www.anapioficeandfire.com/api/characters/583", (character) => {
		console.log(character.name);
		if (character.died === "") {
			character.died = "not dead...yet";
		}
		info += `<br>Name: ${character.name}</br>`;
		info += `<br>Gender: ${character.gender}</br>`;
		info += `<br>Born: ${character.born}</br>`;
		info += `<br>Died: ${character.died}</br>`;
		info += `<br>Titles: ${character.titles}</br>`;
		info += `<br>Played By: <a href="https://www.google.com/search?q=kit+harington&sxsrf=APwXEdcTsxsupDH9vio-EQOpObiAgDwReg%3A1681838224943&source=hp&ei=kNA-ZLiJN6T4kPIPotOE-Ac&iflsig=AOEireoAAAAAZD7eoOCJSQ7YtvrnJ28kzUX5av4ALPWl&gs_ssp=eJzj4tLP1TewLDPJyCs0YPTizc4sUchILMrMSy_JzwMAcskI9A&oq=kit+h&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCC4QsQMQigUQQzIHCAAQigUQQzIICAAQgAQQsQMyCggAEIoFELEDEEMyCAgAEIAEELEDMggILhCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CAgAEIoFEJECOg4ILhCABBCxAxCDARDUAjoLCC4QxwEQ0QMQgAQ6BQguEIAEOhAILhCKBRCxAxDHARDRAxAKOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6CwgAEIoFELEDEIMBOgsILhCvARDHARCABDoGCAAQFhAeUABYihFgtRdoAXAAeACAAWKIAYYEkgEBNpgBAKABAQ&sclient=gws-wiz">${character.playedBy}</a></br>`;
		$(getResultDiv).html(info);
	});
});
