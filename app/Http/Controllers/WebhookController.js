

export default async function WebhookHelloController(request, response) {
    const { event } = request.body;
    const HTTP_STATUS = CONSTANTS.HTTP;

    if (event === "payment.approved") {
        console.log("payment.approved", request.body);
    }

    return response.status(HTTP_STATUS.SUCCESS).json({
        "message": "Received webhook request successfully!"
    });
};
