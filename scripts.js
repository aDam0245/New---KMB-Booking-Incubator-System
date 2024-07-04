// Function to pop up the HTML form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function resetForm() {
  document.getElementById("bookingForm").reset();
}



// Function to retrive information from HTML form 

const bookedSlots = [];

let bookingForm = document.getElementById("bookingForm").innerHTML;

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let date = document.getElementById("date").innerHTML;
  let time = document.getElementById("time").innerHTML;


});

console.log(bookedSlots);


// Creating the calender - Shamir

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'The Title',
        start: '2024-07-05',
        end: '2024-07-05'
      }
    ]
  });
  calendar.render();
});