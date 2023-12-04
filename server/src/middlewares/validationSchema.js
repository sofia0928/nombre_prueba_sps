export const validateSchema = (Schema) => (req, res, next) => {
    try {
        Schema.parse(req.body);
        next();
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
}