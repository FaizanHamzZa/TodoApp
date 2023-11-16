let todoList = [
  {
    item: 'Buy Milk', 
    dueDate: '01/01/2023' 
  },
  {
    item: 'Go to College', 
    dueDate: '01/01/2023'
  } 
];

todoDisplay();

function addToDo(){
      let todoItem = '';
      
    let inputElement = document.querySelector('#todo-input');
    todoItem = inputElement.value;
    let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;

          // Check if input or date element is empty
      if (todoItem === '') {
        inputElement.classList.add('error');
      } else {
        inputElement.classList.remove('error');
      }

      if (todoDate === '') {
        dateElement.classList.add('error');
      } else {
        dateElement.classList.remove('error');
      }

      if(todoItem === '' || todoDate === ''){
          return
        }else{

          todoList.push({item: todoItem, dueDate: todoDate });
          inputElement.value = '';
          dateElement.value = '';
          todoDisplay();
        }
  }

function todoDisplay(){
  let newHtml = "";
  
  let displayContainer = document.querySelector('.todo-container');
  let deleteBtn = document.querySelector('#todo-container');
  displayContainer.innerText = '';
 for(let i= 0; i<todoList.length; i++){

  let Item = todoList[i].item;
  let dueDate = todoList[i].dueDate;
  newHtml += 
            `
              <span class="span-txt">${Item}</span>
              <span class="span-txt">${dueDate}</span>
              <button class="btn-delete" onclick="todoList.splice(${i}, 1); todoDisplay();">Delete</button> 
              `
            }
          displayContainer.innerHTML = newHtml;
          }
