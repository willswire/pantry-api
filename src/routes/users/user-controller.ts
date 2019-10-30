import { sign } from 'jsonwebtoken';
import { config }  from '../../config/config';

function generateToken(user) {
    return sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

// =============================================================================
// Login Route
// =============================================================================
exports.login = function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { return res.status(400).json({ error: "bad data" }); }
        if (!user) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) { return res.status(400).json({ error: "bad data" }); }
            if (!isMatch) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }

                let userInfo = user.toJson();
                res.status(200).json({
                    token: 'Bearer ' + generateToken(userInfo),
                    user: userInfo
                });
        });
    });
}
