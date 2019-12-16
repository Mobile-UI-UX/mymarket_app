$( document ).ready(function() {
    console.log( "ready!" );
    // alert("sd")

    var firebaseConfig = {
        apiKey: "AIzaSyDHHkugC42iITZ2JSK0IbKo3Q4DPtniKkg",
        authDomain: "mymart-17ade.firebaseapp.com",
        databaseURL: "https://mymart-17ade.firebaseio.com",
        projectId: "mymart-17ade",
        storageBucket: "mymart-17ade.appspot.com",
        messagingSenderId: "338361233948",
        appId: "1:338361233948:web:e133b7285a6595bcb865d9",
        measurementId: "G-NFFZBW2LH6"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      
});