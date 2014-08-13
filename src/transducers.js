transducers = (function() {

    var mapping = function(fn) {
        var transducer = function(reducerFn) {
            var reducerFn2 = function(result, input) {
                return reducerFn(
                    result,
                    fn(input)
                );
            };
            return reducerFn2;
        };
        return transducer;
    };

    var filtering = function(pred) {
        var transducer = function(reducerFn) {
            var reducerFn2 = function(result, input) {
                if (pred(input)) {
                    return reducerFn(
                        result,
                        input
                    );
                } else {
                    return result;
                }
            };
            return reducerFn2;
        };
        return transducer;
    };

    return {
        'mapping': mapping,
        'filtering': filtering
    };
})();
