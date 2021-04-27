
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
      apiKey: "AIzaSyC5YAO8D4Knxi0N116YjH6142KMDTAFHGc",
      authDomain: "mohisha-s-bot-wtjf.firebaseapp.com",
      databaseURL: "https://mohisha-s-bot-wtjf-default-rtdb.firebaseio.com",
      projectId: "mohisha-s-bot-wtjf",
      storageBucket: "mohisha-s-bot-wtjf.appspot.com",
      messagingSenderId: "813436354215",
      appId: "1:813436354215:web:26fc2e84b6f8f89e516582"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")
document.getElementById("user_name"). innerHTML = "Welcome "+user_name;

function addRoom()
{
      room = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding room name",
      });
      localStorage.setItem("room", room);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names = "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRN(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRN(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      window.location = "index.html";
}
