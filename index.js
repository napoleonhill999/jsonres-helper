function JsonResHelper(resourceName) {
	if (resourceName === undefined) {
		this.resourceName = 'Resource'
	} else {
		this.resourceName = resourceName;
	}
	this.statusCode = 200;


	JsonResHelper.prototype.setStatusCode = function(statusCode){
		this.statusCode = statusCode;
		 return this;
	};

	JsonResHelper.prototype.getStatusCode = function(){
		 return this.statusCode;
	};


	JsonResHelper.prototype.respond = function(res, data){
		res.status(this.statusCode).json(data);
	};

	JsonResHelper.prototype.respondWithError = function(res, message, data){
		if (data === undefined) data = null;
		var responseObject = {
			error: {
				message: message,
				statusCode: this.getStatusCode(),
				errors: data
			},
			status: false
		};
		return this.respond(res, responseObject);
	};

	JsonResHelper.prototype.respondWithNotFound = function(res, message){
		if (message === undefined) message = this.resourceName + ' not Found.';
		return this.setStatusCode(404).respondWithError(res, message);
	};


	JsonResHelper.prototype.respondWithSuccess = function(res, data){
		var responseObject = {
			status: true,
			data: data
		}
		return this.setStatusCode(200).respond(res, responseObject);
	};


	JsonResHelper.prototype.respondWithInternalFailure = function(res, message, errors){
		return this.setStatusCode(500).respondWithError(res, message, errors);
	};

	JsonResHelper.prototype.respondWithValidationError = function(res, errors){
		message = 'Validation Error';
		return this.setStatusCode(400).respondWithError(res, message, errors);
	};

	JsonResHelper.prototype.respondWithFailure = function(res, message, errors){
		return this.setStatusCode(400).respondWithError(res, message, errors);
	};

}

module.exports = JsonResHelper;