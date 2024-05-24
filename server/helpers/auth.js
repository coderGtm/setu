import jwt from "jsonwebtoken";

function getUserFromToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.user;
    } catch (err) {
        return null;;
    }
}

module.exports = getUserFromToken;