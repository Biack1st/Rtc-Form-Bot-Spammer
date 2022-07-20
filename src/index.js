// DONT mess with unless you understand what you're doing
const fetch = require("node-fetch")

// Configurable variables
const REQUEST_SPEED = 1 // how often to send requests in seconds. Dont make it too low otherwise bot wont work lol
const tag = "biack1st" // your twitter tag. would recommend if you make it your real tag so tanooki knows what hit her
const emailAddress = "BIACK1ST_OWNS_YOU@gmail.com" // put a FAKE email address here. Make sure it has @gmail.com at the end or any other domain name. can both be a real domain or a fake one like "@fuckgoons.com"

const appealReasons = [
    "SHUT THE FUCK UP TANOOKI FUCK YOU BITCH",
    "L + fake news",
    "you suck ass",
    "bloxy news better",
    "close this form bitch",
    "fuck you",
    "Tanooki, you look like a blueberry",
    "you're a fucking idiot",
    "Tanooki, you're as stupid as ImKatt_. OH WAIT, YOU DATE IMKATT. Delusional retard",
    "BIACK1ST OWNS YOU BITCH ",
    "GET YOUR GOONS OUT HERE BITCH"
] // add/remove messages from this array.

// DONT MESS WITH UNLESS YOU KNOW WHAT YOU'RE DOING
async function getAppealReason() {
    return appealReasons[Math.floor(Math.random() * appealReasons.length)]
}

async function postForm() {
    try {
        const hsFormId = "1FAIpQLSeQm4uxsebdzKEI8jQXO2q8VIOCO-iKV9NE5DunOdjOOWMtEw"
        const hsEntry1 = "478437199"
        const hsEntry2 = "832721653"

        const startTime = new Date().getTime()
        const appealReason = await getAppealReason()

        const response = await fetch(`https://docs.google.com/forms/d/e/${hsFormId}/formResponse?entry.${hsEntry1}=${appealReason}&submit=Submit&entry.${hsEntry2}=${appealReason}&emailAddress=${emailAddress}`, {
            method: "POST",
        })

        if (! response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        else {
            console.log(`successfully sent appeal with message: ${appealReason} and as ${tag} ${emailAddress}. Time taken: ${new Date().getTime() - startTime} ms`)
        }
    }
    catch(e) {
        console.log(`failed to post on form because: ${e.message}`)
    }
}

console.log(`RTC BLOCK APPEAL SPAMMER BOT v1.0.0

Bot created by: @Biack1st on Twitter.
Bot is starting, please wait.
-----------------------------------------------------`)

postForm().then(async () => {
    setInterval(postForm, REQUEST_SPEED * 1000)
})
