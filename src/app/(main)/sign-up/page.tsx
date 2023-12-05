"use client";
import { useAuth } from "@/lib/contexts/auth-context";
import Button from "@/modules/button/button";
import Input from "@/modules/input/input";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const { signUp } = useAuth();

  let router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp(name, email, password);
      router.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Unable to Register! Try Again", {
        duration: 2000,

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
        <h2 className="mb-4">Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2 ">
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <Button variant="secondary">
              {loading ? (
                <ThreeDots
                  height="20"
                  width="20"
                  radius="10"
                  color="#F5F8F5"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              ) : (
                <>
                  Register {"  "}
                  <FontAwesomeIcon icon={faUserPlus} />
                </>
              )}
            </Button>
          </div>
        </form>
        <div className="mb-2 p-4 pl-3">
          <p>
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="underline font-semibold text-md text-purple-800"
            >
              <u>Login</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
