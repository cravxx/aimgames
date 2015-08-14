var ColorList = Array("#FF0000", "#FF7700", "#FFFF00", "#00FF00", "#00FFFF", "#0077FF", "#9900FF");
var LastStr = "";

function IsWhiteSpace(my_c) {
	if (my_c == ' ') return true;
	if (my_c == '\t') return true;
	if (my_c == '\n') return true;
	if (my_c == '\r') return true;
	return false;
}
	
function ConvertInText(InStr) {
	//var InText = document.getElementById("InText");
	//var OutText = "";
	//if (InText && OutText) {
		//var InStr = InText;
		var OutStr = "";
		var InBBCode = false;
		var CurrCol = 0;
		
		if (InStr != LastStr) {
			
			//OutText.value = "";
			var x;
			for (x=0;x<InStr.length;x++) {
				if ((InStr.charAt(x)=='[') && (!InBBCode)) {
					InBBCode=true;
					OutStr += InStr.charAt(x);
				} else if ((InStr.charAt(x)==']') && (InBBCode)) {
					InBBCode=false;
					OutStr += InStr.charAt(x);
				} else if (IsWhiteSpace(InStr.charAt(x))) {
					OutStr += InStr.charAt(x);
				} else if (InBBCode) {
					OutStr += InStr.charAt(x);
				} else {
						OutStr += "[color="+ColorList[CurrCol]+"]"+InStr.charAt(x)+"[/color]";
					CurrCol = (CurrCol+1)%ColorList.length;
				}
			}
			
			return OutStr;
			LastStr = InStr;
		}
	//}
}
		
function Timer() {
	ConvertInText();
	setTimeout("Timer();", 100);
}
