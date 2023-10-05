import * as yup from "yup";

export const InvestorFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emailAddress: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  type: yup
    .string()
    .oneOf(["founder", "investor"])
    .required("Type is required"),
  message: yup.string().required("Message is required"),
  company: yup.object().shape({
    name: yup.string().required("Company name is required"),
  }),
  socials: yup.object().shape({
    telegram: yup.string(),
    linkedIn: yup.string(),
  }),
});

export const StartupFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emailAddress: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  telegram: yup.string(),
  agree: yup.boolean().oneOf([true], "You must agree to the privacy policy"),
  type: yup.string().oneOf(["founder", "investor"]), // Added 'type' validation
  company: yup.object().shape({
    name: yup.string().required("Company name is required"),
    website: yup
      .string()
      .url("Invalid URL")
      .required("Company website is required"),
    logo: yup.string(),
    businessModel: yup
      .array()
      .typeError("Please select one")
      .of(yup.string())
      .min(1, "At least one business model is required")
      .required("Business models are required")
      .test(
        "array-length",
        "Custom message for Business models field",
        function (value) {
          return value && value.length > 0;
        }
      ),
    fundsRaising: yup.string().required("Funds raising is required"),
    fundsRaised: yup.string(),
    message: yup.string().required("Message is required"),
    videoUrl: yup.string().url("Invalid URL"),
    country: yup.string().required("Company based country is required"),
    category: yup
      .array()
      .typeError("Please select a min of three")
      .of(yup.string())
      .min(3, "At least 3 categories are required")
      .required("Categories are required"),
    overview: yup.string().required("Overview is required"),
    numberOfFounders: yup.string().required("Number of founders is required"),
    numberOfEmployees: yup.string().required("Number of employees is required"),
    elevatorPitch: yup.string().required("Elevator pitch is required"),
    fundingStage: yup.string().required("Funding stage is required"),
    productDevelopmentStage: yup
      .string()
      .required("Product development stage is required"),
    pitchDeck: yup.string().required("Pitch Deck is required"),
    socials: yup.object().shape({
      linkedIn: yup.string(),
      twitter: yup.string(),
      telegram: yup.string(),
      discord: yup.string(),
      facebook: yup.string(),
    }),
  }),
});

export const Categories = [
  "Web3",
  "Infrastructure",
  "Marketplace",
  "Trading",
  "Fintech",
  "Metaverse",
  "Tokenization",
  "Real Estate",
  "Developer Tools",
  "Cryptocurrency",
  "Layer 1 Blockchain",
  "Layer 2 Blockchain",
  "Artificial Intelligence (AI)",
  "Gaming",
  "NFT",
  "Social Media",
  "Analytics",
  "Education",
  "E-commerce",
  "DeFi",
  "Health & Fitness",
  "Music",
  "Exchange",
  "Other",
];

export const BusinessModels = ["B2B", "B2C", "Mixed"];

export const FundingStages = [
  { label: "Pre-seed", value: "pre-seed" },
  { label: "Seed", value: "seed" },
  { label: "Series A", value: "series a" },
  { label: "Series B+", value: "series b+" },
];

export const DevelopmentStages = [
  { label: "Idea/Pitch Deck Only", value: "Idea/Pitch Deck Only" },
  { label: "MVP", value: "MVP" },
  { label: "Alpha", value: "Alpha" },
  { label: "Beta-Version", value: "Beta-Version" },
  { label: "Public product release", value: "Public Product Released" },
  { label: "Early-Traction", value: "Early-Traction" },
  { label: "Scale", value: "Scale" },
  { label: "Maturity", value: "Maturity" },
];
