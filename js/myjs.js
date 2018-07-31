/*解决轮播图相互干扰的情况*/
$('#carousel-example-generic-big').carousel({
  interval: 2000
})
$('#carousel-example-generic-big').carousel({
  ipause: "hover"
})
$('#carousel-example-generic-big').carousel({
  keyboard: true
})


var smallBox=document.getElementById('small_box');
var windowHeight=document.documentElement.clientHeight;
var windowWidth=document.documentElement.clientWidth;
function show(){
		if(992>=windowWidth){
		smallBox.style.height=windowHeight;
		smallBox.style.position='fixed';
		smallBox.style.top='0px';
		smallBox.style.left='0px';
		smallBox.style.display='none';
	}else {
		smallBox.style.height=windowHeight;
		smallBox.style.position='fixed';
		smallBox.style.top='0px';
		smallBox.style.left='0px';
		smallBox.style.display='block';
	}

};
show();


//实时监测浏览器宽度；让小于中屏宽度992smallBox隐藏
window.onresize=function(){
	var windowWidth=document.documentElement.clientWidth;
	if(992>=windowWidth) {
		smallBox.style.display='none';
	}else {
		smallBox.style.display='block';
	}
}


//实时监测浏览器body展示高度；把body的展示高度除以19得到的值，加上‘百分号‘赋给showSize的padding 这样就实现的body展示页面高度改变时 showSize也在页面中显示
var showSize=document.getElementById('show_size');
console.log(showSize);
window.onresize=function(){
	var windowHeight=document.documentElement.clientHeight;
	var bili=windowHeight/19;
	showSize.style.paddingTop=bili+'%';
	showSize.style.paddingButtom=bili+'%';

	
}