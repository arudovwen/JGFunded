import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import ButtonComponent from "@/components/ButtonComponent";
import InputField from "@/components/forms/InputField";
import { FaCheckCircle } from "react-icons/fa";

export default function PasswordReset() {
  const [stage, setStage] = useState(1);
  return (
    <div className="max-w-[445px]">
      {" "}
      <h2 className="text-base text-[#1D1D35] dark:text-white/80 font-medium mb-1">
        Password Reset
      </h2>
      <p className="text-sm text-[#677684] dark:text-white/80 mb-10">
        Kindly select your desired manaager to help with accountability as
        regards your account
      </p>
      <div>
        {stage < 3 && (
          <div className="rounded-full bg-[#D2D2D7] h-[60px] w-[60px] flex items-center justify-center mx-auto mb-4">
            <GiPadlock className="text-2xl" />
          </div>
        )}
        {stage < 3 && (
          <h2 className="text-[#686878] dark:text-white/80 font-medium text-center mb-5">
            {stage === 1 ? "Forgot" : "Reset"} Password?
          </h2>
        )}

        {stage == 1 && (
          <form className="w-full">
            <p className="text-sm text-[#8E8E9A] dark:text-white/80 mb-8">
              Enter your registered email address in the from below, further
              instructions will be sent to your mail.
            </p>
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  label="Email address"
                  placeholder="Provide your valid email address"
                  type="email"
                  icon={<FiCheckCircle className="text-primary" />}
                />
              </div>

              <div className="mt-12">
                <ButtonComponent
                  onClick={() => setStage(2)}
                  className="bg-primary text-white w-full text-center flex-items-center justify-center py-3"
                >
                  Request link
                </ButtonComponent>
              </div>
            </div>
          </form>
        )}

        {stage === 2 && (
          <form className="w-full">
            <p className="text-sm text-[#8E8E9A] dark:text-white/80 mb-8">
              Enter your new password and also repeat it to verify in the form
              below, you are just one step away!
            </p>
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  icon="password"
                  label="New Password"
                  placeholder="Provide a new password"
                  type="password"
                />
                <InputField
                  icon="password"
                  label="Confirm Password"
                  placeholder="Provide confirm your password"
                  type="password"
                />
              </div>

              <div className="mt-12">
                <ButtonComponent
                  onClick={() => setStage(3)}
                  className="bg-primary text-white w-full text-center flex-items-center justify-center py-3"
                >
                  Reset password
                </ButtonComponent>
              </div>
            </div>
          </form>
        )}

        {stage == 3 && (
          <div className="text-center">
            <FaCheckCircle className="text-6xl text-primary mb-4 mx-auto" />
            <h2 className="text-[#686878] dark:text-white/80 font-medium text-center mb-5">
              Reset Complete
            </h2>
            <p className="text-sm text-[#8E8E9A] dark:text-white/80 mb-8">
              All done! We have sent an email to S**********@gmail.com to
              confirm. Please login to your account.
            </p>
            <div className="mt-12">
              <ButtonComponent
                onClick={() => setStage(3)}
                className="bg-primary text-white w-full text-center flex-items-center justify-center py-3"
              >
                Reset to login
              </ButtonComponent>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
