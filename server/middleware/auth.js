import getUserFromToken from "../helpers/auth";

function restrictToAuthenticatedUserOnly(req, res, next) {
    const authorizationHeaderValue = req.headers["authorization"];
    req.user = null;

    if (!authorizationHeaderValue || !authorizationHeaderValue.startsWith("Bearer ")) {
        return res.status(401).json({ error: 'Token not Found' });
    }

    const token = authorizationHeaderValue.split("Bearer ")[1];
    const user = getUserFromToken(token);
    if (!user) {
        return res.status(401).json({ msg: 'Invalid Token' });
    }
    req.user = user;
    return next();
}

module.exports = restrictToAuthenticatedUserOnly;