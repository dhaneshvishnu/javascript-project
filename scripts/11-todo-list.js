const todoList = [{
  name: 'make dinner',
  dueDate: '2023-12-22'
}, {
  name: 'wash car',
  dueDate: '2023-12-22'
}]; 

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
    
      const todoObject = todoList[i];
    // const name = todoObject.name; (Destructring)
    // const dueDate = todoObject.dueDate; (Destructring)
      const {name, dueDate} = todoObject;

      let html = `<div>${name}</div> 
        <div>${dueDate}</div> 
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class ="delete-todo-button" >Delete</button> 
      `;

      todoListHTML += html;

      // console.log(todoListHTML);
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const  dueDate = dateInputElement.value;

 todoList.push({
  // name: name, (shorthand property)
  // dueDate: dueDate (shorthand property)
  name,
  dueDate
});
//  console.log(todoList);

 inputElement.value = '';

 renderTodoList();

}