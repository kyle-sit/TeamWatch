const config = {
    apiKey: "AIzaSyCi4IbpqA-GvuIs9TJepvosTMbUGQ7Po_E",
    authDomain: "teamsnipelk.firebaseapp.com",
    databaseURL: "https://teamsnipelk.firebaseio.com",
    projectId: "teamsnipelk",
    storageBucket: "teamsnipelk.appspot.com",
    messagingSenderId: "941340425394"
};
firebase.initializeApp(config);
var db = firebase.database();

export {db};
    



