
export async function handler(event) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      success: true,
      content: `
###IMAGE_PROMPT###
Test image prompt working.

###VIDEO_PROMPT###
Test video prompt working.

###HOOK###
Hook Line 1: Test hook one
Hook Line 2: Test hook two
Hook Line 3: Test hook three

###CAPTION###
Test caption working.

###DESCRIPTION###
Test description working.

###HASHTAGS###
#AI
#DigitalMarketing
#Freelancer
#Bangladesh
#OnlineIncome
#Automation
`
    })
  };
}
