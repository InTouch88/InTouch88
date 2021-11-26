module.exports = {
    currentTime: function () {
    let date = new Date();
    return date;
    },
    greating: function () {
        let date = new Date().getHours();
        if (date >= 0 && date < 4) {
            return 'Good night';
        } else if (date >= 4 && date < 10) {
            return 'Good morning';
        } else if (date >= 10 && date < 17) {
            return 'Good day';
        } else if (date >= 17 && date < 24) {
            return 'Good evening';
        }
    }
}