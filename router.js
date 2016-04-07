function route(handle, pathname) {
  console.log('About to route a requst for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log('no request handler found for ' + pathname)
  }
};

module.exports.route = route;
