module.exports.config = {
 name: "ss",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Shahadat Islam",
 description: "Group এ সবাইকে নির্দিষ্ট সংখ্যায় মেনশন পাঠানো",
 commandCategory: "group",
 usages: "/ss [everyone]",
 cooldowns: 2
};

module.exports.run = async ({ api, event, args }) => {
 const threadID = event.threadID;
 const threadInfo = await api.getThreadInfo(threadID);
 const memberIDs = threadInfo.participantIDs;

 const repeatCount = parseInt(args[0]) || 1;

 const mentions = memberIDs
 .filter(id => id != api.getCurrentUserID())
 .map(id => ({ tag: "@everyone", id }));

 for (let i = 0; i < repeatCount; i++) {
 await api.sendMessage({
 body: `📢 @everyone\nআমাদের𝐒𝐒 𝐓𝐢𝐦𝐞 রাত 𝟗-𝟏𝟎 এই এক ঘন্টা সবাইকে কলে বাধ্যতামূলক থাকতে হবে না থাকলে রিমুভ করতে বাধ্য কর্তৃপক্ষ🤫🤫। কথা বলতে না পারলে মিউট করে কল সাপোর্ট দিবেন তাও কল আস্তে হবে🐸`,
 mentions
 }, threadID);

 await new Promise(resolve => setTimeout(resolve, 2000)); 
 }
};
