import React, { useState } from "react";
import clsx from "clsx";
export default function UploadField({
  label,
  name,
  placeholder,
  className = "",
  register,
  errors,
  setValue,
}) {
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
  const merged = clsx("input", className);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        // Replace this with your actual file upload function that returns a URL
        const uploadedUrl = await uploadFile(file);

        setUploadedFileUrl(uploadedUrl);
        setValue(name, uploadedUrl); // Set the URL value using setValue
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="w-full max-w-[374px]">
      {label && (
        <label className="block text-sm text-[#686878] mb-2">{label}</label>
      )}
      <div className="flex items-center relative">
        <input
          className={clsx(
            "appearance-none w-full px-1 file:h-full py-1 file:bg-primary file:border-none file:rounded-lg file:outline-none file:text-sm file:text-white file:py-1 file:px-3 text-sm text-gray-500",
            merged
          )}
          placeholder={placeholder}
          {...register(name)}
          type="file"
          onChange={handleFileUpload}
        />
      </div>
      {uploadedFileUrl && (
        <div className="mt-2">
          <span>Uploaded file: {uploadedFileUrl}</span>
        </div>
      )}
      {errors[name] && (
        <span className="text-sm text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
}

// Replace this function with your actual file upload logic
async function uploadFile(file) {
  // Simulate file upload delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "https://example.com/uploaded-file-url";
}
