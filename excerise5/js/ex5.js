
var selectField = document.getElementById("countries");
var country;

$.ajax( {
  url: "https://restcountries.eu/rest/v2/all",
  type: "GET",
  dataType: "json",
    success: function(data) {
    present_question(data);
    if (localStorage.selectedcountry) {
    	$('#countries').val(localStorage.selectedcountry);
    }
  },
  error: function() {
    console.log("error in the request");
  }
});


function present_question(data) { 
    var question = data;
    var answers = data;
    answers.push(data);
  for (var a=0;a<answers.length-1;a++) {
  	// console.log(answers[a]["name"]);
    //selectField.add(new Option(answers[a]["name"])) ;
    var countryOption = "<option value='" + answers[a].alpha3Code+"'>" + answers[a].name + "</option>";
    document.getElementById('countries').innerHTML += countryOption;

  }
}

// $("#countries").click(function(e) {
// 	var x = document.getElementById("countries").selectedIndex;
// 	var y = document.getElementById("countries").options;
// 	console.log("Index: " + y[x].index + " is " + y[x].text);
// 	console.log(y[x]);
// 	window.localStorage.setItem("countries", y[x].text);
// 	country = y[x];
// });
var courses = '[{"title": "PHP","reviews": [] },\
				{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5] },\
				{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5] },\
				{"title": "Machine Learning", "reviews":[5,5,4.5] }]';

	var kurs = JSON.parse(courses);

function parse_json(courses) {
	//var courses = JSON.stringify(courses);


	var duzina = kurs.length;

	for (var a=0;a<duzina;a++) {
		var duz = kurs[a]['reviews'].length;

		try {
		if (duz == "") {
			throw "No reviews"
			
		} else if (duz < 5) {
			throw "NOt enough";
			
		} else {
			var sum = 0;
			for (var i=0;i<duz;i++) {
				sum+=kurs[a]['reviews'][i]
				sum /= duz;
				}
				kurs[a]['areviews'] = sum.toFixed(1);
				console.log(sum.toFixed(1));
		}
	}   catch(err) {
		kurs[a]['areviews'] = err;
	}
 
		}


	return JSON.stringify(kurs);

}



 $('#countries').change(function(){

 	localStorage.setItem('selectedcountry', $('#countries').val());

    });




