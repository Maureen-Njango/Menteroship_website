// Function called while clicking add button
function add_item() {
 
    // Getting box and ul by selecting id;
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){
   
        // Creating element and adding value to it
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
   
        // Adding li to ul
        list_item.appendChild(make_li);
   
        // Reset the value of box
        item.value=""
         
        // Delete a li item on click 
        make_li.onclick = function(){
          this.parentNode.removeChild(this);
        }
   
    }
    else{
   
      // Alert msg when value of box is "" empty.
      alert("plz add a value to item");
    }
   
  }



//*Goals 

  function addTask() {
    var taskInput = document.getElementById('taskInput'); // getting the input field
    var task = taskInput.value; // getting the value from the input field
    if (task !== "") { // check if the input is not empty
        var taskList = document.getElementById('taskList'); // getting the div where we will append the task
        var newTask = document.createElement('p'); // create new p element
        newTask.classList.add('task'); // add class to new p element
        newTask.innerHTML = task + "<button onclick='markAsDone(this)'>Done</button>"; // adding the task to the new p element
        taskList.appendChild(newTask); // appending the new task to the div
        taskInput.value = ""; // reset the value of the input field
    } else {
        alert('Input field is empty. Please enter your task/goal.');
    }
}
function markAsDone(btn) {
    var task = btn.parentNode; // get the parent node of the button which is the p element
    task.classList.add('done'); // add class to the p element
}




function taskAdd() {
  var inputTask = document.getElementById('inputTask'); // getting the input field
  var task = inputTask.value; // getting the value from the input field
  if (task !== "") { // check if the input is not empty
      var taskList = document.getElementById('listtask'); // getting the div where we will append the task
      var newTask = document.createElement('p'); // create new p element
      newTask.classList.add('task'); // add class to new p element
      newTask.innerHTML = task + "<button onclick='markAsDone(this)'>Done</button>"; // adding the task to the new p element
      taskList.appendChild(newTask); // appending the new task to the div
      inputTask.value = ""; // reset the value of the input field
  } else {
      alert('Input field is empty. Please enter your task/goal.');
  }
}
function markAsDone(btn) {
  var task = btn.parentNode; // get the parent node of the button which is the p element
  task.classList.add('done'); // add class to the p element
}


