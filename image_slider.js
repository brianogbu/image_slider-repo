const first_image = document.getElementById('first_image')

const left_arrow = document.querySelector('.left')
const right_arrow = document.querySelector('.right')
function img_slider(index){
	
let img_arr = [
	'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VzfGVufDB8fDB8fHww',
	'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fHww',
	'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww',
	'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
	'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
	'https://images.unsplash.com/photo-1619216083420-6e54b895f730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D'
]
first_image.innerHTML = `<img src="${img_arr[index]}" alt"..." width="1000" height="600">`

} 
let curentIndex = 0
function changeleft() {
	
	img_slider(curentIndex)
console.log(curentIndex)
 left_arrow.addEventListener('click',() => {
	
if(curentIndex > 0){
	console.log(curentIndex)
	curentIndex--
	
}else {curentIndex = 0}
img_slider(curentIndex)	
})
}
function changeright(){

	img_slider(curentIndex)
right_arrow.addEventListener('click',() => {
	if(curentIndex < 5){
	console.log(curentIndex)
	 curentIndex++
	
}else if(curentIndex == 5){
    curentIndex = 5
	
}
img_slider(curentIndex)
 })
	
}
changeleft()
changeright()
