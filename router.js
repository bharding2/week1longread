function route(handle, pathname, response, request) {
  console.log('About to route a requst for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response, request);
  } else {
    console.log('no request handler found for ' + pathname);
    response.writeHead(404, {'content-type': 'text/plain'});
    response.write('404 not found');
    response.end();
  }
};

module.exports.route = route;
