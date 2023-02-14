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
    
    room_name = localStorage.getItem("room_name");

    function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
            
            document.getElementById("msg").value = "";
            
            
            }
            
            function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                     firebase_message_id = childKey;
                     message_data = childData;
            //Start code
            
            //End code
                  } });  }); }
            getData();
    