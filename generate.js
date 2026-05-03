export async function handler(event) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `
###IMAGE_PROMPT###
A professional viral AI content design, dark modern background, glowing digital elements, high quality.

###VIDEO_PROMPT###
Create a 60-second short video explaining the selected topic in a clear, viral, Bangla-English style.

###HOOK###
আপনি কি জানেন এই টুলটা আপনার কাজ ১০ গুণ সহজ করে দিতে পারে?

###CAPTION###
AI tools এখন শুধু trend না, smart কাজ করার সবচেয়ে বড় shortcut. আজ থেকেই ব্যবহার শুরু করুন।

###DESCRIPTION###
এই content pack তৈরি করা হয়েছে social media post, reel, caption এবং hashtag এর জন্য। এটি Facebook এবং Instagram এর জন্য optimized.

###HASHTAGS###
#AI #DigitalMarketing #Bangladesh #Freelancing #ContentCreation #Automation
`
    })
  };
}
