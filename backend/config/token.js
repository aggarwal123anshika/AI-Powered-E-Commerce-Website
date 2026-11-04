import jwt from "jsonwebtoken"
export const genToken = async (userId) => {
    try {
        let token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn : "17d"})
        return token
    } catch (error) {
        console.log("token error")
    }
}
