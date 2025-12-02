module.exports.config = {
 name: "emoji_voice",
 version: "10.0",
 hasPermssion: 0,
 credits: "𝗦𝗵𝗮𝗵𝗮𝗱𝗮𝘁 𝗦𝗔𝗛𝗨",
 description: "Emoji দিলে কিউট মেয়ের ভয়েস পাঠাবে 😍",
 commandCategory: "noprefix",
 usages: "😘🥰😍",
 cooldowns: 5
};

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const emojiAudioMap = {
 "🥱": "https://files.catbox.moe/9pou40.mp3",
 "😁": "https://files.catbox.moe/60cwcg.mp3",
 "😌": "https://files.catbox.moe/epqwbx.mp3",
 "🥺": "https://files.catbox.moe/wc17iq.mp3",
 "🤭": "https://files.catbox.moe/cu0mpy.mp3",
 "😅": "https://files.catbox.moe/jl3pzb.mp3",
 "😏": "https://files.catbox.moe/z9e52r.mp3",
 "😞": "https://files.catbox.moe/tdimtx.mp3",
 "🤫": "https://files.catbox.moe/0uii99.mp3",
 "🍼": "https://files.catbox.moe/p6ht91.mp3",
 "🤔": "https://files.catbox.moe/hy6m6w.mp3",
 "🥰": "https://files.catbox.moe/dv9why.mp3",
 "🤦": "https://files.catbox.moe/ivlvoq.mp3",
 "😘": "https://files.catbox.moe/sbws0w.mp3",
 "😑": "https://files.catbox.moe/p78xfw.mp3",
 "😢": "https://files.catbox.moe/shxwj1.mp3",
 "🙊": "https://files.catbox.moe/3bejxv.mp3",
 "🤨": "https://files.catbox.moe/4aci0r.mp3",
 "😡": "https://files.catbox.moe/shxwj1.mp3",
 "🙈": "https://files.catbox.moe/3qc90y.mp3",
