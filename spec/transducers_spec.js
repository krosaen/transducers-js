describe("tranduce it up", function() {

    it("composes filtering and mapping", function() {

        var inc = function(x) {
            return x + 1;
        };

        var even = function(x) {
            return (x % 2) == 0;
        };

        var xform = _.compose(
            transducers.filtering(even),
            transducers.mapping(inc)
        );

        var add = function(a, b) {
            return a + b;
        };

        var conj = function(arr, input) {
            arr.push(input);
            return arr;
        };

        expect(
            _.reduce(
                [1, 2, 3, 4],
                xform(add),
                0
            )
        ).toEqual(8); // 3 + 5
        expect(
            _.reduce(
                [1, 2, 3, 4],
                xform(conj),
                []
            )
        ).toEqual([3, 5]);
    });

});