import {SimObject} from './sim/simObject';
export class GameUI {
	/**
	 * Currently selected tool
	 * @type {string}
	 */
	activeToolId = 'select';
	/**
	 * @type {HTMLElement | null }
	 */
	selectedControl = document.getElementById('button-select');
	/**
	 * True if the game is currently paused
	 * @type {boolean}
	 */
	isPaused = false;

	get gameWindow() {
		return document.getElementById('render-target');
	}

	showLoadingText() {
		document.getElementById('loading').style.visibility = 'visible';
	}

	hideLoadingText() {
		document.getElementById('loading').style.visibility = 'hidden';
	}

	/**
	 *
	 * @param {*} event
	 */
	onToolSelected(event) {
		// Deselect previously selected button and selected this one
		if (this.selectedControl) {
			this.selectedControl.classList.remove('selected');
		}
		this.selectedControl = event.target;
		this.selectedControl.classList.add('selected');

		this.activeToolId = this.selectedControl.getAttribute('data-type');
	}

	/**
	 * Updates the info panel with the information in the object
	 * @param {SimObject} object
	 */
	updateInfoPanel(object) {
		const infoElement = document.getElementById('info-panel');
		if (object) {
			infoElement.style.visibility = 'visible';
			infoElement.innerHTML = object.toHTML();
		} else {
			infoElement.style.visibility = 'hidden';
			infoElement.innerHTML = '';
		}
	}
}

window.ui = new GameUI();
