exports.handler = async (event, context) => {
    // TODO: implement your lambda function logic here
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Lambda!' }),
    };
};