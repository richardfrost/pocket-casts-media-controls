(function(){

    "use strict";

    chrome.commands.onCommand.addListener(function(command) {
        sendCommand(command);
    });

    function sendCommand(action) {
        chrome.tabs.query({
            "url": [
                "https://play.pocketcasts.com/web/*",
                "https://playbeta.pocketcasts.com/web/*"
            ]
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { "action": action });
        });
    }

}());
