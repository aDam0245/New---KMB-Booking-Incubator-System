// Function to pop up the HTML form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


// Function to retrive information from HTML form 

const bookedSlots = [];

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById();
});

// Creating the calender

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

var calendar = new Calendar(calendarEl, {
  events: [
  { // this object will be "parsed" into an Event Object
      title: 'The Title', // a property!
      start: '2024-06-17', // a property!
      end: '2024-06-17' // a property! ** see important note below about 'end' **
  }
  ]
  })