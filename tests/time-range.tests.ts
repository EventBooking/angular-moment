describe('time-range', () => {

    var $filter,
        $compile,
        $scope;

    beforeEach(angular.mock.module('ngMoment'));
    beforeEach(angular.mock.inject((_$compile_, _$rootScope_, _$filter_: angular.IFilterService) => {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $filter = _$filter_<any>('timerange');
    }));

    it('formats datetimes', () => {
        var start = new Date(2016, 2, 10, 8, 0);
        var end = new Date(2016, 2, 10, 14, 0);
        var result = $filter(start, end);

        chai.expect(result).to.equal("8 AM - 2 PM");
    });

    it('formats iso times', () => {
        var start = "8:00:00";
        var end = "14:00:00";
        var result = $filter(start, end);

        chai.expect(result).to.equal("8 AM - 2 PM");
    });

    it('html', () => {
        var $template = $compile(`<div>{{ start | timerange: end }}</div>`)($scope);
        $scope.start = "08:00:00";
        $scope.end = "14:00:00";
        $scope.$digest();

        var result = $template.text();

        chai.expect(result).to.equal("8 AM - 2 PM");
    });
});