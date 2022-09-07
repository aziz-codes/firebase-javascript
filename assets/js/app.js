


const icon = document.querySelector("#menu-icon");
// const icon2 = document.querySelector("#menu-icon2");
const sidebar = document.querySelector("#sidebar");
const peoples = document.querySelector("#peoples");
const users_data = document.getElementsByClassName("users");
const user_form = document.querySelector("#add-user");
const content = document.querySelector('#main-content');
const cards = document.querySelector('#cards');

try{
  const btnLogout = document.querySelector('#btn-logout');


  //logout function
  
  btnLogout.addEventListener('click',()=>{
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      localStorage.removeItem('user');
      window.location.replace('login.html');
    }
  })
}
catch(e){
  console.log(e);
}

// form inputs


//login button event listener














icon.addEventListener("click", () => {
  const visibility = sidebar.getAttribute("data-visible");
  if (visibility === "false") {
    sidebar.setAttribute("data-visible", true);    
    content.classList.add('move-content');
    cards.classList.add('undo-card-gap');
    cards.classList.remove('reduce-card-gap');
    // icon.style.color='black';
  } else {
    sidebar.setAttribute("data-visible", false);
    content.classList.remove('move-content');
    // icon.style.color='white';
    cards.classList.add('reduce-card-gap');
    cards.classList.remove('undo-card-gap');
  }
  
});

// icon2.addEventListener("click", () => {
//   const visibility = sidebar.getAttribute("data-visible");
//   if (visibility === "false") {
//     sidebar.setAttribute("data-visible", true);
//     //  icon.style.color='black';
//   } else {
//     sidebar.setAttribute("data-visible", false);
//     //  icon.style.color='white';
//   }
// });

const users = [
  {
    id: "1",
    name: "Diagnostic",
    profile: "../assets/images/photo.png",
    sort: "",
    sub_categories: 0,

  
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "2",
    name: "Headlight",
    profile: "../assets/images/photo.png",
    sort: '',
    sub_categories: 4,
   
  },
  {
    id: "3",
    name: "Tyres",
    profile: "../assets/images/photo.PNG",
    sort: '',
    sub_categories: 2,
   
  }
];
let data = "";
users.forEach((e) => {
  data += ` <tr class="user-card">
  <td>${e.id}</td>
  <td>${e.name}</td>
  <td><img src=${e.profile} height='50' width='40'/></td>
  <td>${e.sort}</td>
  <td>
  <button class="btn btn-info btn-sm">${e.sub_categories} subcategories</button>
  <button class="btn btn-primary btn-sm">Edit</button>
  <button class="btn btn-danger btn-sm">Delete</button>
  </td>
 
</tr>`;
});

peoples.innerHTML = data;
