require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "Mercedes~",
    GC_JID: process.env.GC_JID || "DxgUM6jXbj98t2TgtseHNM",
    DATABASE_URL: process.env.DATABASE_URL || "furii3L3ijdpwYB-vZ_jej7CxvNjFESk", // Your Db URL here(optional). Can either be mongodb or postreSQL
    BOT_REPO: process.env.BOT_REPO || "https://github.com/betingrich4/Mercedes",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *Marisel*",
};
