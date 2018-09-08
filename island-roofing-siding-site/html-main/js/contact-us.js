$(document).ajaxComplete(function (event, xhr, settings) {
  if (settings.url.indexOf('basin') && xhr.status === 200) {
    setTimeout(() => {
      $('.quote-list').prepend(`
        <div class="form-thank-you col-md-8">
          <h2>Thank you!</h2>
          <span class="form-thank-you-message">We have received your message and will get back to you once we have read it.</span>
          <div class="form-thank-you-nav">
            <a href="index.html" class="btn">Return Home</a>
            <a href="contact.html" class="btn">Send Another</a>
          </div>
        </div>
      `);
      $('.freequote-content .quote-group').remove();
    }, 100);
  }
});