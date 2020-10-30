let resumeData = {
    "imagebaseurl": "https://ivy555.github.io/",
    "name": "Rahul Wahi",
    "headline": "Graduate Student | Looking for SDE Roles",
    "mail": "rahulwahi42@gmail.com",
    "phone": "(352) 871-3681",
    "address": "3800 SW 34th St, Gainesville, FL 32608",
    "linkedinId": "rahul-wahi",
    "skypeid": "Your skypeid",
    "website": "http://github.com/rahul-wahi",
    "roleDescription": "I like to learn and create applications in various parts of software development and like to learn about new technologies, write technical articles or simply play games in my free time.",
    "socialLinks": [
        {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/rahul-wahi/",
            "className": "fa fa-linkedin"
        },
        {
            "name": "github",
            "url": "http://github.com/rahul-wahi",
            "className": "fa fa-github"
        }
    ],
    "aboutme": "Currently a computer science graduate student at the University of Florida. I have 3+ years of experience as a Software Engineer working in the Agile Model. I am a highly motivated & result oriented Software Engineer with excellent problem-solving skills & a keen interest in developing Large Scale Distributed Systems and Web-applications.",
    "keySkills": ["Experience working in large scale backend application using AWS SWF, Spring, Java",
    "Expertise in Web application development using Html/CSS, Angular JS, Typescript, Java Spring Boot, Oracle DB",
    "Exposure to distributed systems by implementing Tapestry p2p overlay network, Twitter Clone, Bittorrent Clone, Network File System.",
    "Experience working with Docker, Containers, Jenkins, Jira."],
    "education": [
        {
            "universityName": "University of Florida",
            "specialization": "MS- CS",
            "endMonth": "May",
            "endYear": "2021",
            "startMonth": "Aug",
            "startYear": "2019",
            "Achievements": "Some Achievements",
            "GPA": "3.88 / 4"
        },
        {
            "universityName": "Delhi Technological University",
            "specialization": "BTech- ECE",
            "endMonth": "May",
            "endYear": "2015",
            "startMonth": "Aug",
            "startYear": "2011",
            "Achievements": "Some Achievements",
            "CGPA": "8.25 / 10"
        }
    ],
    "work": [
        {
            "companyName": "Amazon Web Services",
            "country": "USA",
            "role": "SDE Intern",
            "endMonth": "Aug",
            "endYear": "2020",
            "startMonth": "Jun",
            "startYear": "2020",
            "technologies": "Java, Spring Boot, SQL, Amazon SWF, Amazon EC2",
            "description": ["•\tWorked in an Agile model to design and implement the metric collection for upgrade process in RDS (managing MySQL, Postgres, MariaDB) to automate the collection of various DB upgrade statistics for 1000 of DB instances."
                , "•\tThese metrics will save the manual efforts of scanning the large log files and querying the DB for tracking the upgrade progress and detecting bottlenecks in the process."
                , "•\tRe-architected the existing system for improving the maintainability of the upgrade process."]
        },
        {
            "companyName": "Aricent",
            "country": "India",
            "role": "Software Engineer",
            "endMonth": "July",
            "endYear": "2019",
            "startMonth": "Nov",
            "startYear": "2015",
            "technologies": "Java, Spring Boot, SQL, Amazon SWF, Amazon EC2",
            "description": ["•\tParticipated in agile ceremonies (PI planning, Sprint planning, Sprint Retrospective) to break down the epics to story, story point estimation, grooming user stories.",
            "•\tTook initiatives to implement Test Case Prioritization tool in Python, and Log utilities in Perl that led to a 30% increase in team productivity",
            "•\tDesigned an innovative Combinatorial Automation framework from scratch to test REST APIs. This framework replaced the third-party framework which leads to an increase in team size from 3 to 6",
            "•\tContributed to the keyword-driven framework in QTP for automation testing of flex-based UI application and to Java/Selenium based Automation framework for automated testing of Web application and delivering 30 Automated test per month"]
        }
    ],
    "skillsDescription": "Your skills here",
    "skills": [
        {
            "languages": "Java, Python, C++, Elixir, Perl, VHDL"
        },
        {
            "webTechnologies": "HTML/CSS, JavaScript, TypeScript, Angular, React"
        },
        {
            "framework": "Spring, Spring Boot, Junit, JDBC, Mockito, Phoenix"
        },
        {
            "database": "MySQL, Oracle, PostgreSQL, AWS RDS, AWS S3"
        },
        {
            "platformAndTools": "AWS, JIRA, Dockers, UFT, Spyder, Jupyter, Git"
        },
        {
            "machineLearning": "Numpy, Scikit, Pandas, MatplotLib, MATLAB"
        }
    ],
    "projects": [
        {
            "name": "Network File System",
            "tags":["Distributed Systems", "File System"],
            "technologies": "Python, Networking, Git",
            "description": ["•\tCreating RPC-based NFS to run on a multi client-server system with logging, virtualization, and data redundancy"],
            "img": process.env.PUBLIC_URL + '/nfs.gif',
            "github":[]
        },
        {
            "name": "BitTorrent Clone",
            "tags":["Distributed Systems", "Socket Programming"],
            "technologies": "Java, Socket Programming, Multithreading, Git",
            "description": ["•\tImplementing Peer-to-Peer File Transfer using the BitTorrent file transfer protocol"],
            "img": process.env.PUBLIC_URL + '/peer-to-peer-network.png',
            "github":[]
        },
        {
            "name": "Twitter Clone Simulation",
            "tags":["Web", "Distributed Systems"],
            "technologies": "Elixir, HTML, CSS, JavaScript, Phoenix Framework, ExUnit, ETS Storage",
            "description": ["•\tCloned the twitter functionalities using the elixir phoenix framework.",
            "•\tEvaluated the twitting and querying efficiency by running a network of 1000 actors simulating the zipf-distribution behavior"],
            "img": process.env.PUBLIC_URL + '/twitter-dark.png',
            "github":["https://github.com/winsgoyal/twitterLike-engineByElixir"]
        },
        {
            "name": "Tapestry Overlay",
            "tags":["DistributedSystems"],
            "technologies": "Elixir, Git, Distributed Hash Table",
            "description": ["•\tImplemented a paper on ‘Resilient Tapestry Overlay Network’ using DHTs and back pointers. Evaluated the robustness of this P2P overlay network with 1000 nodes and 100 requests per node."],
            "img": process.env.PUBLIC_URL + '/Chord_network.png',
            "github":["https://github.com/Rahul-Wahi/Tapestry-Peer-to-Peer-Overlay-Network"]
        },
        {
            "name": "Web Application for Visual Data Analytics",
            "tags":["Web", "Angular"],
            "technologies": "HTML, CSS, JavaScript, AngularJS, Java, Spring Boot, OracleDB, Google Map API, Database Design",
            "description": ["•\tLead a team of 3 and developed an end-to-end Web application to provide visual analysis of 150,000 crime data showing different trends. "],
            "img": process.env.PUBLIC_URL + '/crimedata.png',
            "github":["https://github.com/Rahul-Wahi/DBMS-Frontend", "https://github.com/Rahul-Wahi/Crime-Analysis-Backend"],

        },
        {
            "name": "Task Scheduler",
            "tags":["Advance Data Structures"],
            "technologies": "Java, Git",
            "description": ["Implemented min heap and red-black tree for creating the task scheduler application"],
            "img": process.env.PUBLIC_URL + '/icon_scheduler.svg',
            "github":["https://github.com/Rahul-Wahi/MinHeap-and-RedBlack-Tree-"]
        }
    ]
}

export default resumeData