module MomentModule {
    class MomentFilter {
        filter(date, format, pattern) {
            if (date == null)
                return "no date";
            return moment(date, pattern).format(format);
        }
    }

    Angular.module("ngMoment").filter('moment', MomentFilter);
}