import * as yup from "yup"

export const InvestorFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  companyName: yup.string().required('Company name is required'),
  telegram: yup.string(),
  linkedin: yup.string(),
  message: yup.string().required('Message is required'),
});


export const StartupFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telegram: yup.string(),
  companyName: yup.string().required("Company name is required"),
  companyWebsite: yup.string().url("Invalid URL").required("Company website is required"),
  companyCountry: yup.string().required("Company based country is required"),
  categories: yup.array().typeError("").min(3, "At least 3 categories are required").required("Categories are required"),
  businessModel: yup.array().typeError("").min(1, "At least one business model is required").required("Business models are required"),
  prodDevStage: yup.string().required("Product development stage is required"),
  fundingStage: yup.string().required("Funding stage is required"),
  fundsRaising: yup.string().required("Funds raising is required"),
  fundsRaised: yup.string(),
  no_of_founders: yup.string().required("Number of founders is required"),
  no_of_employees: yup.string().required("Number of employees is required"),
  elevatorPitch: yup.string().required("Elevator pitch is required"),
  overview: yup.string().required("Startup & Product Overview is required"),
  message: yup.string().required("Message is required"),
  pitchDeck: yup.string().required("Pitch Deck is required"),
  logo: yup.string(),
  videoUrl: yup.string().url("Invalid URL"),
  linkedin: yup.string(),
  twitter: yup.string(),
  facebook: yup.string(),
  telegram: yup.string(),
  discord: yup.string(),
  agree: yup.boolean().oneOf([true], "You must agree to the privacy policy")
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
