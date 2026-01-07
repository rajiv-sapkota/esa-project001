
/**
 * Sends a message to the Tongyi Qianwen API (qwen-turbo) via DashScope.
 * 
 * @param {string} apiKey - The user's DashScope API Key.
 * @param {Array} messages - The conversation history [{role: 'user'|'assistant', content: string}].
 * @returns {Promise<string>} - The content of the response.
 */
export const sendMessageToTongyi = async (apiKey, messages) => {
    const url = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'qwen-turbo',
                messages: messages
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "Error: No response from Tongyi.";

    } catch (error) {
        console.error("Tongyi API Error:", error);
        return `Connection failed: ${error.message}`;
    }
};
