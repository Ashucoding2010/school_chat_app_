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

document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom() {

      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            Day: "Saturday",
            date: "6-2-2021"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "School chat app.html";







}
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + Room_names);
                  row = "<div class ='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

                  document.getElementById("output").innerHTML += row



                  //End code
            });
      });
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "School chat app.html";


}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


getData();