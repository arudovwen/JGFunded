import { useEffect, useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import FormField from "@/components/forms/FormField";
import WebLayout from "@/components/layouts/WebLayout";
import { InvestorFormSchema } from "@/utils/form";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@/components/forms/TextField";
import { useRouter } from "next/router";
import { actions } from "@/services/waitlistservice";

export default function InvestorForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InvestorFormSchema),
  });

  const router = useRouter();
  const email = router.query.email;
  useEffect(() => {
    setValue("type", "investor");
    setValue("emailAddress", email);
  }, [email]);
  const [loading, setloading] = useState(false);
  const onSubmit = (data) => {
    setloading(true);
    console.log("🚀 ~ file: startup.js:38 ~ StartupForm ~ data:", data);
    actions.addToWaitlist(data).then((response) => {
      console.log(
        "🚀 ~ file: startup.js:40 ~ actions.addToWaitlist ~ response:",
        response
      );
    });
  };

  return (
    <>
      <Head>
        <title>Startup Form</title>
        <meta
          name="description"
          content="A marketplace where vetted and verified StartUps and Investors meet, and funding is initiated."
        />
      </Head>
      <WebLayout>
        <div className=" border-b border-[#0a142f1a] dark:border-white/40">
          <div className="pt-20 bg-white dark:bg-black mb-28 lg:mb-[140px] container max-w-[600px] mx-auto px-6">
            <legend className="text-3xl mb-10 text-center dark:text-white/80 font-bold">
              Get In touch as an Investor
            </legend>
            <p className="mb-10 dark:text-white/70">
              Get in touch if you are a crypto, web3, blockchain focused VC or
              investor and would like to partner with us in order to connect to
              some of the most promising startups, brightest founders and
              lucrative early stage (but not only!) investment opportunities in
              the web3 space.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6"
            >
              <FormField
                label="First name*"
                name="firstName"
                errors={errors.firstName}
                register={register}
                className="h-10 max-w-auto"
                maxW="max-w-auto"
              />
              <FormField
                label="Last name*"
                name="lastName"
                errors={errors.lastName}
                register={register}
                className="h-10"
                maxW="max-w-auto"
              />

              <FormField
                label="Email*"
                name="emailAddress"
                errors={errors.emailAddress}
                register={register}
                className="h-10"
                type="email"
                maxW="max-w-auto"
              />

              <FormField
                label="Company name*"
                name="company.name"
                errors={errors?.company?.name}
                register={register}
                className="h-10"
                maxW="max-w-auto"
              />

              <FormField
                label="Telegram"
                name="socials.telegram"
                errors={errors?.socials?.telegram}
                register={register}
                className="h-10"
                maxW="max-w-auto"
              />
              <FormField
                label="Linkedin "
                name="socials.linkedIn"
                errors={errors?.socials?.linkedIn}
                register={register}
                className="h-10"
                maxW="max-w-auto"
              />
              <TextField
                label="Message *"
                name="message"
                errors={errors.message}
                register={register}
              />

              <div className="flex justify-center">
                <ButtonComponent
                  isLoading={loading}
                  className="bg-primary text-white"
                >
                  Submit
                </ButtonComponent>
              </div>
            </form>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
