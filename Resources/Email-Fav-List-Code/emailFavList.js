
function sendEmail() {
  var favContent = $( "#favourite-content" ).text();
  console.log(favContent);

  Email.send({
  	Host: "smtp.gmail.com",
  	Username : "<sender’s email address>",
  	Password : "<email password>",
  	To : '<recipient’s email address>',
  	From : "<sender’s email address>",
  	Subject : "<email subject>",
  	Body : favContent,
  	}).then(
  		message => alert("mail sent successfully")
  	);
}
