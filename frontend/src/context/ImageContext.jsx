
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(0); // Bug 1 fixed
    const [input, setInput] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    // Bug 3 fixed - sync token to localStorage
    useEffect(() => {
        if(token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + '/api/user/credits',
                { headers: { token } }
            );
            if(data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/image/generate-image',
                { prompt },
                { headers: { token } }
            );

            if(data.success) {
                loadCreditsData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditsData();
                if(data.credits <= 0) { // ✅ Bug 2 fixed
                    navigate('/buy');
                }
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    // Bug 4 fixed - setToken(null) instead of ''
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    }

    useEffect(() => {
        if(token) {
            loadCreditsData();
        }
    }, [token]);

    const value = {
        user, setUser,
        showLogin, setShowLogin,
        backendUrl,
        token, setToken,
        credit, setCredit,
        loadCreditsData,
        logout,
        generateImage,
        input,
        setInput
    }

    return (
        <ImageContext.Provider value={value}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider;

