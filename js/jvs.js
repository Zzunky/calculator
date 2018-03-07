	function count()
	{
	var a,b,c,operator;
	c=0;
	
	a=document.getElementById("txt1").value;
	b=document.getElementById("txt2").value;
	operator=document.getElementById("select").value;
	switch(operator)
	{
	 case"+":
	 c=parseInt(a)+parseInt(b);
	 break;
	 case"-":c=a-b;
	 break;
	 case"*":c=a*b;
	 break;
	 default:
	 c=a/b;
	 }
	 document.getElementById("result").value=c;
	 }