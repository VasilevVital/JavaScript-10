/**
 * Created by joshua on 10/29/15.
 */


window.onload = function () {
    // My tasks in JS
    var tasks = [];

    // Select the list, button, and the text elements
    var taskForm = document.forms[0];
    var taskList = document.getElementById('list');

    // When you click the button, add the task, and re-render all tasks


    taskForm.onsubmit = function () {
        //form elements
        var completed = taskForm.elements['completed'];
        var due = taskForm.elements['due'];
        var text = taskForm.elements['text'];

        // make a new task and fill the values
        var tempTask = {
            text:text.value,
            due:due.value,
            completed:completed.checked
        };

        // add to the JS tasks
        tasks.push(tempTask);

        // re-render all tasks
        renderTasks();

        return false;
    };

    var renderTasks = function () {
        // re-render the tasks
        taskList.innerHTML = "";

        for (var i = 0; i < tasks.length; i++) {
            // create <li>
            var li = document.createElement('li');

            if (tasks[i].completed) {
                li.className = 'completed';
            }

            // add the text to the <li>
            li.innerText = tasks[i].text + ' (due on ' + tasks[i].due + ')';
            // add the <li> to the <ul>
            taskList.appendChild(li);
        }
    };

};