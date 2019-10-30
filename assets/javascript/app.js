// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfZQpUuTrM7FnAr_Jlzzpt6xIH_E18mhA",
    authDomain: "train-scheduler-f6730.firebaseapp.com",
    databaseURL: "https://train-scheduler-f6730.firebaseio.com",
    projectId: "train-scheduler-f6730",
    storageBucket: "train-scheduler-f6730.appspot.com",
    messagingSenderId: "346896576830",
    appId: "1:346896576830:web:251cbe6e94b1e4ae847c6f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.database();

$("#submit-button").on("click", function () {
    event.preventDefault();

    let name = $("#name").val().trim();
    let destination = $("#destination").val().trim();
    let firstTrain = $("#first-train").val().trim();
    let freq = $("#frequency").val.trim();
  })