chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.active && changeInfo.url) {
      if(changeInfo.url.match(/adfly/gi) != null){
				chrome.tabs.executeScript(null, {file:"kill.js"}); 
			}       
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.active && changeInfo.url) {
      if(changeInfo.url.match(/redirecting/gi) != null){
				chrome.tabs.executeScript(null, {file:"go.js"});
			}       
  }
});
