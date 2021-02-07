//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAiRd9YX8rKwHFAwohgCM6te89_4DzN5W0",
      authDomain: "school-chat-app-5ef4f.firebaseapp.com",
      databaseURL:"https://school-chat-app-5ef4f-default-rtdb.firebaseio.com/",
      projectId: "school-chat-app-5ef4f",
      storageBucket: "school-chat-app-5ef4f.appspot.com",
      messagingSenderId: "356021365223",
      appId: "1:356021365223:web:e19c2cdfa195f7abf7b542",
      measurementId: "G-CETKD2PY2H"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }


getData();
