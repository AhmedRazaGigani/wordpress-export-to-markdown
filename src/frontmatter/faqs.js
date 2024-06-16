const cheerio = require('cheerio');

// get FAQs from content and transform them into front matter format
module.exports = (post) => {
    const faqs = [];
    const content = post.data.encoded[0]; // assuming content is in post.data.encoded[0]

    // Load the content into cheerio
    const $ = cheerio.load(content);

    // Find the FAQ block
    const faqBlock = $('div.wp-block-rank-math-faq-block');
    
    if (faqBlock.length > 0) {
        // Extract each FAQ item
        faqBlock.find('div.rank-math-faq-item').each((index, element) => {
            const question = $(element).find('h3.rank-math-question strong').text().trim();
            const answer = $(element).find('div.rank-math-answer').text().trim();
            if (question && answer) {
                faqs.push({ question, answer });
            }
        });
    }

    // Convert faqs array to a string representation
    const faqsString = faqs.map(faq => `- question: ${faq.question}\n\t\tanswer: ${faq.answer}`).join('\n');

    return faqsString;
};