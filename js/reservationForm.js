
function changeImage(imgElement, imgPath) {
	imgElement.src = imgPath;
}

function styleControl(formElement) {
	formElement.style.backgroundColor = "#eee";
}

function hideStyle(formElement) {
	formElement.style.backgroundColor = "#fff";
}


$(document).ready(function() {
	$("#menu").click(function() {
		$("#navPanel").fadeIn('slow');
	});

	$("#navPanel").click(function () {
		$(this).fadeOut('slow');
	})
})