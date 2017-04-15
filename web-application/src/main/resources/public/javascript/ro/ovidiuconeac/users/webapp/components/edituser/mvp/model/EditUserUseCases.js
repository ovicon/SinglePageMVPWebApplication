/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserUseCases(presenter) {

    var db = firebase.database();

    EditUserUseCases.prototype.update = function (id, name, age, sex) {
        var ref =  db.ref('users/' + id);
       ref.set({
            name: name,
            age: age,
            sex: sex
        });
    }

    EditUserUseCases.prototype.remove = function (id) {
        db.ref('users/' + id).set(null);
        console.log('users/' + id);
    }
}