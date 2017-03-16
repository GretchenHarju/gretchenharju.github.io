// ---------------------
// Request Data
// ---------------------

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://gretchenharju.github.io/emory_library_hours/index.json',
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

var template = library_hours.innerHTML;
target.innerHTML = _.template(template,{defaultHours:json.defaultHours, exceptions:json.exceptions});
