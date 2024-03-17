// Get values from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the values for each Parameter in the URL
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const positionTitle = urlParams.get('positionTitle');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const membershipLevel = urlParams.get('membershipLevel');
const businessName = urlParams.get('businessName');
const commentsAdded = urlParams.get('commentsAdded');
const currentDatetime = urlParams.get('currentDatetime');

// Function to check if a value is empty and return "N/A" in that case
const formatValue = (value) => {
  return value !== '' ? value : 'N/A';
};

// Use the values
const newMember = document.getElementById("newMember")

newMember.innerHTML = `
        <form class="gridAreaContent" style="padding: 20px; background: linear-gradient(to right, #129ecc, #bdddf0, #129ecc);
        border-radius: 2px; box-shadow: 3px 3px 15px #034c64; word-wrap: break-word; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px;">
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="firstNameResponse"><u>Name</u>:</label>
            <span>${formatValue(firstName)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="lastNameResponse"><u>Last Name</u>:</label>
            <span>${formatValue(lastName)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="positionTitleResponse"><u>Position</u>:</label>
            <span>${formatValue(positionTitle)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="emailResponse"><u>Email</u>:</label>
            <span>${formatValue(email)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="phoneResponse"><u>Phone</u>:</label>
            <span>${formatValue(phone)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="membershipLevelResponse"><u>Membership Level</u>:</label>
            <span>${formatValue(membershipLevel)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="businessNameResponse"><u>Business Name</u>:</label>
            <span>${formatValue(businessName)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="commentsAddedResponse"><u>Additional comments</u>:</label>
            <span>${formatValue(commentsAdded)}</span>
            <label style="display: flex; align-items: center; font-weight: bold; color: #fff;" id="currentDatetimeResponse"><u>Registered at</u>:</label>
            <span>${formatValue(currentDatetime)}</span>
        </form>`;


// Greeting
const joinedMember = document.getElementById("joinedMember");
joinedMember.innerHTML = `${formatValue(firstName)}`;
