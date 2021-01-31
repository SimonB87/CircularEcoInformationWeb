<?php
$msg = "";

if (($_SERVER['REQUEST_METHOD'] == 'POST') && (! (empty($_POST['contact_message'])) )){

  $formerrors = false;

  if (isset($_POST['myname']) )  { $myname = filter_var($_POST['myname'], FILTER_SANITIZE_STRING ); } 
	if (isset($_POST['myemail']) )  { $myemail = filter_var($_POST['myemail'], FILTER_SANITIZE_STRING ); } 
  if (isset($_POST['mycomment']) ) { $mycomment = filter_var($_POST['mycomment'], FILTER_SANITIZE_STRING ); } 

  //echo "1 passing 3 inputs values" . $myname . $myemail . $mycomment ."<br>";

	if ($myname === '') {
    $err_name = '<div class="error">Jméno je povinné pro vyplnění.</div>';
    $formerrors = true;
  } 

  if ($myemail === '') {
    $err_email = '<div class="error">E-mail je povinný pro vyplnění.</div>';
    $formerrors = true;
  } 

  if ($mycomment === '') {
    $err_comment = '<div class="error">Zpráva je povinná pro vyplnění</div>';
    $formerrors = true;
  } 


	if ( !( $formerrors ) ) {
		$to				= 	"spravce@obcevkruhu.cz";
		$subject	=		"Na platformě www.obcevkruhu.cz došla zpráva od $myname -- Zpráva z kontaktního formuláře";
    $message	=		
    "<div style='max-width: 550px; margin: 0 auto; line-height: 1.5rem; font-size: 0.9rem;'>" . 

    "<h2 style='padding: 0; margin: 0; Margin: 0;text-align: left; line-height: 1.3; color: inherit; word-wrap: normal; font-family: Helvetica, Arial, sans-serif; margin-bottom: 10px; Margin-bottom: 10px; border-bottom: 3px solid #ffc600; padding-bottom: 10px;'>" .
    "Dobrý den, máte <strong> novou zprávu z kontaktního formuláře</strong>.</h2>" . 
    
    "<div>Jméno: <strong>". $myname . "</strong> <br>Emailová adrresa: <strong>" . $myemail . "</strong></div>" .
    
    "<div>Text zprávy: " . $mycomment . " </div> " .

		"<div> S pozdravem,<br> " .
		"Váš poskytovat serverových služeb <br> <br> <br>" .

		" PS <br> Neodpovídejte přímo na tento email, zašlete odpověď na adresu tazatele: " . $myemail . "<br><br>" .
    
    "<div>[ Šimon Buryan 20.12.2020 ]</div>" . 
    
    "</div>";

		$replyto	=		"From: $myemail \r\n".
                  "Reply-To: $myemail \r\n";
                  
    $headers = "Content-Type: text/html; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
      $msg = "<div id='formmessage' class='fields' style='width: 100%;'><h3 style='color:lightgreen;text-align:center;'>" . "Děkujeme za zaslání podmětu." . "</h3></div>";
    } else {
      $msg = "<div id='formmessage' class='fields' style='width: 100%;'><h3 style='color:coral;text-align:center;'>" . "Nastal problém ze zasláním podmětu." . "</h3></div>";
    }

  }

} 

?>
