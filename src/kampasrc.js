function kampasrc() {
var unit = {};

function build(esprima, escodegen, args) {
    var self = { _type: 'build' };
    self.model = {};
    self.formatted = 'hello Kampå';
    return self;
}
unit.build = build;
return unit;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        kampasrc
    };
}
