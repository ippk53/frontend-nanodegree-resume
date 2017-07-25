//***********   Biography Data    ***********
var bio = {
    "name": "Isabelle Kyaw",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(412) 716-0119",
        "email": "poepoek53@gmail.com",
        "github": "ippk53",
        "twitter": "poepoek53",
        "location": "Tampa, FL"
    },
    "welcomeMessage": "Hello! Welcome to my site. ",
    "skills": ["HTML", "CSS", ".NET", "JAVASCRIPT"],
    "bioPic": "images/me.jpg"
};
//***********   Bio    ***********
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);



    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedWelcome, formattedbioPic);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++)
        {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
//***********   Education Data (Schools and Online Courses)   ***********

var education = {
    "schools": [
     {
        "name": "Colorado State University",
        "location": "Greenwood Village, CO, US",
        "degree": "BS",
        "majors": ["Information Technology"],
        "dates": "Expected Dec 2017"
     }],
    "onlineCourses": [
    {
      "title" : "Front End Web Development Nanodegree",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "http://www.udacity.com"
    },
    {
      "title" : "JavaScript",
      "school" : "Codecademy",
      "dates" : 2017,
      "url" : "https://www.codecademy.com/learn"
    }
  ]
};
//***********   Education    ***********
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolName, formattedschoolDegree,formattedschoolDates,formattedschoolLocation);

        if(education.schools[school].majors.length > 0){
            for(var i=0;i<education.schools[school].majors.length;i++){
                var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[i]);
                $('.education-entry:last').append(formattedMajor);
            }
    }
    }

    $("#education").append(HTMLonlineClasses);
    for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);

        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url);
        $(".education-entry:last").append(formattedonlineDates,formattedonlineURL);
    }
};

//***********   Work     ***********
var work = {
  "jobs": [
    {
      "employer": "Ultimate Medical Academy",
      "title": "Student Loan Counselor",
      "location": "Tampa, FL",
      "dates": "Sept. 2016 - Present",
      "description": "Verify accuracy of data with loan servicers and Department of Education resources, contact delinquent borrowers and advise them of their repayment responsibility and options, Counsel borrowers regarding the requirements for deferment, forbearance, rehabilitation and consolidation options , Act as liaison between student borrower and loan servicer to obtain verbal forbearances and to update borrower information ,verify exit interviews and in-school deferments."
    },
    {
      "employer": "U.S Army Reserve",
      "title": "Medical Supply Specialist (SGT) ",
      "location": "Coraopolis, PA",
      "dates": "Aug. 2011 - Present",
      "description" : "Perform inventory and financial management procedures, Assist Unit Coordinator, HR, to administer personnel, and general liability, Direct,plann and oversee staffs, performed quality control, and property management."
    },
    {
      "employer": "The Pennsylvania State University",
      "title": "Information Assistant",
      "location": "University Park, PA",
      "dates": "Aug. 2015- May 2016 ",
      "description": "Audited library’s catalog , Provided face-to-face and remote user reference services, Provided services for special projects as determined and scheduled by staff supervisor, Assisted in data entry and reporting processes, Supported independent research and learning."
    }
    ]
};

//***********   Work Function   ***********
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerTitle = formattedWorkLocation + formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

  // ***********   Projects   ***********
var projects = {
  "projects": [
    {
        "title": "Udacity Portfolio",
        "dates": "2017",
        "description": "This project was build to demonstrate an understanidng of HTML, CSS,  Bootstrap, and responsive images.",
        "images": ['images/portfolio.png']
    }
    ]
};

//***********   Projects Function   ***********
projects.display = function() {
    for (var project = 0; project< projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var x = 0; x < projects.projects[project].images.length; x++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[x]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
};
education.display();
work.display();
projects.display();
bio.display();
$("#mapDiv").append(googleMap);