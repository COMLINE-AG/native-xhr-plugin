This Plugin is based on following workaround suggestion (which works):
https://issues.apache.org/jira/browse/CB-12074?focusedCommentId=16180050&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-16180050

This plugin resolves the WkWebView cookies after first startup problem.
Look at: https://github.com/ionic-team/cordova-plugin-ionic-webview/issues/22

Important
===========================
To make this workaround work, u need to make a native request to your backend and recieve cookies with that request. After that request you have to make sure u wait up to 3 seconds. (Usely until a User logged in 3 seconds already passed)

Usage:

```JavaScript
cordova.plugins.nativeXhr.executeXHR("URL", function () {
  // Do something after the request was successful...
}, function (error) {
  // Do something on Error...
});
```
