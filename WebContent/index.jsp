<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8">
		<script src="javasc.js"></script>
		<link rel="stylesheet" href="style.css"/>
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	</head>
	<body>
	
		<div id="header" class="section w3-container w3-card-4">
			Header
			<div id="icons" class="w3-container">
			
			<div id="DisplayTime">
				This is Time 
			</div>
				<img class="lefticon" id="tile" src="lists.png" onclick="convertList()"/>
				<img class="lefticon" id="tile" src="tile8.png" onclick="convertCardSmall()"/>
				<img class="lefticon" id="tile" src="tile.png" onclick="convertCard()"/>
				<img class="lefticon" id="tile" src="status.png" onclick="DragDropStatus()"/>
				<img class="righticon" id="tile" src="sidebar.png" onclick="displaySideBar()"/>
			</div>
		</div>
		<br/>
		
		
		<div id="main" class="section w3-container w3-card-4">
			<!-- <div id="sidebar" style="display:none;" class="w3-container w3-card-4"> -->
			<div id="sidebar" class="w3-container w3-card-4">
				<a href="SFDC/login.jsp" target="framepost"> SFDC Login </a><br/> 
				<a href="FaceBook/login.jsp" target="framepost"> FaceBook Login </a><br/> 
				<a href="LinkedIn/login.jsp" target="framepost"> LinkedIn Login </a><br/> 
			</div>
			
			<div id="tsklist" class="w3-container w3-card-4" >
				<iframe name="framepost" style="width:100%; height:100%;">
				
				</iframe>
			</div>
			<!-- 
			<div id="tsklist" class="w3-container w3-card-4" >
				<div class="w3-panel w3-card-4 tasks" draggable="true" contenteditable="true" onkeyup="copyinfo(event)" onclick="displaySame(event)">
					Task 1
				</div>
				<div class="w3-panel w3-card-4 tasks" draggable="true" contenteditable="true" onkeyup="copyinfo(event)" onclick="displaySame(event)">
					Task 2
				</div>
				<div class="w3-panel w3-card-4 tasks" draggable="true" contenteditable="true" onkeyup="copyinfo(event)" onclick="displaySame(event)">
					Task 3
				</div>
				<div class="w3-panel w3-card-4 tasks" draggable="true" contenteditable="true" onkeyup="copyinfo(event)" onclick="displaySame(event)">
					Task 4
				</div>
			</div>
			
			<div id="tskinfo" class="w3-container w3-card-4" style="display:none;">
			
				<b><u> Summary </u></b>
				<div id="summary" class="w3-container w3-panel w3-card-2">
					
				</div>
				<b><u> Description </u></b>
				<div id="description" class="w3-container w3-panel w3-card-2" contenteditable="true" >
					<div id="OpenTime" onclick="getCurrentTime(event)">
						open Time -
					</div> <br/>
					
					<div id="CloseTime" onclick="getCloseTime()">
						Closed Time - 
					</div>
				</div>
				<b><u> History </u> </b>
				<div id="comment" class="w3-container w3-panel w3-card-2">
					
				</div>
				<b><u> Notes</u> </b>
				<div id="comtype" class="w3-container w3-panel w3-card-2" contenteditable="true">
					
				</div>
				<div id="combuttons">
					<input id="savebutton" type="button" onclick="addComments()" value="Add Comment"/>
				</div>
				
			</div>
			-->
		</div>
		<br/>
		<div id="footer" class="section w3-container w3-card-4">
			Footer
		</div>
		<br/>
	</body>
</html>
