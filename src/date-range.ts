module MomentModule {
    export interface IDateRangeFilter {
        filter(start: any, end: any, options?: any): string
    }

    class DateRangeFilter implements IDateRangeFilter {
        filter(start, end, options) {
            if (start == null)
                return null;

            if (!options) options = {};

            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
                
            return mStart.twix(mEnd, options.allDay).format(options);
        }
    }

    Angular.module("ngMoment").filter('daterange', DateRangeFilter);
}