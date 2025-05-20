const buttonArray = document.querySelectorAll("button");
const delay = ms => new Promise(res => setTimeout(res, ms));
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(button.id);
	});
    button.addEventListener('click', async () => {
		button.innerHTML = "Copied!";
		await delay(4000);
		button.innerHTML ="Copy to clipboard 📋";
	});
});
