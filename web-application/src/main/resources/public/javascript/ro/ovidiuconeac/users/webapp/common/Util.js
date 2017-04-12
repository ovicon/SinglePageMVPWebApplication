
/**
 * Created by ovidiu on 12/04/17.
 */
var Util = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {

            isValid: function (val) {
                var valid = false;
                if (val != undefined && val != null && val.length != 0) {
                    valid = true;
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