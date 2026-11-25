function kampasrc(runtime) {
    var unit = {};
    function build(esprima, escodegen, args) {
        var _triggers_ = {};
        var self = { _type: 'build' };
        self.model = {};
        self.formatted = 'hello Kampå';
        function ctr() {
            var _plan_ = {};
            self.esprima = esprima;
            self.escodegen = escodegen;
            self.args = args;
            runtime.runTriggers(_plan_, _triggers_);
        }
        ctr();
        return self;
    }
    unit.build = build;
    return unit;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { kampasrc };
}