function submitForm() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const numSeats = document.getElementById('numSeats').value;
    const numAttendees = document.getElementById('numAttendees').value;

    // Perform actions with the form data (e.g., send to a server)

    // For demonstration purposes, display the form data in the console
    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Number of Seats:", numSeats);
    console.log("Number of Attendees:", numAttendees);

    // You can add further actions here, such as sending data to a server or redirecting the user
}

function cancelForm() {
    // Reset form fields or navigate away, depending on your requirements
    document.getElementById('eventUpdateForm').reset();
}