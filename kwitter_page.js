//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyARs59_fOTXbbsRilpnuwRtlZHKJcHH8JU",
      authDomain: "classtest-baf83.firebaseapp.com",
      databaseURL: "https://classtest-baf83-default-rtdb.firebaseio.com",
      projectId: "classtest-baf83",
      storageBucket: "classtest-baf83.appspot.com",
      messagingSenderId: "594633820913",
      appId: "1:594633820913:web:09d3e9ac9957e32933b750",
      measurementId: "G-62GWGJTZDR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
//End code
      } });  }); }
getData();

function back()
{
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_room.html");
}