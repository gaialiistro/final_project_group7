
var endpoint = "http://localhost:7200/repositories/FINAL_PROJECT";
var lgbtq =``
var gender =``
var year =``
var movement =``
var medium =` `
var country =`  `

var general_query =`
SELECT DISTINCT ?artist ?label ?picture ?fullname
    WHERE {
        #artist
        ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
      	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
    	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
      optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
  		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
    	?artwork <http://www.art.com/ontologies/art/image> ?picture.
    	#lgbtq
  		`+ lgbtq +`
    	#gender
      `+ gender +`
    	#year
      `+ year +`
    	#movement
      `+ movement +`
    	#medium
      `+ medium +`
      #country
      `+ country +`
    } limit 10`

function selectGenderMale(str) {
  gender = `?artistdb <http://xmlns.com/foaf/0.1/gender> "male"@en.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
    document.getElementById("genderDiv").textContent = 'Male';
  //location.reload();

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return gender;
}
function selectGenderFemale(str) {
  gender = `?artistdb <http://xmlns.com/foaf/0.1/gender> "female"@en.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
    document.getElementById("genderDiv").textContent = 'Female';
  //location.reload();

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return gender;
}
function selectGenderNone(str) {
  gender = ``;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("genderDiv").textContent = 'Either gender';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return gender;
}
function lgbtq_artist(str) {
  lgbtq = `?artist <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/lgbtq_artist>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("lgbtqDiv").textContent = 'LGBTQ artist';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return lgbtq;
}
function heterosexual(str) {
  lgbtq = ``;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("lgbtqDiv").textContent = 'Either sexual orientation';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return lgbtq;
}
function countryItaly(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Italy>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Italy';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryUnited_States(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/United_States>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'United States';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryRussia(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Russia>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Russia';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryFrance(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/France>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'France';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryGermany(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Germany>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Germany';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryVaticanmedium(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Vatican_medium>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Vatican City';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryNetherlands(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Netherlands>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Netherlands';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryBrazil(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Brazil>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Brazil';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countrySpain(str) {
  country =` ?artwork <http://www.art.com/ontologies/art/location> <http://dbpedia.org/resource/Spain>. `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Spain';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function countryNone(str) {
  country =` `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Any country';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return country;
}
function centuryNone(str) {
  year =` `;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("countryDiv").textContent = 'Any century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century16th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter(<http://www.w3.org/2001/XMLSchema#integer>(?year) < 1600)
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1500)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '16th century';


  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century17th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter(<http://www.w3.org/2001/XMLSchema#integer>(?year) < 1700)
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1600)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '17th century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century15th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter(<http://www.w3.org/2001/XMLSchema#integer>(?year) < 1500)
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1400)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '15th century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century18th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter(<http://www.w3.org/2001/XMLSchema#integer>(?year) < 1800)
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1700)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '18th century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century19th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter(<http://www.w3.org/2001/XMLSchema#integer>(?year) < 1900)
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1800)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '19th century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function century20th(str) {
  year =`?artwork <http://www.art.com/ontologies/art/wasMadeIn> ?year.
      	#year filter
        filter (<http://www.w3.org/2001/XMLSchema#integer>(?year) > 1900)`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("centuryDiv").textContent = '20th century';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return year;
}
function Sculpture(str) {
  medium =`?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Sculpture>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("kindOfArtDiv").textContent = 'Sculpture';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return medium;
}
function mediumNone(str) {
  medium =``;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("kindOfArtDiv").textContent = 'Any medium';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return medium;
}
function Painting(str) {
  medium =`?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Painting>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("kindOfArtDiv").textContent = 'Painting';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return medium;
}
function oilPainting(str) {
  medium =`?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/oil_painting>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("kindOfArtDiv").textContent = 'Oil painting';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return medium;
}
function Fresco(str) {
  medium =`?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Fresco>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("kindOfArtDiv").textContent = 'Fresco';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return medium;
}
function movementNone(str) {
  movement =``;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Any art movement';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function Baroque(str) {
  movement =`?artistdb <http://www.art.com/ontologies/art/artMovement> <http://www.art.com/ontologies/art/Baroque>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Baroque';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function Realism(str) {
  movement =`?artistdb <http://www.art.com/ontologies/art/artMovement> <http://www.art.com/ontologies/art/Realism>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Realism';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function Impressionism(str) {
  movement =`?artistdb <http://www.art.com/ontologies/art/artMovement> <http://www.art.com/ontologies/art/Impressionism>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Impressionism';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function Expressionism(str) {
  movement =`?artistdb <http://www.art.com/ontologies/art/artMovement> <http://www.art.com/ontologies/art/Expressionism>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Expressionism';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function Cubism(str) {
  movement =`?artistdb <http://www.art.com/ontologies/art/artMovement> <http://www.art.com/ontologies/art/Cubism>.`;
  var general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
  //location.reload();
  document.getElementById("artMovDiv").textContent = 'Cubism';

  sparqlQueryJson(general_query, endpoint, myCallback, true);
  return movement;
}
function cancelFilters(str) {
   lgbtq =``
   gender =``
   year =``
   movement =``
   medium =` `
   country =`  `
   general_query =`
  SELECT DISTINCT ?artist ?label ?picture ?fullname
      WHERE {
          #artist
          ?artist <http://www.w3.org/2002/07/owl#sameAs> ?artistdb.
        	?artistdb <http://www.art.com/ontologies/art/authorOf> ?artwork.
      	optional{?artwork <http://www.art.com/ontologies/art/hasName> ?label.}
        optional{?artist <http://www.art.com/ontologies/art/hasFullName> ?fullname.}
    		?artwork <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.art.com/ontologies/art/Artwork>.
      	?artwork <http://www.art.com/ontologies/art/image> ?picture.
      	#lgbtq
    		`+ lgbtq +`
      	#gender
        `+ gender +`
      	#year
        `+ year +`
      	#movement
        `+ movement +`
      	#medium
        `+ medium +`
        #country
        `+ country +`
      } limit 10`
    document.getElementById("div1").textContent = " ";
    document.getElementById("genderDiv").textContent = ' ';
    document.getElementById("lgbtqDiv").textContent = ' ';
    document.getElementById("countryDiv").textContent = ' ';
    document.getElementById("centuryDiv").textContent = ' ';
    document.getElementById("kindOfArtDiv").textContent = ' ';
    document.getElementById("artMovDiv").textContent = ' ';
  //location.reload();

  sparqlQueryJson(general_query, endpoint, myCallback, true);
}
// Define a callback function to receive the SPARQL JSON result.
function myCallback(str) {
	// Convert result to JSON
	var jsonObj = eval('(' + str + ')');

	// Build up a table of results.
	var result = " <div class=\"row\">" ;
	for(var i = 0; i<  jsonObj.results.bindings.length; i++) {
    result +=  "<div class=\"column\"> <figure><img src=" +jsonObj.results.bindings[i].picture.value +  "style=\"width:100%\", alt=\"artwork\" > ";
    result += "<figcaption>" +(jsonObj.results.bindings[i].artist.value).split('/').pop() +", " + jsonObj.results.bindings[i].label.value+ "</figcaption> </figure> </div>"
		//result += " </tr></tr><tr><td>" + (jsonObj.results.bindings[i].artist.value).split('/').pop();;
		//result += " </td></tr><td>" + jsonObj.results.bindings[i].label.value;
	}
	result += "</div>" ;
	document.getElementById("results").innerHTML = result;
   var restultString = result.toString();
   var resultLen = restultString.length;
     if (resultLen === 24) {
      document.getElementById("div1").textContent = "Sorry, no artworks found";

}
}

// Make the query.
sparqlQueryJson(general_query, endpoint, myCallback, true);
