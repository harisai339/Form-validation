// Selecting error elements
const nameError = document.querySelector("#name-error");
const numberError = document.querySelector("#number-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");
let greenIcon = '<i class="fa-regular fa-circle-check"></i>';

// Regular expression for email validation
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Function to validate name
function validateName() {
	let name = document.querySelector("#nameInput").value;
	nameError.innerHTML =
		name.length === 0
			? "Name is required"
			: !name.match(/[a-zA-Z]+ [a-zA-Z]+/)
			? "Write last name"
			: greenIcon;
	return nameError.innerHTML.includes("fa-circle-check");
}

// Function to validate phone number
function validatePhone() {
	let number = document.querySelector("#numberInput").value;
	numberError.innerHTML =
		number.length === 0
			? "Number is required"
			: number.match(/[a-zA-Z]+/)
			? "Only digits please"
			: number.length !== 10
			? "Phone number should be 10 digits"
			: greenIcon;
	return numberError.innerHTML.includes("fa-circle-check");
}

// Function to validate email
function validateEmail() {
	let email = document.querySelector("#emailInput").value;
	emailError.innerHTML =
		email.length === 0
			? "Email is required"
			: !emailRegex.test(email)
			? "Invalid email "
			: greenIcon;
	return emailError.innerHTML.includes("fa-circle-check");
}

// Function to validate message
function validateMessage() {
	let message = document.querySelector("#messageInput").value;
	let required = 30;
	let left = required - message.length;
	messageError.innerHTML = left > 0 ? `${left} characters left` : greenIcon;
	return messageError.innerHTML.includes("fa-circle-check");
}

// Function to validate the entire form
function validateForm() {
	submitError.style.display = "block";
	if (
		!validateName()  ||
		!validatePhone() ||
		!validateEmail() ||
		!validateMessage()
	) {
		submitError.innerHTML = "Please fix errors to submit";
		setTimeout(() => (submitError.style.display = "none"), 3000);
		return false;
	}

	return true;
}
