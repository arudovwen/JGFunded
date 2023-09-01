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

  const onSubmit = (data) => console.log(data);
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
        <div className="pt-20 bg-white dark:bg-black mb-28 lg:mb-[140px] container max-w-[800px] mx-auto">
          <legend className="text-3xl mb-10 text-center dark:text-white/80 font-bold">
            Submit your Web3 Startup to or database
          </legend>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-6"
          >
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <FormField
                label="First name*"
                name="firstName"
                errors={errors}
                register={register}
                className="h-10"
              />
              <FormField
                label="Last name*"
                name="lastName"
                errors={errors}
                register={register}
                className="h-10"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <FormField
                label="Email*"
                name="email"
                errors={errors}
                register={register}
                className="h-10"
                type="email"
              />
              <FormField
                label="Telegram"
                name="telegram"
                errors={errors}
                register={register}
                className="h-10"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <FormField
                label="Company name*"
                name="companyName"
                errors={errors}
                register={register}
                className="h-10"
              />
              <FormField
                label="Company website*"
                name="companyWebsite"
                errors={errors}
                register={register}
                className="h-10"
              />
            </div>
            <div>
              <FormField
                label="Company based country*"
                name="companyCountry"
                errors={errors}
                register={register}
                className="h-10"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-5">
              <div className="lg:col-span-2">
                <h2 className="mb-4 font-medium">Category*</h2>
                <div className="grid lg:grid-cols-2 gap-4">
                  {Categories.map((item) => (
                    <FormField
                      key={item}
                      label={item}
                      name="categories"
                      errors={errors}
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
                <div className="grid grid-cols-1 gap-4">
                  {BusinessModels.map((item) => (
                    <FormField
                      key={item}
                      label={item}
                      name="businessModel"
                      errors={errors}
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
                name="prodDevStage"
                options={DevelopmentStages}
                errors={errors}
                register={register}
                className="h-10 py-2"
                setValue={setValue}
                placeholder="FormSelect"
              />
              <CustomFormSelect
                label="Funding stage"
                name="fundingStage"
                options={FundingStages}
                errors={errors}
                register={register}
                className="h-10 py-2"
                setValue={setValue}
                placeholder="FormSelect"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <CurrencyField
                label="How much funds are you raising?*"
                name="fundsRaising"
                errors={errors}
                register={register}
                className="h-10"
                setValue={setValue}
              />
              <CurrencyField
                label="Have you raised some funds already? If yes, how much?"
                name="fundsRaised"
                errors={errors}
                register={register}
                className="h-10"
                setValue={setValue}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <FormField
                label="Number of founders*"
                name="no_of_founders"
                errors={errors}
                register={register}
                className="h-10"
                type="number"
              />
              <FormField
                label="Number of employees*"
                name="no_of_employees"
                errors={errors}
                register={register}
                className="h-10"
                type="number"
              />
            </div>
            <div className="">
              <TextField
                label="Elevator Pitch *"
                name="elevatorPitch"
                errors={errors}
                register={register}
              />
            </div>
            <div className="">
              <TextField
                label="Startup & Product Overview *"
                name="overview"
                errors={errors}
                register={register}
              />
            </div>
            <div className="">
              <TextField
                label="Message *"
                name="message"
                errors={errors}
                register={register}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <UploadField
                label="Pitch Deck *"
                name="pitchDeck"
                errors={errors}
                register={register}
                className="h-10"
                setValue={setValue}
              />
              <UploadField
                label="Logo Icon"
                name="logo"
                errors={errors}
                register={register}
                className="h-10"
                setValue={setValue}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
              <FormField
                label="Video URL"
                name="videoUrl"
                errors={errors}
                register={register}
                className="h-10"
              />
            </div>
            <div>
              <h2 className="mb-4 font-medium">Socials</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <FormField
                  label="Linkedin Page"
                  name="linkedin"
                  errors={errors}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Twitter Page"
                  name="twitter"
                  errors={errors}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Facebook Page"
                  name="facebook"
                  errors={errors}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Telegram Community"
                  name="telegram"
                  errors={errors}
                  register={register}
                  className="h-10"
                />
                <FormField
                  label="Discord Community"
                  name="discord"
                  errors={errors}
                  register={register}
                  className="h-10"
                />
              </div>
            </div>
            <div className="grid">
              <FormField
                label="I agree to allow JGFunding store and process my personal data according to the privacy policy"
                name="agree"
                errors={errors}
                register={register}
                isRadio
              />
            </div>

            <div className="flex justify-center">
              <ButtonComponent className="bg-primary text-white">
                Submit
              </ButtonComponent>
            </div>
          </form>
        </div>
      </WebLayout>
    </>
  );
}
