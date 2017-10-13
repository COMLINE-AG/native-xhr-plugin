var NativeXHR = function () {
};

NativeXHR.executeXHR = function (xhrURL, successCallback, errorCallback) {
	if (typeof successCallback !== 'function') {
		throw new Error('NativeXHR Error: errorCallback is not a function. Its a ' + typeof errorCallback);
	}
	if (typeof errorCallback !== 'function') {
		throw new Error('NativeXHR Error: errorCallback is not a function. Its a ' + typeof errorCallback);
	}

	return cordova.exec(successCallback, errorCallback, 'NativeXHR', 'executeXHR', [xhrURL]);
};

module.exports = NativeXHR;