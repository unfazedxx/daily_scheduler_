
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.


let saveBtnEl= $('#saveBtn')
let timeBlockID=$('#time-blockID')
//showing the current date and time in the header
let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM, D, YYYY, h:MM a'));

  // showing the previous local storage items when the page reloads. (this was not working)
window.onload=function(){
  localStorage.setItem(timeBlockID, ('userInputText').val());
}
//start of function
$(function () {
//first function linked to the save button class which allows the text input to be saved within local storage when save is clicked
$('.saveBtn').on('click', function () {
  let timeBlock = $(this).closest('#time-blockID');
  //get id for time block//
  let timeBlockID= timeBlock.attr('id');
  //gather user input from text area (html file)
  let userInput= timeBlock.find('#userInputText').val()
  //save to local storage
  localStorage.setItem(timeBlockID, ('userInputText'))
  //alert user text input was saved
  alert('Saved')
});
    let currentTime= new Date().getHours();
    $('.time-block').each( function(){
      let timeBlockHour = parseInt($(this).attr("id").split("-")[2]);
      $('.past').removeClass('past present future');
      //if statement to add a new class if the current class is not accurate based on past present future, compared to the current time
      if(timeBlockHour < currentTime){
        $(this).addclass('past')
      }
      else if (timeBlockHour === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
      });  
});
