//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada','Pierce the Veil',
			   'Norma Jean','The Bled', 'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',     
			   'Anywhere But Here', 'An Old Dog'];


function stripArticles(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

 const sortedBands = bands.sort((a, b) => 
	 stripArticles(a).localeCompare(stripArticles(b)));


 //console.log(sortedBands);

const bandList = document.getElementById('bands');
        bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

