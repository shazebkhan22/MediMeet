
//problem in auth admin as it is not taking a new doctor after authorisation  
//View youtube at 5:48 hrs

const authAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Not authorized, login again" });
        }

        const token = authHeader.split(' ')[1]; // Extract the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the email in the token matches the admin email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Not authorized, login again" });
        }

        next(); // Proceed to the next middleware or route
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authAdmin;
