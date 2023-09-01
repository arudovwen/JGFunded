import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import ButtonComponent from "@/components/ButtonComponent";
import InputField from "@/components/forms/InputField";
import Image from "next/image";
import TextField from "@/components/forms/TextField";
import { BsFillPencilFill } from "react-icons/bs";

export default function EditProfile() {
  return (
    <div className="max-w-[445px]">
      {" "}
      <h2 className="text-base text-[#1D1D35] dark:text-white/80 font-medium mb-1">
        Edit Profile
      </h2>
      <p className="text-sm text-[#677684] dark:text-white/80 mb-10">
        Here you can edit your public information about yourself. The changes
        are immediate.
      </p>
      <div className="rounded-full relative bg-[#D2D2D7] h-[60px] w-[60px] flex items-center justify-center mx-auto mb-4">
        <Image
          width={80}
          height={80}
          alt="image"
          src="/images/avatar.svg"
          className="text-2xl rounded-full"
        />
        <span className="absolute bottom-0 -right-2 text-sm text-primary">
          <Image src="/images/edit.svg" alt="edit" width={16} height={16} />
        </span>
      </div>
      <form className="w-full">
        <p className="text-sm text-[#8E8E9A] dark:text-white/80 mb-8">
          Enter your registered email address in the from below, further
          instructions will be sent to your mail.
        </p>
        <div className="w-full">
          <div className="grid gap-y-6">
            <InputField
              label="Company name"
              placeholder="Provide your company name"
            />
            <InputField
              label="Email address"
              placeholder="Provide your valid email address"
              type="email"
              icon={<FiCheckCircle className="text-primary" />}
            />
            <TextField label="Bio" placeholder="Write something" />
          </div>

          <div className="mt-12">
            <ButtonComponent
              onClick={() => setStage(2)}
              className="bg-primary text-white w-full text-center flex-items-center justify-center py-3"
            >
              Save update
            </ButtonComponent>
          </div>
        </div>
      </form>
    </div>
  );
}
