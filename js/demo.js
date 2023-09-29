var old_words;
function stem_demo(elt) {
  var words = elt.value;
  if (words === old_words) return;
  old_words = words;
  // Auto-expand height of the textarea
  var lines = 1;
  words.replace(/\n/g, function(){++lines;});
  elt.rows = lines;
  var lang = document.getElementById('lang').value;
  var s = stemmer_factory(lang);
  if (s === null) return;
  var result = '';
  var i = 0;
  // FIXME: Generate this from UnicodeData.
  for (const m of words.matchAll(/([A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u048A-\u0559\u0561-\u0588\u05D0-\u05F2\u0620-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07BF\u07CA-\u07EA\u07F4-\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08E2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u09BB\u09BD\u09CE-\u09D6\u09DC-\u09E1\u09F0-\u09F1\u0A05-\u0A3B\u0A59-\u0A65\u0A72-\u0A74\u0A85-\u0ABB\u0ABD\u0AD0-\u0AE1\u0AF9-\u0B00\u0B05-\u0B3B\u0B3D\u0B5C-\u0B61\u0B71\u0B83-\u0BBD\u0BD0-\u0BD6\u0C05-\u0C3D\u0C58-\u0C61\u0C85-\u0CBB\u0CBD\u0CDE-\u0CE1\u0CF1-\u0D00\u0D05-\u0D3D\u0D4E-\u0D56\u0D5F-\u0D61\u0D7A-\u0D81\u0D85-\u0DC9\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0EB0\u0EB2-\u0EB3\u0EBD-\u0EC7\u0EDC-\u0F00\u0F40-\u0F70\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10FA\u10FC-\u135C\u1380-\u138F\u13A0-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u1771\u1780-\u17B3\u17D7\u17DC\u1820-\u18A8\u18AA-\u191F\u1950-\u19CF\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4F\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF7\u1D00-\u1DBF\u1E00-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF2-\u1FFC\u2071-\u2073\u207F\u2090-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF8\u2D00-\u2D6F\u2D80-\u2DDF\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3041-\u3098\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48F\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FF\uA90A-\uA925\uA930-\uA946\uA960-\uA97F\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB5A\uAB5C-\uABE2\uAC00-\uD7FF\uF900-\uFB1D\uFB1F-\uFB28\uFB2A-\uFBB1\uFBD3-\uFD3D\uFD50-\uFDFB\uFE70-\uFEFE\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\u{10000}-\u{100FF}\u{10280}-\u{102DF}\u{10300}-\u{1031F}\u{10330}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039E}\u{103A0}-\u{103CF}\u{10400}-\u{1049F}\u{10500}-\u{1056E}\u{10600}-\u{10856}\u{10860}-\u{10876}\u{10880}-\u{108A6}\u{108E0}-\u{108FA}\u{10900}-\u{10915}\u{10920}-\u{1093E}\u{10980}-\u{109BB}\u{109BE}-\u{109BF}\u{10A00}\u{10A10}-\u{10A37}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B38}\u{10B40}-\u{10B57}\u{10B60}-\u{10B77}\u{10B80}-\u{10B98}\u{10C00}-\u{10CF9}\u{11003}-\u{11037}\u{11083}-\u{110AF}\u{110D0}-\u{110EF}\u{11103}-\u{11126}\u{11150}-\u{11172}\u{11176}-\u{1117F}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{1122B}\u{11280}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1133B}\u{1133D}\u{11350}-\u{11356}\u{1135D}-\u{11361}\u{11480}-\u{114AF}\u{114C4}-\u{114C5}\u{114C7}-\u{114CF}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}-\u{1164F}\u{11680}-\u{116AA}\u{11700}-\u{1171C}\u{118A0}-\u{118DF}\u{118FF}-\u{123FF}\u{12480}-\u{16A5F}\u{16AD0}-\u{16AEF}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16F50}\u{16F93}-\u{1BC9B}\u{1D400}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CD}\u{1E800}-\u{1E8C6}\u{1EE00}-\u{1EEEF}\u{20000}-\u{E0000}]+)/ug)) {
    result += words.substring(i, m.index).replace(/[ &<>\n]/g, function(c){
        if (c === ' ') return '&nbsp;';
        if (c === '<') return '&lt;';
        if (c === '>') return '&gt;';
        if (c === '&') return '&amp;';
        // Zero width space means a trailing newline will get rendered.
        return '<br>&#8203;';
    });
    const w = m[0];
    result += '<span style="background-color:#dfd" title="' + lang + '(' + w + ')">' + s.stemWord(w.toLowerCase()) + '</span>';
    i = m.index + w.length;
  }
  document.getElementById('results').innerHTML = result;
}
function lang_changed(elt) {
    old_words = undefined;
    var lang = elt.value;
    var words_elt = document.getElementById('words');
    var results_elt = document.getElementById('results');
    if (lang === 'Arabic' || lang === 'Yiddish') {
        words_elt.dir = results_elt.dir = 'rtl';
    } else {
	if (lang === 'Porter') lang = 'English';
        words_elt.dir = results_elt.dir = 'ltr';
    }
    words_elt.placeholder = "Enter some " + lang + " text";
    stem_demo(document.getElementById('words'));
    location.hash=elt.options[elt.selectedIndex].value;
}
window.onload = function() {
    let d=location.hash;
    if (d.length) {
        let c=null;
        let s=document.getElementById('lang');
        let a=(s.selectedIndex>=0?s.options[s.selectedIndex]:null);
        d = d.substring(1);
        for (let i=0; i<s.options.length; i++) {
            let e = s.options[i];
            if (e.getAttribute("value") === d) c = e;
        }
        if (c !== null && c !== a) {
            if (a !== null) a.removeAttribute("selected");
            c.setAttribute("selected", "");
            s.onchange(null);
        }
    }
    let t=(new URLSearchParams(location.search.substring(1))).get("text");
    if (t !== null) {
	let s=document.getElementById('words');
	s.value=t;
	stem_demo(s);
    }
}
document.getElementById('words').oninput=function(){stem_demo(this)}
document.getElementById('lang').onchange=function(){lang_changed(this)}
