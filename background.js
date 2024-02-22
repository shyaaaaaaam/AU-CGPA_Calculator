chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getHTMLData
    });
});

function getHTMLData() {
    const htmlData = document.documentElement.outerHTML;
    chrome.runtime.sendMessage({ htmlData });
}