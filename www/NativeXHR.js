var NativeXHR = function () {
};

NativeXHR.executeXHR = function (xhrURL, successCallback, errorCallback) {
	if (typeof successCallback != 'function') {
		throw new Error('NativeXHR Error: successCallback is not a function');
	}

	if (typeof errorCallback != 'function') {
		throw new Error('NativeXHR Error: errorCallback is not a function');
	}

	return cordova.exec(successCallback, errorCallback, 'NativeXHR', 'executeXHR', [xhrURL]);
};

module.exports = NativeXHR;