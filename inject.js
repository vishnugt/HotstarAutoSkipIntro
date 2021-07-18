const ONE_SECOND = 1 * 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const TWENTY_MINUTES = 20 * ONE_MINUTE;


setTimeout(() => {
    waitForVideoToLoadToEnableSubtitle(ONE_SECOND, ONE_MINUTE);
    waitForSkipButtonToPress(ONE_SECOND, TWENTY_MINUTES); //coz skip might take longer to come based on episode
}, ONE_SECOND);


function waitForVideoToLoadToEnableSubtitle(checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.getElementsByClassName("native-name").length == 1) { //see if this is available
            document.getElementsByClassName("native-name")[0].click()
            return;
        } else {
            setTimeout(function() {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}

function waitForSkipButtonToPress(checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.getElementsByClassName("binge-btn-wrapper show-btn").length == 1) { //see if the skip button is visible
            document.getElementsByClassName("binge-btn primary medium")[0].click() // then press the button now
            return;
        } else {
            setTimeout(function() {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}

//Below function enables Enter key to enable subtitles
const video = document.querySelector('video');
document.addEventListener('keypress', event => {
    if (event.keyCode == 13) { //keycode value for enter
        document.getElementsByClassName("native-name")[0].click()
    }
})

