var User = function (username, password) {
    this.username = username;
    this.password = password;
    this.age;
    this.notes = [];
}

User.getBddUsersByName = function (username) {
    for (var i = 0; i < userList.length; i++) {
        var currentUser = userList[i];
        if (currentUser.username == username) {
            return currentUser;
        }
    }
    return false;
}

User.prototype.connect = function () {
    var bdd_user = User.getBddUsersByName(this.username);
    if (bdd_user != false) {
        console.log(bdd_user, this)
        if (bdd_user.password == this.password) {
            this.age = bdd_user.age;
            this.notes = bdd_user.notes;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

User.prototype.addNote = function (note) {
    this.notes.push(note)
    
}