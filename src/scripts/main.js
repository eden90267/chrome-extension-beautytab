const count = 100;
const REQUEST_URL = `http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${count}/1`;
let data = '';

const showData = () => {
    let index = Math.floor(Math.random() * count);
    let str =
	`
	  <a href="${data[index].url}" class="thumbnail show-img-area" id="show-img-area" target="_blank">
	    <img src="${data[index].url}">
	  </a>
	`;
	document.querySelector('#show-img-box').innerHTML = str;
};

(function() {
	fetch(REQUEST_URL).then((response) => {
		return response.json();
	}).then((json) => {
		data = json.results;
		showData();
		const dislikeBtn = document.querySelector('#dislike-btn');
		dislikeBtn.addEventListener('click', showData);
	})
})();