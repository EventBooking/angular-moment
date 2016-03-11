describe('timeago filter', function() {

   var $filter: angular.IFilterService;

   beforeEach(angular.mock.module('ngMoment'));
   beforeEach(inject(function(_$filter_) {
       $filter = _$filter_;
   }));

   describe('outputs', function() {

       it('past dates', function() {
           var filter = $filter<any>('timeago');

           var threeMonthsAgo = moment().subtract(3, 'months');
           var result = filter(threeMonthsAgo);

           chai.expect(result).to.equal("3 months ago");
       });

   });

});