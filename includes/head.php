<?php
$depth = ""; $URLstart = "/";
if($page!="home"){
    $depth="../../";
    $URLstart = $_SERVER['SERVER_NAME']."/".$depth;
};
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="theme-color" content="#1d1f20" />
<meta name="msapplication-navbutton-color" content="#1d1f20" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $URLstart; ?>src/icons/y-favicon-16.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $URLstart; ?>src/icons/y-favicon-32.png">

<link rel="stylesheet" href="<?php echo $URLstart; ?>ystyle.css">

<script defer src="<?php echo $URLstart; ?>node_modules/swup/dist/swup.min.js"></script>
<script defer src="<?php echo $URLstart; ?>yscript.js"></script>