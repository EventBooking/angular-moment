module MomentModule {
    export interface ITimeAgoFilter {
        filter(date: any): string
    }

    class TimeAgoFilter implements ITimeAgoFilter {
        filter(date) {
            return moment(date).fromNow();
        }
    }

    Angular.module("ngMoment").filter('timeago', TimeAgoFilter);
}