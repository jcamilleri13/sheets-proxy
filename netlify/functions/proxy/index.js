exports.handler = async function(event, context) {
  console.log(event.queryStringParameters.redirect)
  return {
    statusCode: 302,
    headers: { Location: event.queryStringParameters.redirect }
  }
}
