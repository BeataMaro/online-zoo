const donation = document.getElementById("amount");
const donationOptions = document.querySelectorAll("input.donation-radio");
const amountForm = document.forms.amountForm;

amountForm.addEventListener("submit", (e) => e.preventDefault());

const changeDonationValue = (e) => {
    donation.placeholder = `${e.target.value}`;
}

const changeRadioOption = (e) => {
console.log(e.target.value);
const chosenRadio = Array.from(donationOptions).find(opt => opt.value === e.target.value)
chosenRadio.checked = true
}

for (let donationOpt of donationOptions) {
    donationOpt.addEventListener("click", (e) => changeDonationValue(e));
}
donation.addEventListener("change", (e) => changeRadioOption(e));