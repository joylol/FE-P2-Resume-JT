
var bio = {
	"name": "Joy Thomas",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "(469) 616-3569",
		"email": "joythomas@outlook.com",
		"github": "joylol",
		"twitter": "@joyth0mas",
		"location": "Carrollton, TX"
	},
	"welcomeMessage": "My Resume",
	"skills": ["HTML","CSS", "Javascript", "Bootstrap", "Programming", "Teaching"],
	"bioPic": "images/myphoto.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedName + formattedRole); 

		for(contact in this.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
			formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		}

		var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
		$("#header").append(formattedBioPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcome);

		if(this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(i = 0; i < this.skills.length; i++) {
				var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Texas at Arlington",
			"location": "Arlington, TX",
			"degree": "Bachelor of Science in Biology",
			"majors": ["Biology"],
			"dates": 2003,
			"url": "https://www.uta.edu/"
		},
		{
			"name": "University of North Texas",
			"location": "Denton, TX",
			"degree": "Masters of Science in Library Science",
			"majors": ["Library Science"],
			"dates": 2011,
			"url": "https://www.unt.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Git and GitHub",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	],
	"display" : function(){
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedName + formattedDegree + formattedLocation + formattedDates + formattedMajors);
		}

		$(".education-entry:last").append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
			formattedURL = formattedURL.replace("%data%", "Link to course")
			$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedURL);
		}
	}
};

var work = {
	"jobs": [
	{
		"employer": "Arlington ISD - Lamar High School",
		"title": "Science Teacher",
		"location": "Arlington, TX",
		"dates": "2012 - 2015",
		"description": "Teach Biology, Pre-Ap Biology, Principles of Biomedical Science, and Anatomy & Physiology, provide structured, engaging, and safe learning environments for all students, and improve the learning outcomes of students by at least 20%."
	},
	{
		"employer": "UT Southwestern Medical Center",
		"title": "Research Technician II",
		"location": "Dallas, TX",
		"dates": "2010 - 2011",
		"description": "Culture bacteria, extract protein, and run various lab protocols such as PCR, gel electrophoresis, and Western blot."
	}],
	"display": function() {
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedJob);
		}
	}
};

var project = {
	"projects": [
	{
		"title": "P0: About Me Page",
		"dates": "July 8, 2015",
		"description": "My first Udacity Front End Nanodegree project. Using a template, HTML, and CSS, I personalized a webpage.",
		"images": "images/P0ScreenShot.PNG"
	},
	{
		"title": "P1: Porfolio",
		"dates": "July 8, 2015 - July 17, 2015",
		"description": "Using what I learned from the Udacity courses, HTML and CSS, Responsive Web Design Fundamentals, and Responsive Images, I created a portfolio page that is responsive and personalized.",
		"images": "images/P1ScreenShot.PNG"

	}],
	"display": function() {
		for(proj in project.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
			var formattedDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
			var formattedImage = HTMLprojectImage.replace("%data%", project.projects[proj].images);
			var formattedProject = formattedTitle + formattedDates + formattedDescription + formattedImage;
			$(".project-entry:last").append(formattedProject);
		}
	}
};

function displayWork() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedJob);
	}
}

displayWork();

bio.display();

project.display();

education.display();

function inName(){
	var intName = bio.name;
	intName = intName.split(" ");
	console.log(intName);
	intName[1] = intName[1].toUpperCase();
	intName[0] = intName[0].slice(0,1).toUpperCase() + intName[0].slice(1).toLowerCase();
	return intName[0] + " " + intName[1];

}



$("#main").append(internationalizeButton);

//To display a map:
$("#map-div").append(googleMap);
