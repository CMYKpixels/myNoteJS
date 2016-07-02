var mainUser
$('#main').slideUp().hide();
$('#writeNote').slideUp().hide();
$('#editnote').slideUp().hide();

$("#connect").click(function (event) {
    //event en parametre de fonction, evite le renvoie du formulaire
    //et empêche le rechargement de la page
    event.preventDefault();
    //Comparaison des credentials : mainUser est ma variable,
    //User est ma Classe, new User crée un utilisateur avec en //paramètres les valeur des champs saisis //pour les comparer
    //avec les valeurs de l'objet généré par la fonction connect()
    var username = $("#username").val();
    var password = $("#password").val();
    mainUser = new User(username, password);
    //Si ils correspondent OK connecte l'utilisateur
    mainUser.connect();

    if (mainUser.connect() == true) {
        $('#connection').slideUp().hide(1000);
        $('#main').slideDown().show(1000);
    } else {
        $('.error').fadeIn().delay(500).addClass('alert alert-warning').html('Please enter a valid username or password');
    }
});

$("#createBtn").click(function (event) {
    event.preventDefault();
    $('#notes').fadeOut().hide(500);
    $('#writeNote').slideDown().show(1000);
    $('#createBtn').slideUp().hide(1000);
});

$("#addNote").click(function (event) {
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();

    mainUser.addNote(title, content);

    $('#writeNote').slideUp().hide(1000);
    $('#notes').slideDown().show(1000);
    $('#createBtn').slideDown().show(1000);

    $('ul').append('<li class="clickable"><div class="title">'+title+'</div><p class="content">'+content+'</p></li>');

});

//mainUser.addNote(note);
//mainUser.notes;
//mainUser.notes = [{note},{note},{note}]
//$("li").click(function(){
//var position = $("li").index(this);
//mainUser.notes[position]=addNote("nouveau","contenu")
//})

//function (data, textStatus) {
//$.each(data, function (key, obj) {
//console.log(obj);
//$("#usersRow").append(
//'<div class="thumbnail">' +
//'<img src="'+obj.value+'" class="">' +
//'<div class="caption"><h4 class="">'+obj.user+'</h4>' +
//'<p class="">'+obj.description+'</p>' +
//'<a href="#" class="btn btn-default btn-xs" role="button">'+obj.ID+'</a>' +
//'</div></div></div>');