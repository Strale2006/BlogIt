const User = require('../models/User');

exports.getPrivateRoute = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ success: false, error: 'No user found' });
        }

        res.status(200).json({ success: true, username: user.username, id: user.id,
            data: "You got access to the private data in this route" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};