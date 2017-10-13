var NativeXHR = function () {
};

ImageSaver.executeXHR = function (xhrURL, successCallback, errorCallback) {
	if (typeof successCallback != 'function') {
		throw new Error('NativeXHR Error: successCallback is not a function');
	}

	if (typeof errorCallback != 'function') {
		throw new Error('NativeXHR Error: errorCallback is not a function');
	}

	return cordova.exec(successCallback, failureCallback, 'NativeXHR', 'executeXHR', [xhrURL]);
};

module.exports = NativeXHR;