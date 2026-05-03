export async function handler(event) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: [
        {
          text: `
###IMAGE_PROMPT###
A professional viral AI content design, dark modern background, glowing digital elements, high quality.

###VIDEO_PROMPT###
Create a 60-second short video explaining the selected topic in Bangla-English style.

###HOOK###
আপনি কি জানেন এই AI tool আপনার কাজ ১০ গুণ সহজ করে দিতে পারে?

###CAPTION###
AI tools এখন শুধু trend না, smart কাজ করার shortcut. আজ থেকেই ব্যবহার শুরু করুন।

###DESCRIPTION###
এই content pack social media post, reel, caption এবং hashtag এর জন্য তৈরি করা হয়েছে।

###HASHTAGS###
#AI #DigitalMarketing #Bangladesh #Freelancing #ContentCreation #Automation
`
        }
      ]
    })
  };
}
