/**
 * XMLHttp utils.
 */

module.exports = {

  loadUri: function(uri, fn) {
    var req = new XMLHttpRequest();
    req.open('GET', uri, true);
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        fn(req.responseText);
      }
    };
    req.send(null);
  }

};
