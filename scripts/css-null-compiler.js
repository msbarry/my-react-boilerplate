
function noop() {
  return null;
}

require.extensions['.css'] = function () {
  return null;
};
