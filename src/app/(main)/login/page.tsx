"use client";
import { useAuth } from "@/lib/contexts/auth-context";
import Button from "@/modules/button/button";
import Input from "@/modules/input/input";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  let router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Unable to Login!", {
        duration: 2000,

        // Styling
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="flex justify-center m-8 mb-4 w-full">
      <div className="flex flex-col items-center ">
        <img src="/naraz.png" alt="" height="150px" width="150px" />
        <h3 className="font-semibold mb-4">NARAZ E-COMMERCE</h3>
        <h2 className="mb-4">Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 ">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Button variant="primary">
              {loading ? (
                <ThreeDots
                  height="20"
                  width="20"
                  radius="9"
                  color="#F5F8F5"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  
                  visible={true}
                />
              ) : (
                <>
                  Login <FontAwesomeIcon icon={faArrowRightToBracket} />
                </>
              )}
            </Button>
          </div>
        </form>
        <div className="mb-2 p-4 pl-3">
          <p>
            Don't have an account?{" "}
            <Link
              href={"/sign-up"}
              className="underline font-semibold text-md text-purple-500"
            >
              <u>create an account</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
