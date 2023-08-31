export const toolbar = {
  options: ["blockType", "inline", "textAlign", "link"],
  inline: {
    options: ["bold", "italic", "underline"],
    className: "!bg-transparent",
  },
  blockType: {
    inDropdown: true,
    options: [
      "Normal",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
   
    ],
    className: "!bg-transparent",
    component: undefined,
    dropdownClassName: undefined,
  },
};
