function TestController() {
    this.now = moment().format();
    this.start = moment().format();
    this.end = moment(this.start).add('3','d').add('3','h').format();
    this.lastWeek = moment().subtract(8,'d');
    this.hoursAgo = moment().subtract(3,'h');
    this.daysAgo = moment().subtract(24,'h');
}

angular.module("demo").controller("testcontroller", TestController);