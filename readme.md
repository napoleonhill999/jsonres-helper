#How to use

    npm install --save @unova/jsonres-helper
    var JsonResHelper = require('@unova/jsoners-helper');
    var jsonResHelper = new JsonResHelper(resourceName);

    jsonReshelper.respondWithSuccess(res, data);
    jsonReshelper.respondWithInternalFailure(res, message, errors);
    jsonReshelper.respondWithValidationError(res, errors);
    jsonReshelper.respondWithFailure(res, message, errors);
    jsonReshelper.respondWithNotFound(res, message);
