var c = require('./calc.js');

var good = 0, bad = 0;

function test(input, should) {
    actual = c.calculate(input)
    if (actual == should) {
        console.log("[OK]    " + input + "=" + should);
        good++;
    } else {
        console.log("[FAIL]  " + input + "=" + should + " actual: " + actual);
        bad++;
    }
}

test("0+0", "0");
test("(0+0)", "0");
test("!(1&1)", "=0");
test("2+1", "3");
test("2+1", "3");
test("2+1", "3");
test("2+1", "3");
test("1<<1", "2");
test("(1<<1)", "2");
test("(1<<(1))", "2");

// fehler !0b11111=0b-100000 (bei binary output)

console.log("[" + good + "/" + (good+bad) + "]");
