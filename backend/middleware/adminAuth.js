
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Not Authorized. Login Again"
            });
        }

        let verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (!verifyToken) {
            return res.status(401).json({
                message: "Invalid Token. Login Again"
            });
        }

        req.adminEmail = process.env.ADMIN_EMAIL;

        next();

    } catch (error) {
        console.log("adminAuth error:", error);

        return res.status(401).json({
            message: "Authentication Failed"
        });
    }
};

export default adminAuth;
