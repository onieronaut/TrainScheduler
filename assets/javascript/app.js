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

//Retrieving and submitting user data to store in Firebase
$("#submit-button").on("click", function () {
    event.preventDefault();

    let name = $("#name").val().trim();
    let destination = $("#destination").val().trim();
    let firstTrain = $("#first-train").val().trim();
    let freq = $("#frequency").val().trim();

    db.ref().push({
        name: name,
        destination: destination,
        freq: freq,
        firstTrain: firstTrain
    })

    $("#name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequnecy").val("");

});

db.ref().on("child_added", function(snap) {

    name = snap.val().name;
    destination = snap.val().destination;
    freq = snap.val().freq;
    firstTrain = snap.val().firstTrain;

    let firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    let currentTime = moment();
    let diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    let tRemainder = diffTime % freq;
    let nextArrival = freq - tRemainder;
    let nextTrain = moment().add(nextArrival, "minutes").format("hh:mm A");


    let newRow = $("<tr>");
    let newName = $("<td>").text(name);
    let newDestination = $("<td>").text(destination);
    let newFreq = $("<td>").text(freq);
    let newArrival = $("<td>").text(nextArrival);
    let newMinAway = $("<td>").text(nextTrain);

    newRow.append(
        newName,
        newDestination,
        newFreq,
        newMinAway,
        newArrival
    );

    $(".new-row").append(newRow);

});
