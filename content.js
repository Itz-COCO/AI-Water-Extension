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
// === DETECT WHICH AI SITE WE ARE ON ===
function detectProvider() {
    var url= window.location.hostname;
    if (url.includes('chat.openai.com') || url.includes('openai.com')) {
        return{ key: 'gpt4', name: 'GPT-4' , ml: 25 };
    } else if (url.includes('claude.ai') || url.includes('claude.ai') || url.includes('anthropic.com')) {
        return { key: 'claude-opus', name: 'Claude', ml: 20 };
    } else if (url.includes('gemini.google.com') || url.includes('aistudio.google.com')) {
        return { key: 'gemini', name: 'Gemini', ml: 22 };
    } else if (url.includes('grok.com') || url.includes('x.ai')) {
        return { key: 'grok', name: 'Grok', ml: 22 };
    } else if (url.includes('kimi.com') || url.includes('moonshot.cn')) {
        return { key: 'kimi', name: 'Kimi', ml: 18 };
    } else if (url.includes('manus.im')) {
        return { key: 'manus', name: 'Manus', ml: 20 };
    } else if (url.includes('meta.ai') || url.includes('ai.meta.com')) {
        return { key: 'meta-ai', name: 'Meta AI', ml: 15 };
    }
    return null;
    }
    // === CREATE FLOATING BADGE ===
    function createBadge(provider) {
        // Don't create if already exists
        if (document.getElementById('ai-water-badge')) return;
        var badge = 
        document.createElement('div');
        badge.id = 'ai-water-badge';
        badge.className = 'ai-water-badge';
        badge.innerHTML =
        '<div class="ai-water-badge-header">' + '<span class="ai-water-badge-icon">💧</span>' + '<span class="ai-water-badge-title">AI Water Tracker</span>' + 
        '</div>' + 
        '<div class="ai-water-badge-body">' + '<div class="ai-water-badge-row">' + '<span class="ai-water-badge-label">Provider:</span>' +
        '<span class="ai-water-badge-value">' + provider.name + '</span>' +
        '</div>' +
        '<div class="ai-water-badge-row">' + 
        '<span class="ai-water-badge-label">Water per query:</span>' + '<span class="ai-water-badge-value">' + provider.ml + ' ml</span>' +
        '</div>'
        '<div class="ai-water-badge-row">' + '<span class="ai-water-badge-label">Saved vs GPT-4:</span>' +
        '<span class="ai-water-badge-value saved">' + (25 - provider.ml) + ' ml/query</span>' +
        '</div>' + 
        '</div>';
        document.body.appendChild(badge);
        // Make it draggable
        makeDraggable(badge);
    }
    // === MAKE BADGE DRAGGABLE ===
    function makeDraggable(el) {
        var isDragging = false;
        var startX, startY, origX, origY;
        el.addEventListener('mousedown', function(e) {
            if (e.target.classList.contains('ai-water-badge-icon')) return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            var rect = el.getBoundingClientRect();
            origX = rect.left;
            origY = rect.top;
            el.style.transition = 'none';
        });
        document.addEventListener('mouse move', function(e) {
            if (!isDragging) return;
            el.style.left = (origX + e.clientX - startX) + 'px';
            el.style.top = (origY + e.clientY - startY) + 'px';
            el.style.right = 'auto';
        });
        document.addEventListener('mouseup', function() {
            isDragging = false;
            el.style.transition = '';
        });
    }
    // === RUN ON PAGE LOAD ===
    var provider = detectProvider();
    if (provider) {
        createBadge(provider);
    }

