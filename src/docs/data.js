//list of all questions in data set
export const QUESTIONS = [
  { selected: false, value: 'Q1', topic: 'Community connectedness', label: 'Q1. How long have you lived in the East Metro?' },
  { selected: false, value: 'Q2', topic: 'Community connectedness', label: 'Q2. What are the main reasons you choose to live here?' },
  { selected: false, value: 'Q3A', topic: 'Community connectedness', label: 'Q3A. How would you rate the East Metro as a place to live?' },
  { selected: false, value: 'Q3B', topic: 'Community connectedness', label: 'Q3B. How would you rate the East Metro as a place to raise children?' },
  { selected: false, value: 'Q3C', topic: 'Community connectedness', label: 'Q3C. How would you rate the East Metro as a place to work?' },
  { selected: false, value: 'Q3D', topic: 'Community connectedness', label: 'Q3D. How would you rate the East Metro on having high quality, affordable housing choices for all residents?' },
  { selected: false, value: 'Q3E', topic: 'Community connectedness', label: 'Q3E. How would you rate the East Metro\'s shopping, services, dining, and entertainment options?' },
  { selected: false, value: 'Q3F', topic: 'Community connectedness', label: 'Q3F. How would you rate the East Metro\'s parks and outdoor recreation areas?' },
  { selected: false, value: 'Q3G', topic: 'Community connectedness', label: 'Q3G. How would you rate the East Metro\'s cultural amenities such as museums, arts, music?' },
  { selected: false, value: 'Q3H', topic: 'Community connectedness', label: 'Q3H. How would you rate the East Metro\'s availability of fresh, local, affordable food?' },
  { selected: false, value: 'Q3I', topic: 'Community connectedness', label: 'Q3I. How would you rate the East Metro\'s openness and acceptance of people from different backgrounds?' },
  { selected: false, value: 'Q3J', topic: 'Community connectedness', label: 'Q3J. How would you rate the East Metro\'s community connectedness?' },
  { selected: false, value: 'Q3K', topic: 'Community connectedness', label: 'Q3K. How would you rate the East Metro\'s overall quality of life?' },
  { selected: false, value: 'Q4', topic: 'Community connectedness', label: 'Q4. Do you think of the East Metro as a place where you belong or just a place to live?' },
  { selected: false, value: 'Q5', topic: 'Community connectedness', label: 'Q5. How much do you agree or disagree that you have a voice in the community where you live?' },
  { selected: false, value: 'Q6', topic: 'Housing', label: 'Q6. What is your current housing situation?' },
  { selected: false, value: 'Q7', topic: 'Housing', label: 'Q7. What were your biggest housing-related concerns over the past year?' },
  { selected: false, value: 'Q8A', topic: 'Education', label: 'Q8A. Which types of child care are available to your household?' },
  { selected: false, value: 'Q8B', topic: 'Education', label: 'Q8B. Which types early childhood education / preschool are available to your household?' },
  { selected: false, value: 'Q8C', topic: 'Education', label: 'Q8C. Which types of K-12 public and charter schools are available to your household?' },
  { selected: false, value: 'Q8D', topic: 'Education', label: 'Q8D. Which types of K-12 private schools are available to your household?' },
  { selected: false, value: 'Q8E', topic: 'Education', label: 'Q8E. Which types of out-of-school time activities and programs for school-age children are available to your household?' },
  { selected: false, value: 'Q8F', topic: 'Education', label: 'Q8F. Which types of postsecondary education are available to your household?' },
  { selected: false, value: 'Q8G', topic: 'Education', label: 'Q8G. Which types of career and technical education and job training are available to your household?' },
  { selected: false, value: 'Q9', topic: 'Education', label: 'Q9. Do you have children age 18 or younger who live in your household?' },
  { selected: false, value: 'Q10A', topic: 'Education', label: 'Q10A. Do any of the children who live in your household attend any of the following public (not charter) schools in your neighborhood?' },
  { selected: false, value: 'Q10B', topic: 'Education', label: 'Q10B. Do any of the children who live in your household attend any of the following public (not charter) schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10C', topic: 'Education', label: 'Q10C. Do any of the children who live in your household attend any of the following public charter schools in your neighborhood?' },
  { selected: false, value: 'Q10D', topic: 'Education', label: 'Q10D. Do any of the children who live in your household attend any of the following public charter schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10E', topic: 'Education', label: 'Q10E. Do any of the children who live in your household attend any of the following private schools in your neighborhood?' },
  { selected: false, value: 'Q10F', topic: 'Education', label: 'Q10F. Do any of the children who live in your household attend any of the following private schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10G', topic: 'Education', label: 'Q10G. Are any of the children who live in your household homeschooled?' },
  { selected: false, value: 'Q11', topic: 'Education', label: 'Q11. Which description best matches your college savings situation for the children who live in your household?' },
  { selected: false, value: 'Q12A', topic: 'Transportation', label: 'Q12A. In general, how easy or hard is it for you to get where you need to go, such as to work?' },
  { selected: false, value: 'Q12B', topic: 'Transportation', label: 'Q12B. In general, how easy or hard is it for you to get where you need to go, such as to school (for you or your child)?' },
  { selected: false, value: 'Q12C', topic: 'Transportation', label: 'Q12C. In general, how easy or hard is it for you to get where you need to go, such as to your child(ren)’s child care?' },
  { selected: false, value: 'Q12D', topic: 'Transportation', label: 'Q12D. In general, how easy or hard is it for you to get where you need to go, such as to get food/groceries?' },
  { selected: false, value: 'Q12E', topic: 'Transportation', label: 'Q12E. In general, how easy or hard is it for you to get where you need to go, such as to run other errands?' },
  { selected: false, value: 'Q12F', topic: 'Transportation', label: 'Q12F. In general, how easy or hard is it for you to get where you need to go, such as to a clinic, pharmacy, or other place to get health care?' },
  { selected: false, value: 'Q12G', topic: 'Transportation', label: 'Q12G. In general, how easy or hard is it for you to get where you need to go, such as to entertainment or recreation activities?' },
  { selected: false, value: 'Q12H', topic: 'Transportation', label: 'Q12H. In general, how easy or hard is t for you to get where you need to go, such as to social service agencies?' },
  { selected: false, value: 'Q13A', topic: 'Transportation', label: 'Q13A. Please rate these aspects of transportation in the East Metro: Public transit routes available' },
  { selected: false, value: 'Q13B', topic: 'Transportation', label: 'Q13B. Please rate these aspects of transportation in the East Metro: Condition and cleanliness of public transit stops and shelters' },
  { selected: false, value: 'Q13C', topic: 'Transportation', label: 'Q13C. Please rate these aspects of transportation in the East Metro: Safety of public transit' },
  { selected: false, value: 'Q13D', topic: 'Transportation', label: 'Q13D. Please rate these aspects of transportation in the East Metro: Cost to use public transit' },
  { selected: false, value: 'Q13E', topic: 'Transportation', label: 'Q13E. Please rate these aspects of transportation in the East Metro: Road condition and maintenance' },
  { selected: false, value: 'Q13F', topic: 'Transportation', label: 'Q13F. Please rate these aspects of transportation in the East Metro: Traffic conditions (congestion)' },
  { selected: false, value: 'Q13G', topic: 'Transportation', label: 'Q13G. Please rate these aspects of transportation in the East Metro: Pedestrian walkability and safety' },
  { selected: false, value: 'Q13H', topic: 'Transportation', label: 'Q13H. Please rate these aspects of transportation in the East Metro: Options for biking' },
  { selected: false, value: 'Q13I', topic: 'Transportation', label: 'Q13I. Please rate these aspects of transportation in the East Metro: Overall experience getting around the East Metro' },
  { selected: false, value: 'Q14', topic: 'Transportation', label: 'Q14. Which transportation issues are most important to you?' },
  { selected: false, value: 'Q14', topic: 'Transportation', label: 'Q14. Which other transportation issues are most important to you?' },
  { selected: false, value: 'Q15', topic: 'Health', label: 'Q15. Do you currently have health care coverage?' },
  { selected: false, value: 'Q16', topic: 'Health', label: 'Q16. What kind of health insurance do you have?' },
  { selected: false, value: 'Q17', topic: 'Health', label: 'Q17. How worried are you about losing your health care coverage?' },
  { selected: false, value: 'Q18', topic: 'Health', label: 'Q18. How worried are you about not knowing what your insurance will pay for?' },
  { selected: false, value: 'Q19', topic: 'Health', label: 'Q19. How worried are you about paying for your health insurance premiums?' },
  { selected: false, value: 'Q20', topic: 'Health', label: 'Q20. How worried are you about having a serious illness or injury in your immediate family that creates major out-of- pocket medical expenses?' },
  { selected: false, value: 'Q21A', topic: 'Health', label: 'Q21A. In the past year, how often have you or anyone in your household used a doctor’s office or clinic?' },
  { selected: false, value: 'Q21B', topic: 'Health', label: 'Q21B. In the past year, how often have you or anyone in your household used an emergency room?' },
  { selected: false, value: 'Q21C', topic: 'Health', label: 'Q21C. In the past year, how often have you or anyone in your household used an urgent care center?' },
  { selected: false, value: 'Q21D', topic: 'Health', label: 'Q21D. In the past year, how often have you or anyone in your household used a hospital?' },
  { selected: false, value: 'Q21E', topic: 'Health', label: 'Q21E. In the past year, how often have you or anyone in your household used a mental or behavioral health provider?' },
  { selected: false, value: 'Q21F', topic: 'Health', label: 'Q21F. In the past year, how often have you or anyone in your household used a chemical dependency treatment provider?' },
  { selected: false, value: 'Q21G', topic: 'Health', label: 'Q21G. In the past year, how often have you or anyone in your household used a pharmacy?' },
  { selected: false, value: 'Q21H', topic: 'Health', label: 'Q21H. In the past year, how often have you or anyone in your household used a spiritual or traditional healer or herbalist?' },
  { selected: false, value: 'Q21I', topic: 'Health', label: 'Q21I. In the past year, how often have you or anyone in your household used a chiropractor or osteopath?' },
  { selected: false, value: 'Q21J', topic: 'Health', label: 'Q21J. In the past year, how often have you or anyone in your household used integrative health care such as acupuncture, massage or energy work?' },
  { selected: false, value: 'Q21K', topic: 'Health', label: 'Q21K. In the past year, how often have you or anyone in your household used support groups?' },
  { selected: false, value: 'Q21L', topic: 'Health', label: 'Q21L. In the past year, how often have you or anyone in your household used a social worker or home visitor?' },
  { selected: false, value: 'Q21M', topic: 'Health', label: 'Q21M. In the past year, how often have you or anyone in your household used a nurse line or web app from your insurance provider?' },
  { selected: false, value: 'Q21N', topic: 'Health', label: 'Q21N. In the past year, how often have you or anyone in your household used the Internet (WebMD or other web sites)?' },
  { selected: false, value: 'Q22', topic: 'Health', label: 'Q22. Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek care at all for a physical health problem because you could not afford it?' },
  { selected: false, value: 'Q23', topic: 'Health', label: 'Q23. Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek care at all for an emotional or mental health problem because you could not afford it?' },
  { selected: false, value: 'Q24', topic: 'Health', label: 'Q24. Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek dental care for problems with your teeth or gums because you could not afford it?' },
  { selected: false, value: 'Q25A', topic: 'Economic opportunity and security', label: 'Q25A. Are you currently employed?' },
  { selected: false, value: 'Q25B', topic: 'Economic opportunity and security', label: 'Q25B. If currently employed, are you...' },
  { selected: false, value: 'Q25C', topic: 'Economic opportunity and security', label: 'Q25C. If not currently employed, are you...' },
  { selected: false, value: 'Q26', topic: 'Economic opportunity and security', label: 'Q26. Right now, is there anything that is making it hard for you to get a job or find a better job?' },
  { selected: false, value: 'Q27', topic: 'Economic opportunity and security', label: 'Q27. What are the top three barriers you face getting a job or finding a better job?' },
  { selected: false, value: 'Q27', topic: 'Economic opportunity and security', label: 'Q27. What other barriers do you face getting a job or finding a better job?' },
  { selected: false, value: 'Q28', topic: 'Economic opportunity and security', label: 'Q28. How worried are you about getting or finding a better job?' },
  { selected: false, value: 'Q29A', topic: 'Economic opportunity and security', label: 'Q29A. How worried are you about paying your rent or mortgage?' },
  { selected: false, value: 'Q29B', topic: 'Economic opportunity and security', label: 'Q29B. How worried are you about paying your utilities?' },
  { selected: false, value: 'Q29C', topic: 'Economic opportunity and security', label: 'Q29C. How worried are you about having enough money to put food on the table?' },
  { selected: false, value: 'Q29D', topic: 'Economic opportunity and security', label: 'Q29D. How worried are you about getting out of debt?' },
  { selected: false, value: 'Q29E', topic: 'Economic opportunity and security', label: 'Q29E. How worried are you about having enough money to retire on?' },
  { selected: false, value: 'Q29F', topic: 'Economic opportunity and security', label: 'Q29F. How worried are you about having to go to a nursing home when you are older?' },
  { selected: false, value: 'Q29G', topic: 'Economic opportunity and security', label: 'Q29G. How worried are you about needing to help a member of your family in financial trouble?' },
  { selected: false, value: 'Q29H', topic: 'Economic opportunity and security', label: 'Q29H. How worried are you about your economic security overall?' },
  { selected: false, value: 'Q30A', topic: 'Racial narratives in the news media', label: 'Q30A. How much do you agree or disagree that city and county governments treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30B', topic: 'Racial narratives in the news media', label: 'Q30B. How much do you agree or disagree that the state government treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30C', topic: 'Racial narratives in the news media', label: 'Q30C. How much do you agree or disagree that courts and the justice system treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30D', topic: 'Racial narratives in the news media', label: 'Q30D. How much do you agree or disagree that health care institutions treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30E', topic: 'Racial narratives in the news media', label: 'Q30E. How much do you agree or disagree that major companies treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30F', topic: 'Racial narratives in the news media', label: 'Q30F. How much do you agree or disagree that small businesses treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30G', topic: 'Racial narratives in the news media', label: 'Q30G. How much do you agree or disagree that law enforcement treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30H', topic: 'Racial narratives in the news media', label: 'Q30H. How much do you agree or disagree that public schools (K-12) treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30I', topic: 'Racial narratives in the news media', label: 'Q30I. How much do you agree or disagree that colleges and universities treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30J', topic: 'Racial narratives in the news media', label: 'Q30J. How much do you agree or disagree that organized religion treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30K', topic: 'Racial narratives in the news media', label: 'Q30K. How much do you agree or disagree that the local news media treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30L', topic: 'Racial narratives in the news media', label: 'Q30L. How much do you agree or disagree that the national news media treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30M', topic: 'Racial narratives in the news media', label: 'Q30M. How much do you agree or disagree that labor unions treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q30N', topic: 'Racial narratives in the news media', label: 'Q30N. How much do you agree or disagree that charitable organizations treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q31', topic: 'Racial narratives in the news media', label: 'Q31. Please list up to three local news media sources you prefer for news and information.' },
  { selected: false, value: 'Q32A', topic: 'Racial narratives in the news media', label: 'Q32A. How do you feel poor people are represented in local news media?' },
  { selected: false, value: 'Q32B', topic: 'Racial narratives in the news media', label: 'Q32B. How do you feel people with disabilities are represented in local news media?' },
  { selected: false, value: 'Q32C', topic: 'Racial narratives in the news media', label: 'Q32C. How do you feel immigrants and refugees are represented in local news media?' },
  { selected: false, value: 'Q32D', topic: 'Racial narratives in the news media', label: 'Q32D. How do you feel women are represented in local news media?' },
  { selected: false, value: 'Q32E', topic: 'Racial narratives in the news media', label: 'Q32E. How do you feel African Americans are represented in local news media?' },
  { selected: false, value: 'Q32F', topic: 'Racial narratives in the news media', label: 'Q32F. How do you feel veterans are represented in local news media?' },
  { selected: false, value: 'Q32G', topic: 'Racial narratives in the news media', label: 'Q32G. How do you feel Whites are represented in local news media?' },
  { selected: false, value: 'Q32H', topic: 'Racial narratives in the news media', label: 'Q32H. How do you feel American Indians are represented in local news media?' },
  { selected: false, value: 'Q32I', topic: 'Racial narratives in the news media', label: 'Q32I. How do you feel Christians are represented in local news media?' },
  { selected: false, value: 'Q32J', topic: 'Racial narratives in the news media', label: 'Q32J. How do you feel Asian Americans are represented in local news media?' },
  { selected: false, value: 'Q32K', topic: 'Racial narratives in the news media', label: 'Q32K. How do you feel people who have a criminal background are represented in local news media?' },
  { selected: false, value: 'Q32L', topic: 'Racial narratives in the news media', label: 'Q32L. How do you feel Hispanic or Latinx people are represented in local news media?' },
  { selected: false, value: 'Q32M', topic: 'Racial narratives in the news media', label: 'Q32M. How do you feel Muslims are represented in local news media?' },
  { selected: false, value: 'Q32N', topic: 'Racial narratives in the news media', label: 'Q32N. How do you feel people who are lesbian, gay, bisexual, and/or transgender are represented in local news media?' },
  { selected: false, value: 'Q33A', topic: 'Racial narratives in the news media', label: 'Q33A. Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that there are enough stories about my race/ethnic group in local news media?' },
  { selected: false, value: 'Q33B', topic: 'Racial narratives in the news media', label: 'Q33B. Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that positive stories about my race/ethnic group in local news media are limited to a few types of stories?' },
  { selected: false, value: 'Q33C', topic: 'Racial narratives in the news media', label: 'Q33C. Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that my race/ethnic group is often featured in local news media in connection with social problems?' },
  { selected: false, value: 'Q34', topic: 'Survey respondent demographic characteristics', label: 'Q34. Including you, how many adults age 18 and older live in your household?' },
  { selected: false, value: 'Q35A', topic: 'Survey respondent demographic characteristics', label: 'Q35A. How many children age 0-2 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
  { selected: false, value: 'Q35B', topic: 'Survey respondent demographic characteristics', label: 'Q35B. How many children age 3-4 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
  { selected: false, value: 'Q35C', topic: 'Survey respondent demographic characteristics', label: 'Q35C. How many children age 5-12 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
  { selected: false, value: 'Q35D', topic: 'Survey respondent demographic characteristics', label: 'Q35D. How many children age 13-17 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
  { selected: false, value: 'Q35', topic: 'Survey respondent demographic characteristics', label: 'Q35. How many children age 17 or younger live in your household? This includes biological or step-children, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
  { selected: false, value: 'Q36', topic: 'Survey respondent demographic characteristics', label: 'Q36. What is your age (in years)?' },
  { selected: false, value: 'Q37', topic: 'Survey respondent demographic characteristics', label: 'Q37. How do you identify your gender?' },
  { selected: false, value: 'Q38', topic: 'Survey respondent demographic characteristics', label: 'Q38. What are the primary language(s) spoken in your household?' },
  { selected: false, value: 'Q38', topic: 'Survey respondent demographic characteristics', label: 'Q38. What other primary language(s) are spoken in your household?' },
  { selected: false, value: 'Q39', topic: 'Survey respondent demographic characteristics', label: 'Q39. How do you identify your race/ethnicity?' },
  { selected: false, value: 'Q40', topic: 'Survey respondent demographic characteristics', label: 'Q40. Please indicate which cultural or ethnic groups are a part of your identity, or fill in the blank if appropriate.' },
  { selected: false, value: 'Q40', topic: 'Survey respondent demographic characteristics', label: 'Q40. Please indicate which other cultural or ethnic groups are a part of your identity.' },
  { selected: false, value: 'Q41', topic: 'Survey respondent demographic characteristics', label: 'Q41. What is the highest level of education you have completed?' },
  { selected: false, value: 'Q42', topic: 'Survey respondent demographic characteristics', label: 'Q42. What was your total (gross) household income in 2017 from all earners and all sources?' },  
]

//create topics list based on questions list
let topic_vals = [...new Set(QUESTIONS.map(question => question.topic))];
//let selected_topics = ['Housing'];
export const TOPICS = topic_vals.map((val) => {
  //return {selected: selected_topics.includes(val), value: val, label: val};
  return {value: val, label: val};
});

//list of result types available in data set
export const RESULTTYPES = [
  { selected: false, value: 'Results by region:', label: 'Results by region' },
  { selected: false, value: 'Results by gender:', label: 'Results by gender' },
  { selected: false, value: 'Results by age:', label: 'Results by age' },
  { selected: false, value: 'Results by education level:', label: 'Results by education level' },
  { selected: false, value: 'Results by household income:', label: 'Results by household income' },
  { selected: false, value: 'Results by housing status:', label: 'Results by housing status' },
  { selected: false, value: 'Results by home language:', label: 'Results by home language' },
  { selected: false, value: 'Results by race/ethnicity:', label: 'Results by race/ethnicity' },
];
