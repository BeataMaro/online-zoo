const donation = document.getElementById("amount");


const donationOptions = document.querySelectorAll("input.donation-radio");

const changeDonationValue = (e) => {
    donation.placeholder = `$${e.target.value}`;
}

for (let donationOpt of donationOptions) {

    donationOpt.addEventListener("click", (e) => changeDonationValue(e));
}