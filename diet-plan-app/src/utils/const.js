export const detail = [
  {
    id: 1,
    question: "What’s your health goal? *",
    
    option_type: "list",
    answers: [
      { option: "I want to lose weight", isSelected: false },
      { option: "I want to manage my medical conditions", isSelected: false },
      { option: "I want to improve my overall health", isSelected: false },
      { option: "I want to learn more about HealthifyMe", isSelected: false },
    ],
  },
  {
    id: 2,
    question: "How old are you? *",
    option_type: "list",
    answers: [
      { option: "25 - 35 years", isSelected: false },
      { option: "36 - 45 years", isSelected: false },
      { option: "46 - 60 years", isSelected: false },
      { option: "over 60 years", isSelected: false },
    ],
  },
  {
    id: 3,
    question: "Select your gender *",
    option_type: "list",
    answers: [
      { option: "Male", isSelected: false },
      { option: "Female", isSelected: false },
    ],
  },
  {
    id: 4,
    question: "Please enter your current weight below *",
    description: "in Kilograms (kg)",
    option_type: null,
    answer_type: "input",
  },
  {
    id: 5,
    question: "How tall are you? Please reply in centimetres(cm) *",
    description: "You can refer to this chart for your height in cm.",
    option_type: "list",
    answer_type: "input",
    answers: [
      { option: "150 is 4 feet 11 inches", isSelected: false },
      { option: "155 is 5 feet 1 inch", isSelected: false },
      { option: "160 is 5 feet 3 inches", isSelected: false },
      { option: "165 is 5 feet 5 inches", isSelected: false },
      { option: "170 is 5 feet 7 inches", isSelected: false },
      { option: "175 is 5 feet 9 inches", isSelected: false },
      { option: "180 is 5 feet 11 inches", isSelected: false },
      { option: "185 is 6 feet 1 inch", isSelected: false },
      { option: "190 is 6 feet 3 inches", isSelected: false },
    ],
  },
  {
    id: 6,
    question: "Are you at risk of any medical condition? *",
    description: "You can refer to this chart for your height in cm.",
    option_type: "list",
    answer_type: null,
    answers: [
      { option: "PCOS/PCOD", isSelected: false },
      { option: "None", isSelected: false },
      { option: "Diabetes", isSelected: false },
      { option: "Hypertension", isSelected: false },
      { option: "Physical Injury", isSelected: false },
      { option: "Cholesterol", isSelected: false },
    ],
  },
];
