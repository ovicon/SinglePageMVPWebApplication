"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function UsersView() {

    var loadingUsers = $('#loading-users');
    var users = $('#users');
    var rows = $('.row'); // add listeners

    var db = firebase.database();
    /*db.ref('/users/').once('value').then(function(snapshot) {
        console.log(snapshot.toString());
    });*/

    db.ref('/users/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {

            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childKey + ' ' + childData.name + ' ' + childData.age + ' ' + childData.sex);

            var row = '<br>' +
                '<div class=\"row\" id=\"' + childKey + '\"> ' +
                    '<div class=\"column\" id=\"name\">' + childData.name + '</div> ' +
                    '<div class=\"column\" id=\"sex\">' + childData.sex + '</div> ' +
                    '<div class=\"column\" id=\"age\">' +childData.age + '</div> ' +
                '</div>';

            users.append(row);







        });

        loadingUsers.hide();
    });

    UsersView.prototype.editUser = function(row) {
        var name = row.find('#name');
        var age = row.find('#age');
        var sex = row.find('#sex');
        alert(name + ' ' + age + ' ' + sex);
    }

}