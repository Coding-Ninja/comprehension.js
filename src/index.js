exports.parse = function(c) {
    trans = "__SOURCE__.filter(function(x){return (__PREDICATE__);}).map(function(x){return __TRANSFORM__;})";
    var tokens = c.split("|");
    if(tokens.length == 3) {
        var source = tokens[1].replace("x","").replace("<-","").trim();
        var transform = tokens[0].replace("{","").trim();
        var predicate = tokens[2].replace("}","").trim();
        
        return eval(trans.replace("__SOURCE__",source).replace("__TRANSFORM__",transform).replace("__PREDICATE__",predicate));
    }
    return "error";
}