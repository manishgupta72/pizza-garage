import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <ClipLoader color="#36d7b7" size={100} />
      ) : (
        <>
          <h1 className="font-semibold text-center text-3xl mb-4">
            Order Successfull !
          </h1>
          <p>Your order has been succesfully placed</p>
        </>
      )}
    </div>
  );
};

export default Success;
