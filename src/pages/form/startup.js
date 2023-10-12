import { useEffect, useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import FormField from "@/components/forms/FormField";
import WebLayout from "@/components/layouts/WebLayout";
import {
  StartupFormSchema,
  Categories,
  BusinessModels,
  DevelopmentStages,
  FundingStages,
} from "@/utils/form";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@/components/forms/TextField";
import CustomFormSelect from "@/components/forms/FormSelect";
import UploadField from "@/components/forms/UploadField";
import CurrencyField from "@/components/forms/CurrencyField";
import { toast } from "react-toastify";
import { actions } from "@/services/waitlistservice";
import { useRouter } from "next/router";

export default function StartupForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(StartupFormSchema),
  });
  const router = useRouter();
  const email = router.query.email;
  useEffect(() => {
    setValue("type", "founder");
    setValue("emailAddress", email);
  }, [email]);
  const [loading, setloading] = useState(false);
  const onSubmit = (data) => {
    setloading(true);

    actions
      .addToWaitlist(data)
      .then((response) => {
        toast.success("Form submission successful");
        console.log(
          "🚀 ~ file: startup.js:40 ~ actions.addToWaitlist ~ response:",
          response
        );

        setloading(false);
        router.push("/");
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data.message);
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
          <div className="pt-20 bg-white dark:bg-black mb-28 lg:mb-[140px] container max-w-[800px] mx-auto px-6">
            <legend className="text-3xl mb-10 text-center dark:text-white/80 font-bold">
              Submit your Startup to our database
            </legend>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <FormField
                  label="First name*"
                  name="firstName"
                  errors={errors.firstName}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Last name*"
                  name="lastName"
                  errors={errors.lastName}
                  register={register}
                  className="h-10"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <FormField
                  label="Email*"
                  name="emailAddress"
                  errors={errors?.emailAddress}
                  register={register}
                  className="h-10"
                  type="email"
                />
                <FormField
                  label="Telegram"
                  name="telegram"
                  errors={errors?.telegram}
                  register={register}
                  className="h-10"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <FormField
                  label="Company name*"
                  name="company.name"
                  errors={errors?.company?.name}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Company website*"
                  name="company.website"
                  errors={errors?.company?.website}
                  register={register}
                  className="h-10"
                />
              </div>
              <div>
                <FormField
                  label="Company based country*"
                  name="company.country"
                  errors={errors?.company?.country}
                  register={register}
                  className="h-10"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-5">
                <div className="lg:col-span-2">
                  <h2 className="mb-4 font-medium">Category*</h2>
                  {errors?.company?.category && (
                    <span className="text-sm text-red-500">
                      {errors?.company?.category.message}
                    </span>
                  )}
                  <div className="grid lg:grid-cols-2 gap-4">
                    {Categories.map((item) => (
                      <FormField
                        key={item}
                        label={item}
                        value={item}
                        name="company.category"
                        register={register}
                        type="checkbox"
                        isCheckbox
                        className="accent-green-500"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 font-medium">Business Model *</h2>
                  {errors?.company?.businessModel && (
                    <span className="text-sm text-red-500">
                      {errors?.company?.businessModel.message}
                    </span>
                  )}
                  <div className="grid grid-cols-1 gap-4">
                    {BusinessModels.map((item) => (
                      <FormField
                        key={item}
                        label={item}
                        name="company.businessModel"
                        value={item}
                     
                        register={register}
                        type="checkbox"
                        isCheckbox
                        className="accent-green-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <CustomFormSelect
                  label="What is your product development stage? *"
                  name="company.productDevelopmentStage"
                  options={DevelopmentStages}
                  errors={errors?.company?.productDevelopmentStage}
                  register={register}
                  className="h-10 py-2"
                  setValue={setValue}
                  placeholder="FormSelect"
                />
                <CustomFormSelect
                  label="Funding stage"
                  name="company.fundingStage"
                  options={FundingStages}
                  errors={errors?.company?.fundingStages}
                  register={register}
                  className="h-10 py-2"
                  setValue={setValue}
                  placeholder="FormSelect"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <CurrencyField
                  label="How much funds are you raising?*"
                  name="company.fundsRaising"
                  errors={errors?.company?.fundsRaising}
                  register={register}
                  className="h-10"
                  setValue={setValue}
                />
                <CurrencyField
                  label="Have you raised some funds already? If yes, how much?"
                  name="company.fundsRaised"
                  errors={errors?.company?.fundsRaised}
                  register={register}
                  className="h-10"
                  setValue={setValue}
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <FormField
                  label="Number of founders*"
                  name="company.numberOfFounders"
                  errors={errors?.company?.numberOfFounders}
                  register={register}
                  className="h-10"
                  type="number"
                />
                <FormField
                  label="Number of employees*"
                  name="company.numberOfEmployees"
                  errors={errors?.company?.numberOfEmployees}
                  register={register}
                  className="h-10"
                  type="number"
                />
              </div>
              <div className="">
                <TextField
                  label="Elevator Pitch *"
                  name="company.elevatorPitch"
                  errors={errors?.company?.elevatorPitch}
                  register={register}
                />
              </div>
              <div className="">
                <TextField
                  label="Startup & Product Overview *"
                  name="company.overview"
                  errors={errors?.company?.overview}
                  register={register}
                />
              </div>
              <div className="">
                <TextField
                  label="Message *"
                  name="company.message"
                  errors={errors?.company?.message}
                  register={register}
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <UploadField
                  label="Pitch Deck *"
                  name="company.pitchDeck"
                  errors={errors?.company?.pitchDeck}
                  register={register}
                  className="h-10"
                  setValue={setValue}
                />
                <UploadField
                  label="Logo Icon"
                  name="company.logo"
                  errors={errors?.company?.logo}
                  register={register}
                  className="h-10"
                  setValue={setValue}
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
                <FormField
                  label="Video URL"
                  name="company.videoUrl"
                  errors={errors?.company?.videoUrl}
                  register={register}
                  className="h-10"
                />
              </div>
              <div>
                <h2 className="mb-4 font-medium">Socials</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  <FormField
                    label="Linkedin Page"
                    name="company.socials.linkedIn"
                    errors={errors?.socials?.linkedIn}
                    register={register}
                    className="h-10"
                  />
                  <FormField
                    label="Twitter Page"
                    name="company.socials.twitter"
                    errors={errors?.socials?.twitter}
                    register={register}
                    className="h-10"
                  />
                  <FormField
                    label="Facebook Page"
                    name="company.socials.facebook"
                    errors={errors?.socials?.facebook}
                    register={register}
                    className="h-10"
                  />
                  <FormField
                    label="Telegram Community"
                    name="company.socials.telegram"
                    errors={errors?.socials?.telegram}
                    register={register}
                    className="h-10"
                  />
                  <FormField
                    label="Discord Community"
                    name="company.socials.discord"
                    errors={errors?.socials?.discord}
                    register={register}
                    className="h-10"
                  />
                </div>
              </div>
              <div className="grid">
                <FormField
                  label="I agree to allow JGFunding store and process my personal data according to the privacy policy"
                  name="agree"
                  errors={errors?.company?.agree}
                  register={register}
                  isRadio
                />
              </div>
              <div className="flex justify-center">
                <ButtonComponent
                  type="submit"
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
