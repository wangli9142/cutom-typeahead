Package.describe({
  summary: "custom-typeahead"
});

Package.on_use(function (api, where) {
  api.add_files(['tests/lib/mockjax.js', 'tests/css/qunit.css', 'tests/lib/qunit.js', 'tests/lib/qunit.js', 'js/bootstrap-typeahead.js', 'tests/typeahead-tests.js'],'client');
});
