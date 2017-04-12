/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserUseCases() {

    NewUserUseCases.prototype.update = function (name, age, sex) {
        // Creates a user with an unique ID
        firebase.database().ref('users').push({
            name: name,
            age: age,
            sex: sex
        });
    }
}