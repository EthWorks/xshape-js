import {expect} from "chai";
import {xshape} from '../src/xshape';

describe('xshape', function () {
    it('works for letter A', function () {
        expect(xshape('A')).to.eq('A')
    });
});
