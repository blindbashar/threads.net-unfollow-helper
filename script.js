// Use: Open the 'Following' menu from your Threads profile,
//		paste & run this script in the developer console,
//		then manually click through the stack of 'Unfollow' bubbles
//		and scroll down to load a new batch of profiles.
//		Repeat.
async function clickButtonsWithDelay(selector, textToMatch) {
	// Select all button elements from the DOM
	let buttons = document.querySelectorAll(selector);
	for (let button of buttons) {
		// See if the button matches our text
		if (button.textContent.includes(textToMatch)) {
			button.click();
		}
	}
}

// Run the script, clicking all 'Following' buttons on the page.
await clickButtonsWithDelay('div[tabindex]:not([tabindex="-1"])', 'Following');
