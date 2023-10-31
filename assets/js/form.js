$(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    const name = $("#name");
    const email = $("#email");
    const message = $("#message");
    const url =
      "https://script.google.com/macros/s/AKfycbzD6uMvxwkWoNx1LkVmaSh5vvGZ9BrwaoWXXNjOkRBMALsjpVCmbhys08vZOriaTx4/exec";
    const data = {
      name: name.val(),
      email: email.val(),
      message: message.val(),
    };

    // Open overlay
    $("#form-overlay").removeClass("d-none");

    $.ajax({
      type: "post",
      url: url,
      data: data,
      dataType: "JSON",
      // headers: {
      //   "Content-Type": "text/plain;charset=utf-8",
      // },
      success: function (data) {
        name.val("");
        email.val("");
        message.val("");
        $("#form-overlay").addClass("d-none");
      },
    });
  });
});
