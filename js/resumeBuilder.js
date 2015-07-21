
var formattedName = HTMLheaderName.replace("%data%", "Joy Thomas");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$ ("#header").append(formattedName);
$ ("#header").append(formattedRole); 

var bio = {
	"name": "Joy Thomas",
	"role": "Web Developer",
	"contact": {
		"email": "joythomas229@gmail.com",
		"phone": "817-677-8380",
		"github_username": "joylol"
	},
	"picture_URL": "images/myphoto.jpg",
	"welcome_message": "My Resume",
	"skills": ["HTML","CSS", "Javascript", "Bootstrap", "Programming", "Teaching"]
};

var education = {
	"schools": [
	{
		"name": "UTA",
		"city": "Arlington",
		"degree": "Bachelor of Science in Biology",
		"majors": ["Biology"],
		"years": "1999-2003",
		"url": "https://www.unt.edu/"
	},
	{
		"name": "UNT",
		"city": "Denton",
		"degree": "Masters of Science in Library Science",
		"majors": ["Library Science"],
		"years": "2009-2011",
		"url": "www.uta.edu/"
	}],
	"onlineCourse": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "June 24, 2015 - June 30, 2015",
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": "July 1, 2015 - July 6, 2015",
		"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
	},
	{
		"title": "Git and GitHub",
		"school": "Udacity",
		"dates": "July 6, 2015 - July 9, 2015",
		"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "July 10, 2015 - July 14, 2015",
		"url": "https://www.udacity.com/course/responsive-images--ud882"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": "July 17 - ",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}]
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
	}]
};

var project = {
	"projects": [
	{
		"title": "P0: About Me Page",
		"dates": "July 8, 2015",
		"description": "My first Udacity Front End Nanodegree project. Using a template, HTML, and CSS, I personalized a webpage to be about me.",
		"images": []
	},
	{
		"title": "P1: Porfolio",
		"dates": "July 8, 2015 - July 17, 2015",
		"description": "Using what I learned from the Udacity courses, HTML and CSS, Responsive Web Design Fundamentals, and Responsive Images, I created a portfolio page that is responsive and personalized.",
		"images": []

	}]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
}

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

function inName(){
	var intName = window.name;
	intName = intName.split(" ");
	console.log(intName);
	intName[1] = intName[1].toUpperCase();
	intName[0] = intName[0].slice(0,1).toUpperCase() + intName[0].slice(1).toLowerCase();
	return intName[0] + " " + intName[1];

}

var name = $("#name").text();

$("#main").append(internationalizeButton);

