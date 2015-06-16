
module.exports = function(options) {
  return function errorHandler(err, req, res, next) {
	 console.log('Error Handling!!');
	 res.status(404).send({ error: '404: This is not the page you are looking for ...' });
  };
};
