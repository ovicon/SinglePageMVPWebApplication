"use strict";

/**
 * Created by ovidiu on 12/04/17.
 */
var Util = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {

            isUserValid: function (user) {

                var valid = false;

                function isValid(val) {
                    var valid = false;
                    if (val != undefined && val != null && val.length != 0) {
                        valid = true;
                    }
                    return valid;
                }

                if (user != undefined
                    && user != null
                    && isValid(user.name)
                    && isValid(user.age)
                    && isValid(user.sex)
                ) {

                }

                return valid;
            },
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