exports.handler = async function(event, context) {
  console.log(event.queryStringParameters.url)
  return {
    statusCode: 302,
    headers: { Location: event.queryStringParameters.url }
  }
}
