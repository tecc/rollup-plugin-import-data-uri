import TARGET from "../dist/index";
import assert from "assert";
import type { Plugin } from "rollup";

const EXPECTED_NAME = "import-data-uri";

describe('default index module', () => {
    let type: string;
    it('should be a function', function () {
        type = typeof TARGET;
        assert.equal(type, "function")
    })
    describe('and the return value', function () {
        let pluginObject: Plugin;
        it('should be a non-null object', function () {
            pluginObject = TARGET();
            assert.strictEqual(typeof pluginObject, "object");
            assert.notEqual(pluginObject, null);
        })
        it('should have ["name"] equal to "import-data-uri"', function () {
            assert.strictEqual(pluginObject.name, EXPECTED_NAME)
        });
        it('should have ["transform"] be a function', function () {
            assert.strictEqual(typeof pluginObject.transform, 'function');
        })
    });

})