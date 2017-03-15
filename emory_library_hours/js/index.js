// ---------------------
// Request Data
// ---------------------

var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://web.library.emory.edu/using-the-library/visiting-the-library/hours/index.json',
        'data': {},
        'dataType': 'json',
        success: function (data) {
          json = data
        },
        error: function(jqXHR, textStatus, errorThrown) {
          debugger
          return $("#library_hours").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

// ---------------------
// Manipulate Response Data
// ---------------------

// Using Underscore.js (http://underscorejs.org/)
var template = library_hours.innerHTML;
target.innerHTML = _.template(template,{hours:json});
