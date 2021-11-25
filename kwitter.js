function addUser(){
    user_name=document.getElementById("user_name").value;
   // user_password=document.getElementById("password").value;
    localStorage.setItem("user_name", user_name);
   // localStorage.setItem("password", user_password);
    window.location="Kwitter_room.html";
}