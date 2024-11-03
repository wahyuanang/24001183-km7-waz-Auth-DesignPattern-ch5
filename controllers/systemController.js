const healthcheck = async (req, res) => { 
    try {
        res.status(200).json({
            status: "Success",
            message: "Application passed healthcheck", 
            isSuccess: true,
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Application failed to pass healthcheck", 
            isSuccess: false,
            data: null,
        });
    }
};

function onLost(req, res, next) {
    res.status(404).json({
        status: "Failed",
        message: "API not found",
        isSuccess: false,
        data: null,
    });
}

function onError(err, req, res, next) {
    res.status(500).json({
        status: "Failed Anjeng",
        message: err.message,
        isSuccess: false,
        data: null,
    });
}

module.exports = {
    onLost,
    onError,
    healthcheck 
};
