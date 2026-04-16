import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ImageContext } from "../context/ImageContext";
import { toast } from "react-toastify";

const VerifyStripe = () => {
  const { backendUrl, token, loadCreditsData } = useContext(ImageContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const transactionId = searchParams.get("transactionId");

    if (!transactionId) {
      toast.error("Invalid payment session");
      return navigate("/buy");
    }

    const verifyPayment = async () => {
      try {
        const res = await axios.post(
          backendUrl + "/api/user/verify-stripe",
          { transactionId },
          { headers: { token } }
        );

        if (res.data.success) {
          await loadCreditsData(); // ✅ Bug 2 fixed - await added
          toast.success("Credits added successfully!");
          navigate("/");           // ✅ Bug 1 fixed - only navigate here on success
        } else {
          toast.error(res.data.message || "Payment verification failed");
          navigate("/buy");        // ✅ Bug 1 fixed - go back to pricing on failure
        }

      } catch (err) {
        toast.error("Verification error. Please contact support.");
        navigate("/buy");
      }
    };

    verifyPayment();
  }, [location.search, backendUrl, token, navigate, loadCreditsData]);

  // Bug 3 fixed - loading UI
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin" />
      <p className="text-gray-500 text-lg">Verifying your payment...</p>
    </div>
  );
};

export default VerifyStripe;
