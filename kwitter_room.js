
var firebaseConfig = {
      apiKey: "AIzaSyD7G0VO6RAtaHvZHK-cdhYbrPr3SWyxBdk",
      authDomain: "huwitter.firebaseapp.com",
      databaseURL: "https://huwitter-default-rtdb.firebaseio.com",
      projectId: "huwitter",
      storageBucket: "huwitter.appspot.com",
      messagingSenderId: "567890972638",
      appId: "1:567890972638:web:f7a51f34ac1aa9aa24574f",
      measurementId: "G-DEGX1DH2P2"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       }); }); }
      

      
      
getData();
function addRoom() { room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html"; }
function redirectToRoomName(name) 
{ console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; }
 
        
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

