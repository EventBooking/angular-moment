describe('time-range', function () {
    var $filter, $compile, $scope;
    beforeEach(angular.mock.module('ngMoment'));
    beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _$filter_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $filter = _$filter_('timerange');
    }));
    it('formats datetimes', function () {
        var start = new Date(2016, 2, 10, 8, 0);
        var end = new Date(2016, 2, 10, 14, 0);
        var result = $filter(start, end);
        chai.expect(result).to.equal("8 AM - 2 PM");
    });
    it('formats iso times', function () {
        var start = "8:00:00";
        var end = "14:00:00";
        var result = $filter(start, end);
        chai.expect(result).to.equal("8 AM - 2 PM");
    });
    it('html', function () {
        var $template = $compile("<div>{{ start | timerange: end }}</div>")($scope);
        $scope.start = "08:00:00";
        $scope.end = "14:00:00";
        $scope.$digest();
        var result = $template.text();
        chai.expect(result).to.equal("8 AM - 2 PM");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yYW5nZS50ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtcmFuZ2UudGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixJQUFJLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxDQUFDO0lBRVgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFpQztRQUN2RixRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsT0FBTyxHQUFHLFNBQVMsQ0FBTSxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDUCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMseUNBQXlDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUMxQixNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUN4QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ3RpbWUtcmFuZ2UnLCAoKSA9PiB7XHJcblxyXG4gICAgdmFyICRmaWx0ZXIsXHJcbiAgICAgICAgJGNvbXBpbGUsXHJcbiAgICAgICAgJHNjb3BlO1xyXG5cclxuICAgIGJlZm9yZUVhY2goYW5ndWxhci5tb2NrLm1vZHVsZSgnbmdNb21lbnQnKSk7XHJcbiAgICBiZWZvcmVFYWNoKGFuZ3VsYXIubW9jay5pbmplY3QoKF8kY29tcGlsZV8sIF8kcm9vdFNjb3BlXywgXyRmaWx0ZXJfOiBhbmd1bGFyLklGaWx0ZXJTZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgJGNvbXBpbGUgPSBfJGNvbXBpbGVfO1xyXG4gICAgICAgICRzY29wZSA9IF8kcm9vdFNjb3BlXy4kbmV3KCk7XHJcbiAgICAgICAgJGZpbHRlciA9IF8kZmlsdGVyXzxhbnk+KCd0aW1lcmFuZ2UnKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdCgnZm9ybWF0cyBkYXRldGltZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoMjAxNiwgMiwgMTAsIDgsIDApO1xyXG4gICAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZSgyMDE2LCAyLCAxMCwgMTQsIDApO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAkZmlsdGVyKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgICAgICBjaGFpLmV4cGVjdChyZXN1bHQpLnRvLmVxdWFsKFwiOCBBTSAtIDIgUE1cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZm9ybWF0cyBpc28gdGltZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gXCI4OjAwOjAwXCI7XHJcbiAgICAgICAgdmFyIGVuZCA9IFwiMTQ6MDA6MDBcIjtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJGZpbHRlcihzdGFydCwgZW5kKTtcclxuXHJcbiAgICAgICAgY2hhaS5leHBlY3QocmVzdWx0KS50by5lcXVhbChcIjggQU0gLSAyIFBNXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2h0bWwnLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyICR0ZW1wbGF0ZSA9ICRjb21waWxlKGA8ZGl2Pnt7IHN0YXJ0IHwgdGltZXJhbmdlOiBlbmQgfX08L2Rpdj5gKSgkc2NvcGUpO1xyXG4gICAgICAgICRzY29wZS5zdGFydCA9IFwiMDg6MDA6MDBcIjtcclxuICAgICAgICAkc2NvcGUuZW5kID0gXCIxNDowMDowMFwiO1xyXG4gICAgICAgICRzY29wZS4kZGlnZXN0KCk7XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSAkdGVtcGxhdGUudGV4dCgpO1xyXG5cclxuICAgICAgICBjaGFpLmV4cGVjdChyZXN1bHQpLnRvLmVxdWFsKFwiOCBBTSAtIDIgUE1cIik7XHJcbiAgICB9KTtcclxufSk7Il19