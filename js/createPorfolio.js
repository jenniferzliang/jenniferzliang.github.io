var project = [
    {
        name: "Stay In Touch",
        tools: "Swift",
        description: '<p>Due to Covid-19 causing everyone to self-isolate, it has become easier to lose touch with friends and family. We created an iOS app to help users keep track of friends and family members, by keeping track of that last time you met.</p><a class="btn btn-dark btn-social" href="https://github.com/jenniferli1098/StayInTouch-iOS"><i class="fab fa-github"></i></a>',
        img: "assets/img/portfolio/stayintouch2.png"
    },
    {
        name: "Covid Tracker",
        tools: "Swift",
        description: '<p>Helps you search up most recent data of covid cases by location. Simulates a weather app.</p><a class="btn btn-dark btn-social" href="https://github.com/jenniferli1098/CovidStatsTracker-webApp"><i class="fab fa-github"></i></a>',
        img: ""
    },
    {
        name: "Spotify Analyzer",
        tools: "Python, Django, HTML, Spotify API",
        description: '<p>Analyzes your public playlists and searches up songs for song analysis</p><a class="btn btn-dark btn-social" href="https://github.com/jenniferli1098/spotifyAnalyzer"><i class="fab fa-github"></i></a>',
        img: "assets/img/portfolio/spotify2.png",

    },
    {
        name: "Book Cataloguer",
        tools: "Android Developer, Java, SQLite Database",
        description: '<p>Catalogues and compiles lists of books that you have read. Make calls to the OpenLibrary API to look up information of books.</p><a class="btn btn-dark btn-social mx-2" href="https://github.com/jenniferli1098/spotifyAnalyzer"><i class="fab fa-github"></i></a>',
        img: ""
    },
    {
        name: "CubeSat Detection",
        tools: "OpenCV, Tensor Flow",
        description:"Worked as a lab assistant for Dr Jian-Feng Shi in his research on optimizing the detection of cube satellites using convoluted neural networks. I used OpenCV to create real-time computer vision and gain further knowledge in machine vision. For his research, I helped extract ground data of more than 300 images to train neural networks. I was later acknowledged in his paper, 'CubeSat Simulation and Detection using Monocular Camera Images and Convolutional Neural Networks' DOI: 10.2514/6.2018-1604",
        img: "assets/img/portfolio/cubesat2.gif",
    },
    {
        name: "Zoroak",
        tools: "OpenCV, Raspberry Pi, Python",
        description:"As the final project in AP Physics, we created Zoroak, a remote soil analyzer. In a group of five, we used Raspberry Pi and Python to create an autonomous soil arm that extracts soil samples and analyzes the light spectra, temperature, and soil density. OpenCV was used to calibrate position and depth. Motion is adjusted in real time.",
        img: "assets/img/portfolio/zoroak2.jpg",
    },
    {
        name: "Arduino Projects",
        tools: "Arduino, C",
        description: "<br><b> Room Monitor </b><br>Gathers environmental measurements (eg. Light intensity, temperature, height), and displays it on an oLED. <br><b> Brick Breaker </b><br> Recreated the iconic game Brick Breaker using an oLED display as a monitor, push button, and potentiometer as a controller.",
        img: "assets/img/portfolio/arduino2.gif",
    },
    {
        name: "The Arctic Reading Club",
        tools: "Founder",
        description: '<p>Growing up as an avid reader, I loved exploring the world through books. With COVID-19 closing down services like libraries and community centers, I wanted to create a new outlet in which kids can come together and bond over books. Thus, The Arctic Reading Circle was born.</p><a class="btn btn-dark btn-social mx-2" href="https://thearcticreadingcircle.web.app"><i class="fas fa-link"></i></a>',
        img: "assets/img/portfolio/arc1.jpg",
    },
    {
        name: "Don't Sit Be Fit",
        tools: "ReactJS, Firebase",
        description: '<p>Due to gyms closing down due to Covid-19, it’s been increasingly harder for everyone to stay fit and maintain a healthy lifestyle, impacting both productivity and personal well-being. We wanted to build an easily accessible web application that allows users to view, track, and share their workout routines. An online platform where users can share and try new workouts, Don’t Sit Be Fit brings in the fun in training. 30 minutes of activity per day has never been easier.</p><a class="btn btn-dark btn-social mx-2" href="https://dontsitbefit.web.app/"><i class="fas fa-link"></i></a>',
        img: "assets/img/portfolio/dontsitbefit2.png",
    },

];


function changeInfo(k) {
    document.getElementById("projectImg").src = project[k].img;
    document.getElementById("projectName").innerHTML = project[k].name;
    document.getElementById("projectDescription").innerHTML = project[k].description;
    document.getElementById("projectTools").innerHTML = project[k].tools;
}
