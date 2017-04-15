"use strict";

/**
 * Created by ovidiu on 4/3/17.
 */
var Navigation = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {

            showUsers: function () {
                $('#includedContent').load('resources/layout/UsersView.html');
            },

            showEditUser: function () {
                $('#includedContent').load('resources/layout/EditUserView.html');
            },

            showNewUser: function () {
                $('#includedContent').load('resources/layout/NewUserView.html');
            }
        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if ( !instance ) {
                instance = init();
            }

            return instance;
        }

    };

})();