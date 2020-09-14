<?php $page="about"; ?>
<html>
<head>
    <title>Yolan'About</title>
    <?php include dirname(dirname(__FILE__)).'/includes/head.php'; ?>
</head>
<body>
    <main id="swup">
        <a href="<?php echo $URLstart; ?>">hello world, here is ABOUT</a>
        <?php
            echo "</br>";
            echo dirname(__FILE__);
            echo "</br>";
            echo dirname(dirname(__FILE__));
            echo "</br>";
        ?>
    </main>
    <div id="y3trpage" class="transition-y3trpage"></div>
    <nav id="Y3"></nav>
</body>
</html>