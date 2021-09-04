# ProjectEduApp

This is a fork from the ProjectEdu's repository, an app I helped develop during my 1st scientific initiation. See "screenshots" for some in app images.

### What is ProjectEdu
ProjectEdu is a mobile learning app designed to teach Project Management (PM) skills. PM competences are of great relevance in today's work environment, 
especially in computer science. However, the subject is generally addressed only in a theoretical and unengaging way. ProjectEdu aims to solve this problem
by offering a more interactive and interesting learning method, taking advantage of the many resources present in today's mobile devices, such as audio and
video support, real time statistics about the learning process, and the possibility to interac with teachers and other students without the need to physically
be in the same classroom.

### What were my contributions
My biggest contribution was modularizing the app. At this point in development, the many different components and screens were tightly coupled.
Furthermore, labels, imagens, videos, content screens and texts were completely hard coded, and the app still had a lot of placeholder content.
Hence, my job was to modularize the app in a way that content could be expanded and modified more easily. This modularization enabled me to create
the foundations of the app's dynamic content screen generation system. In a nutshell, everytime the app is started, it fetches theoretical content 
inputted by the teacher using a backend application, and then it dynamically organizes that content and generates new screens for the student to 
visualize in the app.

As some smaller contributions, I helped correcting any glitchy GUIs, standardizing navigation between screens throughout the app, and any other 
problems that needed fixing.
