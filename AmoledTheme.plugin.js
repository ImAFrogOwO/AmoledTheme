/**
 * @name Amoled Theme
 * @description Enable/Disable Androids Dark Dark Mode.
 * @author Bravo#4061
 * @version 1.0.0
 */

module.exports = class {
	getName() { return "Amoled Theme"; }

	start() {

		document.body.classList.value = ("theme-amoled");
	}

	stop() {

		document.body.classList.value = ("theme-dark");

    }

};
