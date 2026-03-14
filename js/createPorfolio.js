var project = [
    {
        name: "Spotify Music Analyzer",
        tools: "Python, Django, Spotify API, Data Analysis",
        description: '<p>Web application that analyzes Spotify playlists using advanced audio feature extraction and statistical analysis. Implements machine learning algorithms to classify music preferences and generate personalized recommendations based on audio characteristics like tempo, energy, and valence.</p><a class="btn btn-dark btn-social" href="https://github.com/jenniferzliang/spotifyAnalyzer"><i class="fab fa-github"></i></a>',
        img: "assets/img/portfolio/spotify2.png"
    },
    {
        name: "CubeSat Detection System",
        tools: "OpenCV, TensorFlow, Computer Vision, Python",
        description: '<p>Machine learning system for autonomous detection of cube satellites using convolutional neural networks. Developed real-time computer vision algorithms and trained models on 300+ annotated images. Research contributed to academic paper on satellite detection optimization (DOI: 10.2514/6.2018-1604).</p>',
        img: "assets/img/portfolio/cubesat2.gif"
    },
    {
        name: "Fitness Platform",
        tools: "React.js, Firebase, Real-time Database",
        description: '<p>Full-stack web application for workout tracking and sharing. Built scalable real-time database architecture with Firebase, implemented responsive UI with React.js, and designed user authentication and social features for community workout sharing.</p><a class="btn btn-dark btn-social mx-2" href="https://dontsitbefit.web.app/"><i class="fas fa-link"></i></a>',
        img: "assets/img/portfolio/dontsitbefit2.png"
    },
    {
        name: "COVID-19 Data Tracker",
        tools: "Node.js, Angular, API Integration, Data Visualization",
        description: '<p>Interactive web application for real-time COVID-19 data visualization and analysis. Integrated with covid19api for live data feeds, implemented statistical analysis algorithms, and created dynamic charts for trend analysis across geographic regions.</p><a class="btn btn-dark btn-social" href="https://github.com/jenniferzliang/CovidStatsTracker-webApp"><i class="fab fa-github"></i></a>',
        img: ""
    }
];


function changeInfo(k) {
    document.getElementById("projectImg").src = project[k].img;
    document.getElementById("projectName").innerHTML = project[k].name;
    document.getElementById("projectDescription").innerHTML = project[k].description;
    document.getElementById("projectTools").innerHTML = project[k].tools;
}
