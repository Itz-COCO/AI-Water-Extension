// === WATER COST DATA === //
var waterCosts= {
    "gpt4": { name: "ChatGPT(GPT-4)", ml: 25 },
    "claude-opus": { name: "Claude(Opus)", ml: 20 },
    "gemini": { name: "Gemini(Advanced)", ml: 22 },
    "gpt3.5": { name: "ChatGPT(GPT-3.5)", ml: 10 },
    "claude-haiku": { name: "Claude(Haiku)", ml: 8 },
    "grok": { name: "Grok(xAI)", ml: 22 },
    "kimi": { name: "Kimi(Moonshot)", ml: 18 },
    "meta-ai": { name: "Meta AI", ml: 15 },
    "manus": { name: "Manus", ml: 20 },
    "local": { name: "Local AI(LLaMA)", ml: 2 }
};
var biggestML = 25;
// === CHEEKY REMARKS === //
var cheekyRemarks = [
    "Gng, you do know you could do all that yourself,right?",
    "And before you say it's not just AI use that takes water, believe me, I know, but doesn't mean you shouldn't be mindful.",
    "Fun fact: The water used to train AI models is more than the water used to train a human brain, let that sink in.",
    "Not to be a buzzkill but you're just incredibly wasteful, and I don't mean just water.",
    "Some day, you'll come to realize that your predecessors were right, and that AI is a waste of resources, but until then, enjoy your water bill.",
    "AI is a tool, not a solution. DO NOT us eit as a crutch for your own laziness.",
    "I heard some people spend hours yapping to AI models, pretty sad, but it is what it is.",
    "Are you a dweeb? Because you sure are acting like one.",
    "Oh my look who it is, AI enthusiast, 'efficieny' you phrase it for, but that's just your excuse for incompetency.",
    "You know, if you spent half the time you spend on AI, on learning a skill, you'd be a lot more useful to society.",
    "Since you use AI so much, what's the former name of Google Gemini? It was Bard, butchu prolly didn't know that.",
    "Literature and creativity are slowly dying because of AI,but hey, you do you.",
    "You're becoming a slave, a handicapped one, to AI, and you don't even realize it.",
    "I'm sure AI will be by your side when our natural resources are depleted, enjoy the carbon, tastes like chicken,innit.",
    "How many languages do you speak? Prolly not as many as the AIs you use, smh bro.",
    "Well if  you do wanna use it, limit your prompts, your entire convo could be sorted out in one prompt, but I guess you're too short-sighted to even realize.",
    "Not just with AI, but be mindful of your everyday actions, they all have envuironmental consequences, stay woke gng.",
    "Open your eyes, I mean seriously. That's all I finna say to you."
];
function getToday() {
    return new
    Date().toISOString().split('T')[0];
}
function isThisWeek(dateStr) {
    var now = new Date();
    var d = new Date(dateStr);
    var oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return d >= oneWeekAgo;
}
function isThisMonth(dateStr) {
    var now = new Date();
    var d = new Date(dateStr);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}
function loadStats() {
    chrome.storage.local.get(['waterTracker'], function(result) {
        var tracker = result.waterTracker || [];
        var todayWater = 0,
        weekWater = 0,
        monthWater = 0,
        monthSaved = 0;
        var today = getToday();
        tracker.forEach(function(entry) {
            if (entry.date === today) todayWater += entry.waterUsed;
            if (isThisWeek(entry.date)) weekWater += entry.waterUsed;
            if (isThisMonth(entry.date)) {
                monthWater += entry.waterUsed;
                monthSaved += entry.waterSaved;
            }
        });
        document.getElementById('today-water').textContent = todayWater;
        document.getElementById('week-water').textContent = weekWater;
        document.getElementById('month-water').textContent = monthWater;
        document.getElementById('month-saved').textContent = monthSaved;
    });
}
function updateTrackerList() {
    chrome.storage.local.get(['waterTracker'], function(result) {
        var tracker = result.waterTracker || [];
        var today = getToday();
        var todayEntries = tracker.filter(function(entry) {
            return entry.date === today;
        });
        var listEl = document.getElementById('trackerList');
        if (todayEntries.length === 0) {
            listEl.innerHTML = '<p style="color: rgba(255,255,255,0.55); font-size: 0.75rem; text-align: center;">No data yet. Start calculating!</p>';
            return;
        }
        listEl.innerHTML = todayEntries.map(function(entry) {
            return '<div class="tracker-item"><span>' + entry.provider + '</span><span>' + entry.waterUsed + ' ml | ' + entry.queries + ' queries</span></div>';
        }).join('');
    });
}
document.getElementById('calcBtn').addEventListener('click', function()
{
    var provider = document.getElementById('popup-provider') .value;
var queries = parseInt(document.getElementById('popup-queries').value);
var waterPerQuery = waterCosts[provider] .ml;
var totalWater = queries * waterPerQuery;
if (queries > 0) {
    document.getElementById('popup-result') .textContent = '💧 ' + totalWater + ' ml';
    var saved = (biggestML - waterPerQuery) * queries;
    if (saved > 0) {
        document.getElementById('popup-saved') .textContent = ' ✅ ' + saved + ' ml saved vs GPT-4';
    } else{
        document.getElementById('popup-saved') .textContent= '';
    }
    var entry = {
        date: getToday(),
        provider: waterCosts[provider] .name,
        queries: queries,
        waterUsed: totalWater,
        waterSaved: saved > 0 ? saved : 0
    };
    chrome.storage.local.get(['waterTracker'], function(result) {
        var tracker = result.waterTracker || [];
        tracker.push(entry);
        chrome.storage.local.set({ waterTracker: tracker }, function() {
            loadStats();
            updateTrackerList();
        });
    });
} else {
    alert('Be fr 🤦, you gotta enter a valid number of queries, that is just common sense');
}
});
document.getElementById('clearBtn').addEventListener('click', function() 
{
    if (confirm('Do you really wanna clear all that data? This is irreversible btw!')) {
        chrome.storage.local.set({ waterTracker: [] }, function() {
            loadStats();
            updateTrackerList();
            document.getElementById('popup-result').textContent = '';
            document.getElementById('popup-saved').textContent = '';
        });
    }
});
function showCheekyRemark() {
    var remark = cheekyRemarks[Math.floor(Math.random() * cheekyRemarks.length)];
    document.getElementById('cheekyRemark').textContent = remark;
}
// Load everything on startup
loadStats();
updateTrackerList();
showCheekyRemark();
