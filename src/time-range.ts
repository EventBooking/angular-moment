module MomentModule {
    export interface ITimeRangeFilter {
        filter(start: any, end: any, options?: any): string
    }

    class TimeRangeFilter implements ITimeRangeFilter {
        filter(start, end, options) {
            if (start == null)
                return null;

            if (!options) options = {};
            options.hideDate = true;

            var mStart = this.getMoment(start);
            var mEnd = this.getMoment(end);

            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix

            return mStart.twix(mEnd, options.allDay).format(options);
        }

        getMoment(value) {
            var m = (value instanceof Date) ? moment(value.getTime()) : moment(value, "HH:mm:ss");
            return m;
        }
    }

    Angular.module("ngMoment").filter('timerange', TimeRangeFilter);
}