/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserPresenter(view) {

    var model = new EditUserUseCases(this);

    EditUserPresenter.prototype.update = function (id, name, age, sex) {
        model.update(id, name, age, sex)
        view.saveSuccessful();
        view.showUsers();
    }

    EditUserPresenter.prototype.remove = function (id) {
        model.remove(id)
        view.removeSuccessful();
        view.showUsers();
    }
}