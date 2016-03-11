describe('date-range', () => {

    var $filter: angular.IFilterService;

    beforeEach(angular.mock.module('ngMoment'));
    beforeEach(angular.mock.inject((_$filter_) => {
        $filter = _$filter_;
    }));

    describe('outputs', () => {

        it('formatted range', () => {
            var filter = $filter<any>('daterange');

            var start = '2015-02-10';
            var end = '2015-03-10';
            var result = filter(start, end);

            chai.expect(result).to.equal("Feb 10, 12 AM - Mar 10, 12 AM, 2015");
        });

    });

    describe('options', () => {

        it("'allDay' does not show times", () => {
            var filter = $filter<any>('daterange');

            var start = '2015-02-10T08:00:00';
            var end = '2015-03-10T17:00:00';
            var result = filter(start, end, { allDay: true });

            chai.expect(result).to.equal("Feb 10 - Mar 10, 2015");
        });

    });
});