//YOUR FIREBASE LINKS
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

  username = localStorage.getItem("user_name");
  roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(firebase_message_id);
       console.log(message_data);
       Name = message_data['name'];
       Msg = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4>"+Name+"<img src='tick.png' class='user_tick'></h4>";
       message_with_tag = "<h4 class='message_h4'>"+Msg+"</h4>";
       like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
       row = name_with_tag+message_with_tag+like_button+span_with_tag;
       document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name : username,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}
function log_out()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function update_like(message_id)
{
    console.log("Clicked on button - "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_like);
    firebase.database().ref(roomname).child(message_id).update({
          like: update_likes
    });
}