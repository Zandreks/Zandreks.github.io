$("#contactForm")
  .validator()
  .on("submit", function(event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      formError();
      submitMSG(false, "Вы правильно заполнили форму?");
    } else {
      // everything looks good!
      event.preventDefault();
      submitForm();
    }
  });

function submitForm() {
  //$( "#form-submit" ).prop( "disabled", true );
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "https://test.too-asse.kz/mail.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success: function(text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      if (xhr.status === 0) {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    }
  });
}

function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Сообщение отправлено!");
}

function formError() {
  $("#contactForm")
    .removeClass()
    .addClass("shake animated")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass();
      }
    );
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-center tada animated text-success";
  } else {
    var msgClasses = "h3 text-center text-danger";
  }
  $("#msgSubmit")
    .removeClass()
    .addClass(msgClasses)
    .text(msg);
}
