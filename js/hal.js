// The MIT License (MIT)

// hal.js | Copyright (c) 2019 IGN

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// documentation on HAL API: https://api.archives-ouvertes.fr/docs/search/?schema=fields#fields


var getAllPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId+"%22&wt=json&fl=citationFull_s,docType_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  console.log(url);
  console.log(request.status);
  var parentJ = document.getElementById("pubJ");
  var parentC = document.getElementById("pubC");
  var parentB = document.getElementById("pubB");
  var parentW = document.getElementById("pubW");
  var parentO = document.getElementById("pubO");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data.response);
    console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // Log each doc id
      console.log(docs.docid)
    })
  };

  request.send();
}

var getJournalPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=docType_s:\"ART\"&fl=producedDateY_i,halId_s,fileMain_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  //console.log(url);

  var parentJ = document.getElementById("pubJ");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createPubHTML(docs, parentJ);
    })
  };

  request.send();
}


var getConfPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=docType_s:\"COMM\"&fl=producedDateY_i,halId_s,fileMain_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  //console.log(url);

  var parentC = document.getElementById("pubC");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createPubHTML(docs, parentC);
    })
  };

  request.send();
}

var getBookPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=docType_s:\"COUV\"&fl=producedDateY_i,halId_s,fileMain_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  //console.log(url);

  var parentB = document.getElementById("pubB");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createPubHTML(docs, parentB);
    })
  };

  request.send();
}


var getWorkshopPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=docType_s:\"POSTER\"&fl=producedDateY_i,halId_s,docType_s,fileMain_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  //console.log(url);

  var parentB = document.getElementById("pubW");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createPubHTML(docs, parentB);
    })
  };

  request.send();
}


var getOtherPublicationsAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=docType_s:(\"REPORT\" OR \"THESE\" OR \"HDR\" OR \"MEM\" OR \"OTHER\")&fl=producedDateY_i,halId_s,docType_s,fileMain_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  //console.log(url);

  var parentO = document.getElementById("pubO");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createPubHTML(docs, parentO);
    })
  };

  request.send();
}


var getInvitedTalksAuthor = function(halId){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  var url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22"+halId
    +"%22&wt=json&fl=citationFull_s&fq=invitedCommunication_s:1&fl=producedDateY_i,halId_s,docType_s,fileMainAnnex_s&sort=producedDateY_i desc";
  request.open('GET', url, true);
  console.log(url);

  var parentO = document.getElementById("talks");

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //console.log(data.response);
    //console.log(data.response.docs);
    data.response.docs.forEach(docs => {
      // first create the list element with the citation
      createTalkHTML(docs, parentO);
    })
  };

  request.send();
}



var createPubHTML = function(docs, parent){
  const listElement = document.createElement('li');
  listElement.innerHTML = docs.citationFull_s
  const appendChildElement = parent.appendChild(listElement);
}


var createTalkHTML = function(docs, parent){
  const listElement = document.createElement('li');
  listElement.innerHTML = docs.citationFull_s
  const appendChildElement = parent.appendChild(listElement);
}

var sort_by = function(field, reverse, primer){
   var key = function (x) {return primer ? primer(x[field]) : x[field]};

   return function (a,b) {
	  var A = key(a), B = key(b);
	  return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];
   }
}
