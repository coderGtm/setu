import {User} from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function handleUserSignup(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "This email is already registered!" });
        }
        user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: "This username is already taken!" });
        }

        user = new User({ username, email, password });

        const salt = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hashSync(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
            if (err) throw err;
            res.status(200).json({token});
        })
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export {handleUserSignup,handleUserLogin};