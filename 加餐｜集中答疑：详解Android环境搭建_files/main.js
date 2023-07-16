(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('https://static001.geekbang.org/static/time/js/index.63bbd461.js', function () {
    loadJS('https://static001.geekbang.org/static/time/js/chunk-vendors.f7d5d186.js', function () {
      // loadJS('$app')
    })
  })
})()

