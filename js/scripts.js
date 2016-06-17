var mainUser
    //event en parametre de fonction, evite le renvoie du formulaire
    //et empêche le rechargement de la page
$("#connect").click(function (event) {
    event.preventDefault();
    //Comparaison des credentials : mainUser est ma variable,
    //User est ma Classe, new User crée un utilisateur avec en //paramètres les valeur des champs saisis pour les comparer
    //avec les valeurs de l'objet généré par la fonction connect()
    mainUser = new User($("#username").val(), $('#password').val());
    //Si ils correspondent OK connecte l'utilisateur
    if (mainUser.connect() == true) {
    
        $('#main').fadeIn()
        $('#connection').fadeOut()
    } else {
        alert("Mauvais mot de passe, putain !")
    }
})

$("#createBtn").click(function (event) {
    event.preventDefault();
    $('#writeNote').fadeIn()
    $('#createBtn').fadeOut()
})

var note
$("#addNote").click(function () {
    mainUser.addNote(note);
    note = new Note($('#title').val(), $('#content').val());
    $('#main').fadeIn()
    $('#writeNote').fadeOut()
})

//mainUser.addNote(note);
//mainUser.notes;
//mainUser.notes = [{note},{note},{note}]
//$("li").click(function(){
//var position = $("li").index(this);
//mainUser.notes[position]=newNote("nouveau","contenu")
//})