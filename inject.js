let observer = new MutationObserver((mutations) => {
    if (document.getElementsByClassName("binge-btn-wrapper show-btn").length == 1) { //see if the skip button is visible
        document.getElementsByClassName("binge-btn primary medium")[0].click() // then press the button now
    }
    if (document.getElementsByClassName("native-name").length == 1) { //see if this is available
        document.getElementsByClassName("native-name")[0].click()
    }
  })
  
  observer.observe(document.body, {
    childList: true
  , subtree: true
})