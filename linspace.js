//Works much like the python function of the same name.
//Produces an array with `length` elements from `a` to `b`
//of equally spaced values.
//Usage:
//linspace(0,1,5)
//> [0, 0.25, 0.5, 0.75, 1]
function linspace(a, b, length = 100) {
    var dist = b - a,
        int_length = dist / (length - 1);

    return [...Array(length).keys()].map(i => a + i * int_length)
}