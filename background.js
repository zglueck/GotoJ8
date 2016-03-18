chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	var eightUrl = info.url.replace("7","8");
    return {redirectUrl: eightUrl};
  },
  {
    urls: [
      "https://docs.oracle.com/javase/7*",
	  "http://docs.oracle.com/javase/7*"
    ]
  },
  ["blocking"]
);

