var firebaseConfig = {
apiKey: "AIzaSyD3HPVSzDs0WUBbEG-tbG-J9AUO4moFoRc",
  authDomain: "lets-chat-web-app-91271.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-91271-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-91271",
  storageBucket: "lets-chat-web-app-91271.appspot.com",
  messagingSenderId: "31281579056",
  appId: "1:31281579056:web:9486989d40197ab25c19f5"
};

firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

function addRoom(){
  room_names = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  
  localStorage.setItem("room_name", room_name);
  
  window.location = "chat_page.html";
  
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

  console.log("Room Name - " + Room_names);

  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

  document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName(name){
console.log("we are redirecting to" + name);

localStorage.setItem("room_name", name);

window.location = "chat_page.html";
}