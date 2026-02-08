document.addEventListener("DOMContentLoaded", function () {

    const textarea = document.querySelector('textarea[name="message"]');
    const form = document.querySelector('form[action="/analyze"]');
    const submitButton = document.querySelector('input[type="submit"]');

    // auto focus textarea
    if (textarea) {
        textarea.focus();
    }

    // prevent form navigation for now
    if (form && submitButton) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();   // THIS stops navigation

            submitButton.value = "Analyzing...";
            submitButton.disabled = true;

            console.log("Message submitted:", textarea.value);

        });

    }

});
