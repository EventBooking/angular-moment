module MomentModule {
    export interface ITimeRangeFilter {
        filter(start: any, end: any, options?: any): string
    }

    class TimeRangeFilter implements ITimeRangeFilter {
        filter(start, end, options) {
            if (start == null || end == null)
                return "";

            if (!options) options = {};
            options.hideDate = true;

            var mStart = this.getMoment(start);
            var mEnd = this.getMoment(end);

            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix

            return mStart.twix(mEnd, options.allDay).format(options);
        }

        getMoment(value) {
            var isoTime = "HH:mm:ss",
                isoDate = "YYYY-MM-DDTHH:mm:ss";
            var m = (value instanceof Date) ? moment(value.getTime()) : moment(value, [isoDate, isoTime]);
            return m;
        }
    }

    Angular.module("ngMoment").filter('timerange', TimeRangeFilter);
}