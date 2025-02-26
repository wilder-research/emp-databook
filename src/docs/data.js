//list of all questions in data set
export const QUESTIONS = [
  { selected: false, value: 'Q1_18', topic: 'Community connectedness', label: 'How long have you lived in the East Metro?' },
  { selected: false, value: 'Q1', topic: 'Community connectedness', label: 'What are the main reasons you choose to live here?' },
  { selected: false, value: 'Q1B', topic: 'Community connectedness', label: 'Please specify what are the other main reasons you choose to live here.' },
  { selected: false, value: 'Q2', topic: 'Community connectedness', label: 'Do you think of the East Metro as a place where you belong or just a place to live?' },
  { selected: false, value: 'Q3A', topic: 'Community connectedness', label: 'How would you rate the East Metro as a place to live?' },
  { selected: false, value: 'Q3B', topic: 'Community connectedness', label: 'How would you rate the East Metro as a place to raise children?' },
  { selected: false, value: 'Q3C', topic: 'Community connectedness', label: 'How would you rate the East Metro as a place to work?' },
  { selected: false, value: 'Q3D', topic: 'Community connectedness', label: 'How would you rate the East Metro on having high quality, affordable housing choices for all residents?' },
  { selected: false, value: 'Q3E', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s shopping, services, dining, and entertainment options?' },
  { selected: false, value: 'Q3F', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s parks and outdoor recreation areas?' },
  { selected: false, value: 'Q3G', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s cultural amenities such as museums, arts, music?' },
  { selected: false, value: 'Q3H', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s availability of fresh, local, affordable food?' },
  { selected: false, value: 'Q3I', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s openness and acceptance of people from different backgrounds?' },
  { selected: false, value: 'Q3J', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s community connectedness?' },
  { selected: false, value: 'Q3K', topic: 'Community connectedness', label: 'How would you rate the East Metro\'s overall quality of life?' },
  { selected: false, value: 'Q5_18', topic: 'Community connectedness', label: 'How much do you agree or disagree that you have a voice in the community where you live?' },
  { selected: false, value: 'Q1_21', topic: 'COVID-19', label: 'As a result of the COVID-19 pandemic, has your life...' },
  { selected: false, value: 'Q2_21', topic: 'COVID-19', label: 'What are the main areas of your life where COVID-19 has had a negative impact?' },
  { selected: false, value: 'Q2B_21', topic: 'COVID-19', label: 'Please specify what are the other main areas of your life where COVID-19 has had a negative impact.' },
  { selected: false, value: 'Q4', topic: 'Housing', label: 'What is your current housing situation?' },
  { selected: false, value: 'Q5', topic: 'Housing', label: 'What were your biggest housing-related concerns over the past year?' },
  { selected: false, value: 'Q7B_21', topic: 'Housing', label: 'If you had housing-related concerns over the past year, to what extent were these housing concerns caused by the COVID-19 pandemic?' },
  { selected: false, value: 'Q6A', topic: 'Education', label: 'Which types of child care are available to your household?' },
  { selected: false, value: 'Q6B', topic: 'Education', label: 'Which types early childhood education / preschool are available to your household?' },
  { selected: false, value: 'Q6C', topic: 'Education', label: 'Which types of out-of-school time activities and programs for school-age children are available to your household?' },
  { selected: false, value: 'Q6D', topic: 'Education', label: 'Which types of postsecondary education are available to your household?' },
  { selected: false, value: 'Q6E', topic: 'Education', label: 'Which types of career and technical education and job training are available to your household?' },
  { selected: false, value: 'Q8C_18', topic: 'Education', label: 'Which types of K-12 public and charter schools are available to your household?' },
  { selected: false, value: 'Q8D_18', topic: 'Education', label: 'Which types of K-12 private schools are available to your household?' },
  { selected: false, value: 'Q7', topic: 'Education', label: 'Do you have children age 18 or younger who live in your household?' },
  { selected: false, value: 'Q9', topic: 'Education', label: 'Do you believe your child(ren) will get more education after high school?' },
  { selected: false, value: 'Q12_21', topic: 'Education', label: 'How worried are you that the COVID-19 pandemic will affect your child(ren) and their learning?' },
  { selected: false, value: 'Q8', topic: 'Education', label: 'Which description best matches your college savings situation for the children who live in your household?' },
  { selected: false, value: 'Q10A_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following public (not charter) schools in your neighborhood?' },
  { selected: false, value: 'Q10B_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following public (not charter) schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10C_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following public charter schools in your neighborhood?' },
  { selected: false, value: 'Q10D_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following public charter schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10E_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following private schools in your neighborhood?' },
  { selected: false, value: 'Q10F_18', topic: 'Education', label: 'Do any of the children who live in your household attend any of the following private schools NOT in your neighborhood?' },
  { selected: false, value: 'Q10G_18', topic: 'Education', label: 'Are any of the children who live in your household homeschooled?' },
  { selected: false, value: 'Q10A', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to work?' },
  { selected: false, value: 'Q10B', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to school (for you or your child)?' },
  { selected: false, value: 'Q10C', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to your child(ren)’s child care?' },
  { selected: false, value: 'Q10D', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to get food/groceries?' },
  { selected: false, value: 'Q10E', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to run other errands?' },
  { selected: false, value: 'Q10F', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to a clinic, pharmacy, or other place to get health care?' },
  { selected: false, value: 'Q10G', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to entertainment or recreation activities?' },
  { selected: false, value: 'Q10H', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to social service agencies?' },
  { selected: false, value: 'Q10I', topic: 'Transportation', label: 'In general, how easy or hard is it for you to get where you need to go, such as to religious services?' },
  { selected: false, value: 'Q11A', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Public transit routes available' },
  { selected: false, value: 'Q11B', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Condition and cleanliness of public transit stops and shelters' },
  { selected: false, value: 'Q11C', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Safety of public transit (crime-related)' },
  { selected: false, value: 'Q11D', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Safety of public transit (health-related)' },
  { selected: false, value: 'Q11E', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Cost to use public transit' },
  { selected: false, value: 'Q11F', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Road condition and maintenance' },
  { selected: false, value: 'Q11G', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Traffic conditions (congestion)' },
  { selected: false, value: 'Q11H', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Pedestrian walkability and safety' },
  { selected: false, value: 'Q11I', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Options for biking' },
  { selected: false, value: 'Q11J', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Accessibility of public transit for older adults and people with disabilities' },
  { selected: false, value: 'Q11K', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Getting the rest of the way from the public transit stop to your destination (home, work, etc)' },
  { selected: false, value: 'Q11L', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Overall experience getting around the East Metro' },
  { selected: false, value: 'Q13C_18', topic: 'Transportation', label: 'Please rate these aspects of transportation in the East Metro: Safety of public transit' },
  { selected: false, value: 'Q12', topic: 'Transportation', label: 'Which transportation issues are most important to you?' },
  { selected: false, value: 'Q12B', topic: 'Transportation', label: 'Which other transportation issues are most important to you?' },
  { selected: false, value: 'Q13', topic: 'Health', label: 'Do you currently have health care coverage?' },
  { selected: false, value: 'Q16_18', topic: 'Health', label: 'What kind of health insurance do you have?' },
  { selected: false, value: 'Q14', topic: 'Health', label: 'How worried are you about losing your health care coverage?' },
  { selected: false, value: 'Q15', topic: 'Health', label: 'How worried are you about not knowing what your insurance will pay for?' },
  { selected: false, value: 'Q16', topic: 'Health', label: 'How worried are you about paying for your health insurance premiums?' },
  { selected: false, value: 'Q17', topic: 'Health', label: 'How worried are you about paying for your health insurance deductibles?' },
  { selected: false, value: 'Q18', topic: 'Health', label: 'How worried are you about you or a member of your household incurring major medical expenses due to serious injury or illness?' },
  { selected: false, value: 'Q21_21', topic: 'Health', label: 'Has your health insurance situation changed since the beginning of the COVID-19 pandemic?' },
  { selected: false, value: 'Q20_18', topic: 'Health', label: 'How worried are you about having a serious illness or injury in your immediate family that creates major out-of- pocket medical expenses?' },
  { selected: false, value: 'Q22_21', topic: 'Health', label: 'How worried are you about you or a member of your household incurring major medical expenses due to COVID-19 or any other serious injury or illness?' },
  { selected: false, value: 'Q21A_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a doctor’s office or clinic?' },
  { selected: false, value: 'Q21B_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used an emergency room?' },
  { selected: false, value: 'Q21C_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used an urgent care center?' },
  { selected: false, value: 'Q21D_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a hospital?' },
  { selected: false, value: 'Q21E_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a mental or behavioral health provider?' },
  { selected: false, value: 'Q21F_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a chemical dependency treatment provider?' },
  { selected: false, value: 'Q21G_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a pharmacy?' },
  { selected: false, value: 'Q21H_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a spiritual or traditional healer or herbalist?' },
  { selected: false, value: 'Q21I_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a chiropractor or osteopath?' },
  { selected: false, value: 'Q21J_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used integrative health care such as acupuncture, massage or energy work?' },
  { selected: false, value: 'Q21K_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used support groups?' },
  { selected: false, value: 'Q21L_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a social worker or home visitor?' },
  { selected: false, value: 'Q21M_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used a nurse line or web app from your insurance provider?' },
  { selected: false, value: 'Q21N_18', topic: 'Health', label: 'In the past year, how often have you or anyone in your household used the Internet (WebMD or other web sites)?' },
  { selected: false, value: 'Q19A', topic: 'Health', label: 'Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek care at all for a physical health problem because you could not afford it?' },
  { selected: false, value: 'Q19B', topic: 'Health', label: 'Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek care at all for an emotional or mental health problem because you could not afford it?' },
  { selected: false, value: 'Q19C', topic: 'Health', label: 'Was there any time during the past 12 months when you waited longer than you wanted to or didn’t seek dental care for problems with your teeth or gums because you could not afford it?' },
  { selected: false, value: 'Q25A_18', topic: 'Economic opportunity and security', label: 'Are you currently employed?' },
  { selected: false, value: 'Q25B_18', topic: 'Economic opportunity and security', label: 'If currently employed, are you...' },
  { selected: false, value: 'Q25C_18', topic: 'Economic opportunity and security', label: 'If not currently employed, are you...' },
  { selected: false, value: 'Q20', topic: 'Economic opportunity and security', label: 'Right now, is there anything that is making it hard for you to get a job or find a better job?' },
  { selected: false, value: 'Q21', topic: 'Economic opportunity and security', label: 'What are the top three barriers you face getting a job or finding a better job?' },
  { selected: false, value: 'Q21B', topic: 'Economic opportunity and security', label: 'What other barriers do you face getting a job or finding a better job?' },
  { selected: false, value: 'Q26A_21', topic: 'Economic opportunity and security', label: 'How worried are you that the COVID-19 pandemic will affect your economic well-being?' },
  { selected: false, value: 'Q26B_21', topic: 'Economic opportunity and security', label: 'How worried are you that the COVID-19 pandemic will affect the economy overall?' },
  //{ selected: false, value: 'Q21I', topic: 'Economic opportunity and security', label: 'How worried are you about getting or finding a better job?' },
  { selected: false, value: 'Q22A', topic: 'Economic opportunity and security', label: 'How worried are you about paying your rent or mortgage?' },
  { selected: false, value: 'Q22B', topic: 'Economic opportunity and security', label: 'How worried are you about paying your utilities?' },
  { selected: false, value: 'Q22C', topic: 'Economic opportunity and security', label: 'How worried are you about having enough money to put food on the table?' },
  { selected: false, value: 'Q22D', topic: 'Economic opportunity and security', label: 'How worried are you about getting out of debt?' },
  { selected: false, value: 'Q22E', topic: 'Economic opportunity and security', label: 'How worried are you about having enough money to retire on?' },
  { selected: false, value: 'Q22F', topic: 'Economic opportunity and security', label: 'How worried are you about having to go to a nursing home when you are older?' },
  { selected: false, value: 'Q22G', topic: 'Economic opportunity and security', label: 'How worried are you about needing to help a member of your family in financial trouble?' },
  { selected: false, value: 'Q22H', topic: 'Economic opportunity and security', label: 'How worried are you about your medical costs?' },
  { selected: false, value: 'Q22I', topic: 'Economic opportunity and security', label: 'How worried are you about getting a job or finding a better job?'},
  { selected: false, value: 'Q22J', topic: 'Economic opportunity and security', label: 'How worried are you about your economic security overall?' },
  { selected: false, value: 'Q23A', topic: 'Major issues in the community', label: 'How significant of an issue do you consider access to health care to be within the East Metro?' },
  { selected: false, value: 'Q23B', topic: 'Major issues in the community', label: 'How significant of an issue do you consider affordable child care to be within the East Metro?' },
  { selected: false, value: 'Q23C', topic: 'Major issues in the community', label: 'How significant of an issue do you consider education and social development of children and youth to be within the East Metro?' },
  { selected: false, value: 'Q23D', topic: 'Major issues in the community', label: 'How significant of an issue do you consider affordable housing to be within the East Metro?' },
  { selected: false, value: 'Q23E', topic: 'Major issues in the community', label: 'How significant of an issue do you consider climate change to be within the East Metro?' },
  { selected: false, value: 'Q23F', topic: 'Major issues in the community', label: 'How significant of an issue do you consider criminal justice reform to be within the East Metro?' },
  { selected: false, value: 'Q23G', topic: 'Major issues in the community', label: 'How significant of an issue do you consider living wages to be within the East Metro?' },
  { selected: false, value: 'Q23H', topic: 'Major issues in the community', label: 'How significant of an issue do you consider the local economy to be within the East Metro?' },
  { selected: false, value: 'Q23I', topic: 'Major issues in the community', label: 'How significant of an issue do you consider the economic impacts of the COVID-19 pandemic to be within the East Metro?' },
  { selected: false, value: 'Q23J', topic: 'Major issues in the community', label: 'How significant of an issue do you consider the health impacts of the COVID-19 pandemic to be within the East Metro?' },
  { selected: false, value: 'Q23K', topic: 'Major issues in the community', label: 'How significant of an issue do you consider opioid and other drug use to be within the East Metro?' },
  { selected: false, value: 'Q23L', topic: 'Major issues in the community', label: 'How significant of an issue do you consider political polarization to be within the East Metro?' },
  { selected: false, value: 'Q23M', topic: 'Major issues in the community', label: 'How significant of an issue do you consider civil unrest to be within the East Metro?' },
  { selected: false, value: 'Q23N', topic: 'Major issues in the community', label: 'How significant of an issue do you consider poverty to be within the East Metro?' },
  { selected: false, value: 'Q23O', topic: 'Major issues in the community', label: 'How significant of an issue do you consider racism to be within the East Metro?' },
  { selected: false, value: 'Q23P', topic: 'Major issues in the community', label: 'How significant of an issue do you consider safety/crime to be within the East Metro?' },
  { selected: false, value: 'Q23Q', topic: 'Major issues in the community', label: 'How significant of an issue do you consider transportation to be within the East Metro?' },
  { selected: false, value: 'Q23R', topic: 'Major issues in the community', label: 'How significant of an issue do you consider ageism and the well-being of older adults to be within the East Metro?' },
  { selected: false, value: 'Q24', topic: 'Major issues in the community', label: 'Which one of these issues is the most critical to the East Metro?' },
  { selected: false, value: 'Q25A', topic: 'Major issues in the community', label: 'How much do you agree or disagree that city and county governments treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25B', topic: 'Major issues in the community', label: 'How much do you agree or disagree that the state government treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25C', topic: 'Major issues in the community', label: 'How much do you agree or disagree that courts and the justice system treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25D', topic: 'Major issues in the community', label: 'How much do you agree or disagree that health care institutions treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25E', topic: 'Major issues in the community', label: 'How much do you agree or disagree that major companies treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25F', topic: 'Major issues in the community', label: 'How much do you agree or disagree that small businesses treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25G', topic: 'Major issues in the community', label: 'How much do you agree or disagree that law enforcement treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25H', topic: 'Major issues in the community', label: 'How much do you agree or disagree that public schools (K-12) treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25I', topic: 'Major issues in the community', label: 'How much do you agree or disagree that colleges and universities treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25J', topic: 'Major issues in the community', label: 'How much do you agree or disagree that organized religion treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25K', topic: 'Major issues in the community', label: 'How much do you agree or disagree that the local news media treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25L', topic: 'Major issues in the community', label: 'How much do you agree or disagree that the national news media treats people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25M', topic: 'Major issues in the community', label: 'How much do you agree or disagree that labor unions treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q25N', topic: 'Major issues in the community', label: 'How much do you agree or disagree that charitable organizations treat people of all races and ethnicities fairly?' },
  { selected: false, value: 'Q31_18', topic: 'Racial narratives in the news media', label: 'Please list up to three local news media sources you prefer for news and information.' },
  { selected: false, value: 'Q32A_18', topic: 'Racial narratives in the news media', label: 'How do you feel poor people are represented in local news media?' },
  { selected: false, value: 'Q32B_18', topic: 'Racial narratives in the news media', label: 'How do you feel people with disabilities are represented in local news media?' },
  { selected: false, value: 'Q32C_18', topic: 'Racial narratives in the news media', label: 'How do you feel immigrants and refugees are represented in local news media?' },
  { selected: false, value: 'Q32D_18', topic: 'Racial narratives in the news media', label: 'How do you feel women are represented in local news media?' },
  { selected: false, value: 'Q32E_18', topic: 'Racial narratives in the news media', label: 'How do you feel African Americans are represented in local news media?' },
  { selected: false, value: 'Q32F_18', topic: 'Racial narratives in the news media', label: 'How do you feel veterans are represented in local news media?' },
  { selected: false, value: 'Q32G_18', topic: 'Racial narratives in the news media', label: 'How do you feel Whites are represented in local news media?' },
  { selected: false, value: 'Q32H_18', topic: 'Racial narratives in the news media', label: 'How do you feel American Indians are represented in local news media?' },
  { selected: false, value: 'Q32I_18', topic: 'Racial narratives in the news media', label: 'How do you feel Christians are represented in local news media?' },
  { selected: false, value: 'Q32J_18', topic: 'Racial narratives in the news media', label: 'How do you feel Asian Americans are represented in local news media?' },
  { selected: false, value: 'Q32K_18', topic: 'Racial narratives in the news media', label: 'How do you feel people who have a criminal background are represented in local news media?' },
  { selected: false, value: 'Q32L_18', topic: 'Racial narratives in the news media', label: 'How do you feel Hispanic or Latinx people are represented in local news media?' },
  { selected: false, value: 'Q32M_18', topic: 'Racial narratives in the news media', label: 'How do you feel Muslims are represented in local news media?' },
  { selected: false, value: 'Q32N_18', topic: 'Racial narratives in the news media', label: 'How do you feel people who are lesbian, gay, bisexual, and/or transgender are represented in local news media?' },
  { selected: false, value: 'Q33A_18', topic: 'Racial narratives in the news media', label: 'Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that there are enough stories about my race/ethnic group in local news media?' },
  { selected: false, value: 'Q33B_18', topic: 'Racial narratives in the news media', label: 'Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that positive stories about my race/ethnic group in local news media are limited to a few types of stories?' },
  { selected: false, value: 'Q33C_18', topic: 'Racial narratives in the news media', label: 'Thinking about the racial/ethnic group that you most identify with, how much do you agree or disagree that my race/ethnic group is often featured in local news media in connection with social problems?' },
 // { selected: false, value: 'Q26', topic: 'Survey respondent demographic characteristics', label: 'Including you, how many adults age 18 and older live in your household?' },
 // { selected: false, value: 'Q27', topic: 'Survey respondent demographic characteristics', label: 'How many children age 17 or younger live in your household? This includes biological or step-children, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
 // { selected: false, value: 'Q27A', topic: 'Survey respondent demographic characteristics', label: 'How many children age 0-2 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
 // { selected: false, value: 'Q27B', topic: 'Survey respondent demographic characteristics', label: 'How many children age 3-4 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
 // { selected: false, value: 'Q27C', topic: 'Survey respondent demographic characteristics', label: 'How many children age 5-12 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
 // { selected: false, value: 'Q27D', topic: 'Survey respondent demographic characteristics', label: 'How many children age 13-17 live in your household? This includes biological or stepchildren, grandchildren, adopted children, or any other child who lives in your household more than half of the time.' },
 // { selected: false, value: 'Q28', topic: 'Survey respondent demographic characteristics', label: 'What is your age (in years)?' },
 // { selected: false, value: 'Q29', topic: 'Survey respondent demographic characteristics', label: 'How do you identify your gender?' },
 // { selected: false, value: 'Q30', topic: 'Survey respondent demographic characteristics', label: 'Do you identify as transgender?'}, 
 // { selected: false, value: 'Q31', topic: 'Survey respondent demographic characteristics', label: 'What are the primary language(s) spoken in your household?' },
 // { selected: false, value: 'Q31B', topic: 'Survey respondent demographic characteristics', label: 'What other primary language(s) are spoken in your household?' },
 // { selected: false, value: 'Q32', topic: 'Survey respondent demographic characteristics', label: 'How do you identify your race/ethnicity?' },
 // { selected: false, value: 'Q33', topic: 'Survey respondent demographic characteristics', label: 'Please indicate which cultural or ethnic groups are a part of your identity, or fill in the blank if appropriate.' },
 // { selected: false, value: 'Q33B', topic: 'Survey respondent demographic characteristics', label: 'Please indicate which other cultural or ethnic groups are a part of your identity.' },
 // { selected: false, value: 'Q34', topic: 'Survey respondent demographic characteristics', label: 'What is the highest level of education you have completed?' },
 // { selected: false, value: 'Q35', topic: 'Survey respondent demographic characteristics', label: 'What was your total (gross) household income [last year] from all earners and all sources?' },  
]

//create topics list based on questions list
let topic_vals = [...new Set(QUESTIONS.map(question => question.topic))];
//sort topics ascending, case insensitive
topic_vals.sort(function(a, b) {
  var A = a.toUpperCase(); // ignore upper and lowercase
  var B = b.toUpperCase(); // ignore upper and lowercase
  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0; // names must be equal
});
//let selected_topics = ['Housing'];
export const TOPICS = topic_vals.map((val) => {
  //return {selected: selected_topics.includes(val), value: val, label: val};
  return {value: val, label: val};
});

//list of result types available in data set
export const RESULTTYPES = [
  { selected: true, value: 'Results by region:', label: 'By region' },
  { selected: false, value: 'Results by gender:', label: 'By gender' },
  { selected: false, value: 'Results by age:', label: 'By age' },
  { selected: false, value: 'Results by education level:', label: 'By education level' },
  { selected: false, value: 'Results by household income:', label: 'By household income' },
  { selected: false, value: 'Results by housing status:', label: 'By housing status' },
  { selected: false, value: 'Results by home language:', label: 'By home language' },
  { selected: false, value: 'Results by race/ethnicity:', label: 'By race/ethnicity' },
  /*{ selected: true, value: 'Text responses:', label: 'Text responses (*by region*)' },*/
];

//list of years of data available
export const DATAYEARS = [
  { selected: false, value: '2018', label: '2018' },
  { selected: false, value: '2021', label: '2021' },
  { selected: true, value: '2024', label: '2024' },
];