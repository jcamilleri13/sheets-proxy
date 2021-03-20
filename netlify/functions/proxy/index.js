const querystring = require('querystring')

exports.handler = async function(event, context) {
  const Location = querystring.unescape(event.queryStringParameters.redirect)

  return {
    statusCode: 302,
    headers: { Location }
  }
}
