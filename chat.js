var firebaseConfig = {
    apiKey: "AIzaSyDNFDE3DuEhNSFv_5UJpX6wxMqsWkSLsiY",
    authDomain: "kwitter-2345b.firebaseapp.com",
    databaseURL: "https://kwitter-2345b-default-rtdb.firebaseio.com",
    projectId: "kwitter-2345b",
    storageBucket: "kwitter-2345b.appspot.com",
    messagingSenderId: "662071087725",
    appId: "1:662071087725:web:f07f0bd7de93ee42276564"
  };
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



