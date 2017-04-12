/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserPresenter(view) {

    var model = new NewUserUseCases();

    NewUserPresenter.prototype.save = function (name, age, sex) {
        model.save(name, age, sex)
        view.saveSuccessful();
        view.resetUi();
    }
}