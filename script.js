document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('form[action="/analyze"]');
    const textarea = document.querySelector('textarea[name="message"]');
    const submitButton = form.querySelector('input[type="submit"]');

    if (!form || !textarea || !submitButton) {
        console.log("Required elements not found");
        return;
    }

    // spam detection logic
    function detectSpam(message) {

        let text = message.toLowerCase();

        let spamWords = [
            "free",
            "win",
            "prize",
            "money",
            "offer",
            "click",
            "urgent",
            "limited",
            "bonus"
        ];

        for (let word of spamWords) {
            if (text.includes(word)) {
                return "Spam";
            }
        }

        return "Not Spam";
    }

    // intercept form submission
    form.addEventListener("submit", function (event) {

        event.preventDefault(); // THIS stops browser from going to /analyze

        let message = textarea.value.trim();

        if (message === "") {
            alert("Please enter a message first");
            return;
        }

        let result = detectSpam(message);

        alert("Spam Detection Result: " + result);

        console.log("Message:", message);
        console.log("Result:", result);

    });

});
