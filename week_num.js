var week=0;var week_number=0;
week_num=function(){
	if(week==0){
	week=1;
	var d1=new Date();
	var d=new Date(""+d1.getFullYear()+"/1/1");
	var c=d.getDay();
	var d2=new Date(d1.getFullYear()+'/'+(d1.getMonth()+1)+'/'+d1.getDate());
	var Differ_Time=d2.getTime()-d.getTime();
	var Differ_Days=Differ_Time/(1000*3600*24);
	week_number=Math.floor(Differ_Days/7+1);
	if(Number.isInteger(Math.abs(d1.getFullYear()/4))){var tot_days=366;}else{var tot_days=365;};
	if(c<=3){if(Differ_Days<=7){week_number=53;};};
	return Differ_Days+'/'+tot_days+'/'+week_number;
	setTimeout(function(){week=1;},300000);
	}else{return;};
};
