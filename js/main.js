/*
setTimeout(function(){
	$('.images>img:nth-child(1)').css({
	transform:'translateX(-100%)'
	})
	$('.images>img:nth-child(2)').css({
		transform:'translateX(-100%)'
	})
	$('.images>img:nth-child(1)').one('transitionend',function(x){
		$(x.currentTarget).addClass('lastright').css({
			transform:'none'
		})
	})
},1500)

setTimeout(function(){
	$('.images>img:nth-child(2)').css({
		transform:'translateX(-200%)'
	})
	$('.images>img:nth-child(3)').css({
	transform:'translateX(-100%)'
	})
	$('.images>img:nth-child(2)').one('transitionend',function(x){
		$(x.currentTarget).addClass('lastright').css({
			transform:'none'
		})
	})
	
},3000)
setTimeout(function(){
	$('.images>img:nth-child(3)').css({
		transform:'translateX(-200%)'
	})
	$('.images>img:nth-child(1)').css({
	transform:'translateX(-100%)'
	})
	$('.images>img:nth-child(3)').one('transitionend',function(x){
		$(x.currentTarget).addClass('lastright').css({transform:'none'})
	})
	
},4500)
*/

$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')

let	 n=1
setInterval(()=>{
	$(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
	.one('transitionend',(e)=>{
		$(e.currentTarget).removeClass('leave').addClass('enter')
	})
	$(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
	n +=1
},1500)

function x(n){
	if(n>3){
		n=n%3
		if(n===0){
			n=3
		}
	}
	return n
}

