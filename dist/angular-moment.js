Angular.module("ngMoment", []);
var MomentModule;
(function (MomentModule) {
    var DateRangeFilter = (function () {
        function DateRangeFilter() {
        }
        DateRangeFilter.prototype.filter = function (start, end, options) {
            if (start == null)
                return null;
            if (!options)
                options = {};
            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return DateRangeFilter;
    }());
    Angular.module("ngMoment").filter('daterange', DateRangeFilter);
})(MomentModule || (MomentModule = {}));
var MomentModule;
(function (MomentModule) {
    var DaysAgoFilter = (function () {
        function DaysAgoFilter() {
            this.today = moment().startOf('day');
        }
        DaysAgoFilter.prototype.filter = function (date) {
            var compDate = moment(date);
            if (compDate.diff(this.today, 'days') === 0)
                return 'today';
            return compDate.from(this.today);
        };
        return DaysAgoFilter;
    }());
    Angular.module("ngMoment").filter('daysago', DaysAgoFilter);
})(MomentModule || (MomentModule = {}));
var MomentModule;
(function (MomentModule) {
    var MomentFilter = (function () {
        function MomentFilter() {
        }
        MomentFilter.prototype.filter = function (date, format, pattern) {
            if (date == null)
                return "no date";
            return moment(date, pattern).format(format);
        };
        return MomentFilter;
    }());
    Angular.module("ngMoment").filter('moment', MomentFilter);
})(MomentModule || (MomentModule = {}));
var MomentModule;
(function (MomentModule) {
    var TimeAgoFilter = (function () {
        function TimeAgoFilter() {
        }
        TimeAgoFilter.prototype.filter = function (date) {
            return moment(date).fromNow();
        };
        return TimeAgoFilter;
    }());
    Angular.module("ngMoment").filter('timeago', TimeAgoFilter);
})(MomentModule || (MomentModule = {}));
var MomentModule;
(function (MomentModule) {
    var TimeRangeFilter = (function () {
        function TimeRangeFilter() {
        }
        TimeRangeFilter.prototype.filter = function (start, end, options) {
            if (start == null)
                return null;
            if (!options)
                options = {};
            options.hideDate = true;
            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return TimeRangeFilter;
    }());
    Angular.module("ngMoment").filter('timerange', TimeRangeFilter);
})(MomentModule || (MomentModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tb21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBwLnRzIiwiLi4vc3JjL2RhdGUtcmFuZ2UudHMiLCIuLi9zcmMvZGF5cy1hZ28udHMiLCIuLi9zcmMvbW9tZW50LnRzIiwiLi4vc3JjL3RpbWUtYWdvLnRzIiwiLi4vc3JjL3RpbWUtcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7QUNBL0IsSUFBTyxZQUFZLENBc0JsQjtBQXRCRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBS2pCO1FBQUE7UUFjQSxDQUFDO1FBYkcsZ0NBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTztZQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUUzQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFFckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FBQyxBQWRELElBY0M7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDcEUsQ0FBQyxFQXRCTSxZQUFZLEtBQVosWUFBWSxRQXNCbEI7QUN0QkQsSUFBTyxZQUFZLENBbUJsQjtBQW5CRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBQ2pCO1FBQ0k7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBSUQsOEJBQU0sR0FBTixVQUFPLElBQUk7WUFDUCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUVuQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FBQyxBQWZELElBZUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDaEUsQ0FBQyxFQW5CTSxZQUFZLEtBQVosWUFBWSxRQW1CbEI7QUNuQkQsSUFBTyxZQUFZLENBVWxCO0FBVkQsV0FBTyxZQUFZLEVBQUMsQ0FBQztJQUNqQjtRQUFBO1FBTUEsQ0FBQztRQUxHLDZCQUFNLEdBQU4sVUFBTyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87WUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztnQkFDYixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5RCxDQUFDLEVBVk0sWUFBWSxLQUFaLFlBQVksUUFVbEI7QUNWRCxJQUFPLFlBQVksQ0FZbEI7QUFaRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBS2pCO1FBQUE7UUFJQSxDQUFDO1FBSEcsOEJBQU0sR0FBTixVQUFPLElBQUk7WUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDTCxvQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsRUFaTSxZQUFZLEtBQVosWUFBWSxRQVlsQjtBQ1pELElBQU8sWUFBWSxDQXVCbEI7QUF2QkQsV0FBTyxZQUFZLEVBQUMsQ0FBQztJQUtqQjtRQUFBO1FBZUEsQ0FBQztRQWRHLGdDQUFNLEdBQU4sVUFBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU87WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRWhCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFeEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBRXJELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDTCxzQkFBQztJQUFELENBQUMsQUFmRCxJQWVDO0lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsRUF2Qk0sWUFBWSxLQUFaLFlBQVksUUF1QmxCIiwic291cmNlc0NvbnRlbnQiOlsiQW5ndWxhci5tb2R1bGUoXCJuZ01vbWVudFwiLCBbXSk7IiwibW9kdWxlIE1vbWVudE1vZHVsZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEYXRlUmFuZ2VGaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihzdGFydDogYW55LCBlbmQ6IGFueSwgb3B0aW9ucz86IGFueSk6IHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIERhdGVSYW5nZUZpbHRlciBpbXBsZW1lbnRzIElEYXRlUmFuZ2VGaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihzdGFydCwgZW5kLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtU3RhcnQgPSBtb21lbnQoc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgbUVuZCA9IG1vbWVudChlbmQpO1xyXG4gICAgICAgICAgICBpZiAobVN0YXJ0LmlzU2FtZShtRW5kKSlcclxuICAgICAgICAgICAgICAgIG1FbmQgPSBtRW5kLmFkZCgxLCAnbWlsbGlzZWNvbmQnKTsgLy8gYnVnIGluIHR3aXhcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbVN0YXJ0LnR3aXgobUVuZCwgb3B0aW9ucy5hbGxEYXkpLmZvcm1hdChvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ01vbWVudFwiKS5maWx0ZXIoJ2RhdGVyYW5nZScsIERhdGVSYW5nZUZpbHRlcik7XHJcbn0iLCJtb2R1bGUgTW9tZW50TW9kdWxlIHtcclxuICAgIGNsYXNzIERheXNBZ29GaWx0ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZGF5ID0gbW9tZW50KCkuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2RheTtcclxuXHJcbiAgICAgICAgZmlsdGVyKGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBEYXRlID0gbW9tZW50KGRhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBEYXRlLmRpZmYodGhpcy50b2RheSwgJ2RheXMnKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiAndG9kYXknO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBEYXRlLmZyb20odGhpcy50b2RheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdNb21lbnRcIikuZmlsdGVyKCdkYXlzYWdvJywgRGF5c0Fnb0ZpbHRlcik7XHJcbn0iLCJtb2R1bGUgTW9tZW50TW9kdWxlIHtcclxuICAgIGNsYXNzIE1vbWVudEZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGUsIGZvcm1hdCwgcGF0dGVybikge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm8gZGF0ZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUsIHBhdHRlcm4pLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nTW9tZW50XCIpLmZpbHRlcignbW9tZW50JywgTW9tZW50RmlsdGVyKTtcclxufSIsIm1vZHVsZSBNb21lbnRNb2R1bGUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGltZUFnb0ZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGU6IGFueSk6IHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRpbWVBZ29GaWx0ZXIgaW1wbGVtZW50cyBJVGltZUFnb0ZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mcm9tTm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdNb21lbnRcIikuZmlsdGVyKCd0aW1lYWdvJywgVGltZUFnb0ZpbHRlcik7XHJcbn0iLCJtb2R1bGUgTW9tZW50TW9kdWxlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRpbWVSYW5nZUZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKHN0YXJ0OiBhbnksIGVuZDogYW55LCBvcHRpb25zPzogYW55KTogc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGltZVJhbmdlRmlsdGVyIGltcGxlbWVudHMgSVRpbWVSYW5nZUZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKHN0YXJ0LCBlbmQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBvcHRpb25zLmhpZGVEYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBtU3RhcnQgPSBtb21lbnQoc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgbUVuZCA9IG1vbWVudChlbmQpO1xyXG4gICAgICAgICAgICBpZiAobVN0YXJ0LmlzU2FtZShtRW5kKSlcclxuICAgICAgICAgICAgICAgIG1FbmQgPSBtRW5kLmFkZCgxLCAnbWlsbGlzZWNvbmQnKTsgLy8gYnVnIGluIHR3aXhcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbVN0YXJ0LnR3aXgobUVuZCwgb3B0aW9ucy5hbGxEYXkpLmZvcm1hdChvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ01vbWVudFwiKS5maWx0ZXIoJ3RpbWVyYW5nZScsIFRpbWVSYW5nZUZpbHRlcik7XHJcbn0iXX0=