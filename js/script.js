const timeStamp = '1624992785';
const key = '2eff8fc524be547d14002db344076d9d';
const md5 = 'f08e77dc3faf06734bb7444736dee8f9';

  fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${key}&hash=${md5}&limit=6`)
    .then((response) =>{
      return response.json();
    }).then((jsonParsed) =>{
      const divHero = document.querySelector('#herois');

      jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
      });


      console.log(jsonParsed);
    })
