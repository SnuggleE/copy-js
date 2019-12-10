var Copy = function (options) {
    if(!options) {
        console.warning('no config')
        return
    }
    this.text = options.text
    this.success = options.success
    this.init = function () {
        if(window) {
            this.initBrowser()
        } else {
            this.initServer()
        }
    }
    this.initBrowser = function() {
        let input = document.createElement('input')
        input.value = this.text
        input.style.display = 'none'
        input.select()
        document.execCommand('copy')
        this.success()
    }
    this.initServer = function() {

    }
}
export default Copy