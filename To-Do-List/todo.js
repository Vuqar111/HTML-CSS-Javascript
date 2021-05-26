const inputbox = document.querySelector('.inputField input');
const addbtn = document.querySelector('.inputField button');
const todolist = document.querySelector('.todoList');
const listnumber = document.querySelector('.number');
const deletetasks = document.querySelector('.footer button');

inputbox.onkeyup = () => {
 let user = inputbox.value;
 if(user.trim() != 0) {
     addbtn.classList.add("active");
 }
 else {
     addbtn.classList.remove("active");
 }
}

addbtn.onclick = ()=> {
  let getlocalstorage = localStorage.getItem("New Todo");
  let user = inputbox.value;
  if(getlocalstorage == null) {
      listArr = [];
  }
  else {
     listArr= JSON.parse(getlocalstorage);
  }
  listArr.push(user);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  display();
}

function display() {
    let getlocalstorage = localStorage.getItem("New Todo");
    listnumber.textContent = listArr.length;
     if(listArr.length > 0) {
         deletetasks.classList.add("active");
     }
     else {
         deletetasks.classList.remove("active");
     }

    if(getlocalstorage == null) {
        listArr = [];
    }
    else {
       listArr= JSON.parse(getlocalstorage);
    }
   let newTag = '';
   listArr.forEach((element, index ) => {
     newTag += `<li> ${element} <span  onclick="remove(${index})"  class="icon"><i class="fas fa-trash"></i></span></li>`
   });
   todolist.innerHTML = newTag;
   inputbox.value = "";
}


//Delete Tasks

function remove(index) {
    let getlocalstorage = localStorage.getItem("New Todo");
    listArr= JSON.parse(getlocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    display();
}

//Delete All tasks

deletetasks.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    display();
}


