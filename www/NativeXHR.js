var NativeXHR = function () {
};

NativeXHR.executeXHR = function (xhrURL, errorCallback) {
	if (typeof errorCallback !== 'function') {
		throw new Error('NativeXHR Error: errorCallback is not a function');
	}

	return cordova.exec(null, errorCallback, 'NativeXHR', 'executeXHR', [xhrURL]);
};

module.exports = NativeXHR;