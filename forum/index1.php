<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>VIT Placements</title>
	<link rel="stylesheet" href="../css/style.css" type="text/css">	


<link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
<link rel="icon" type="../image/png" href="../favicons/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="../image/png" href="../favicons/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="../favicons/manifest.json">
<link rel="mask-icon" href="../favicons/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
</head>

<body>
    <!--#header-->
<div id = "super">
	<div id="main">
		<div id="header">
			<div id = "vitlogo">
				<img src = "../images/vit.jpg">
			</div>
			<h1 id="logo" class = "flipInX"><a href="../index.html">VIT<strong>Placements</strong></a> </h1>
			<nav>
				<ul class="nav">
    				<li><a href="../l_index.html">Home</a></li>
    				<li><a href="../pages/statistics.html">Stastics</a>
     					<ul>
     						<li><a href="#">Branch</a>
     							<ul>
     								<li><a href="../pages/cse.html">CSE</a></li>
     								<li><a href="../pages/ece.html">ECE</a></li>
     								<li><a href="../pages/eee.html">EEE</a></li>
     								<li><a href="../pages/mech.html">MECH</a></li>
     								<li><a href="../pages/civil.html">CIVIL</a></li>
     							</ul>
     						</li>
     						<li><a href="#">Batch</a>
     							<ul>
     								<li><a href="../pages/14.html">2010-14</a></li>
     								<li><a href="../pages/15.html">2011-15</a></li>
     								<li><a href="../pages/16.html">2012-16</a></li>
     							</ul>
     						</li>
     					</ul>
     					</li>
					<li><a href="../forum/index1.php">Forum</a></li>
     				<li><a href="../pages/companies.html">Companies</a></li>
     				<li><a href="../pages/about.html">About</a></li>
     			</ul>
			</nav>
	    </div>

        <div style=" border: 1px solid darkorange;border-radius: 25px; text-align: center;width: 460px;margin: auto;">
            <form method="POST" action="pages/login.php">
                <input type="text" placeholder="Username" name="username">
                <input type="password" placeholder="Password" name="password" required>
                <input type="submit" value="login">
            </form>
        </div>
    </div>
</div>
</body>
</html>