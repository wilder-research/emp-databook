export const TOPICS = [
    { value: 'Housing', label: 'Housing', active: false },
    { value: 'Education', label: 'Education', active: false },
    { value: 'Health', label: 'Health', active: false },
    { value: 'Transportation', label: 'Transportation', active: false },
    { value: 'Survey respondent demographic characteristics', label: 'Survey respondent demographic characteristics', active: false },
  ];

export const QUESTIONS = [
  { value: 'Q6', topic: 'Housing', label: 'Q6. What is your current housing situation?', active: false },
  { value: 'Q8A', topic: 'Education', label: 'Q8A. Which types of child care are available to your household?', active: false },
  { value: 'Q8B', topic: 'Education', label: 'Q8B. Which types early childhood education / preschool are available to your household?', active: false },
  { value: 'Q12A', topic: 'Transportation', label: 'Q12A. In general, how easy or hard is it for you to get where you need to go, such as to work?', active: false },
  { value: 'Q15', topic: 'Health', label: 'Q15. Do you currently have health care coverage?', active: false },
  { value: 'Q16', topic: 'Health', label: 'Q16. What kind of health insurance do you have?', active: false },
  { value: 'Q34', topic: 'Survey respondent demographic characteristics', label: 'Q34. Including you, how many adults age 18 and older live in your household?', active: false },
  { value: 'Q35A', topic: 'Survey respondent demographic characteristics', label: 'Q35A. How many children age 0-2 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.', active: false },
]

export const RESULTTYPES = [
  { value: 'Results by region', label: 'Results by region', active: false },
  { value: 'Results by gender', label: 'Results by gender', active: false },
  { value: 'Results by age', label: 'Results by age', active: false },
  { value: 'Results by education level', label: 'Results by education level', active: false },
  { value: 'Results by household income', label: 'Results by household income', active: false },
];

//export const TOPICS = [...new Set(QUESTIONS.map(question => question.topic))];
