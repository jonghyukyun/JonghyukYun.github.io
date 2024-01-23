<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C.V.</title>

  <style>
    /* CSS for section titles */
    .section-title {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: blue; /* Deep blue color for section titles */
    }

    /* CSS for service entries */
    .service-entry {
      display: table;
      width: 100%;
      margin-bottom: 20px;
    }

    .service-entry > div {
      display: table-row;
    }

    .service-entry > div > div {
      display: table-cell;
      vertical-align: top;
      padding-right: 15px;
    }

    .service-entry strong {
      font-weight: bold;
    }

    .service-entry .date {
      display: table-cell;
      vertical-align: top;
      text-align: right;
    }

    /* CSS for mobile screens */
    @media (max-width: 768px) {
      .date {
        white-space: nowrap;
      }
      .date br {
        display: none;
      }
      .date::after {
        content: ' ';
        display: block;
      }
    }
  </style>
</head>
<body>

<div class="section-title"><strong>Education</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;"> 
<!-- Yonsei University -->
<div style="display: table; width: 100%; margin-bottom: 20px;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 15px; vertical-align: top; width: 60%;">
      <strong>Yonsei University</strong>, Seoul, Korea<br>
      M.S./Ph.D. Student, Electrical and Electronic Engineering<br>
      Advisor: Jun Han
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; width: 40%; text-align: right;">
      Mar 2022 - Present
    </div>
  </div>
</div>

<!-- Konkuk University -->
<div style="display: table; width: 100%; margin-bottom: 20px;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 15px; vertical-align: top; width: 60%;">
      <strong>Konkuk University</strong>, Seoul, Korea<br>
      B.S., Electrical and Electronic Engineering
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; width: 40%; text-align: right;">
      Mar 2016 - Feb 2022
    </div>
  </div>
</div>

<!-- Publications -->
<div class="section-title"><strong>Publications</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;"> 

<!-- MobiSys'23 Demo -->
<strong>Exploiting Indices for Man-in-the-Middle Attacks on Collaborative Unpooling Autoencoders</strong><br>
Kichang Lee, <u>Jonghyuk Yun</u>, Jun Han, and JeongGil Ko<br>
ACM International Conference on Mobile Systems, Applications, and Services (<strong>MobiSys'23</strong>)<br>

<!-- HotMobile'23 -->
<strong>RampScope: Ramp-level Localization of Shared Mobility Devices using Sidewalk Ramps</strong><br>
<u>Jonghyuk Yun</u>, Gyuyeon Kim, Soundarya Ramesh, and Jun Han<br>
ACM International Workshop on Mobile Computing Systems and Applications (<strong>HotMobile'23</strong>)

<!-- Honors and Awards -->
<div class="section-title"><strong>Honors and Awards</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;">

<div style="display: table; width: 100%; margin-bottom: 20px;">
  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Excellence Award<br></strong>
      <span style="font-size: 0.8em;">System Design and Practice (1) (ASRC, Yonsei)</span>
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Dec 2023
    </div>
  </div>
  <!-- Repeat for other awards, following the same structure -->
  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Best Poster Award<br></strong>
      <span style="font-size: 0.8em;">ACM Workshop on Mobile Computing Systems and Applications (HotMobile'23)</span>
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Mar 2023
    </div>
  </div>
  <!-- Continue adding more entries here -->
  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Student Travel Grant<br></strong>
      <span style="font-size: 0.8em;">ACM Workshop on Mobile Computing Systems and Applications (HotMobile'23)</span>
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Mar 2023
    </div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Bronze Award<br></strong>
      <span style="font-size: 0.8em;">Konkuk University Software Contest</span>
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Dec 2021
    </div>
  </div>
</div>

<!-- Teaching Assistant -->
<div class="section-title"><strong>Teaching Assistant</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;">

<div style="display: table; width: 100%;">

  <!-- Internet-of-Things Security -->
  <div class="service-entry">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
        <strong>Internet-of-Things Security</strong><br>
        Electrical and Electronic Engineering, Yonsei
      </div>
      <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
        Fall 2023
      </div>
    </div>
  </div>

  <!-- Masters Thesis Research -->
  <div class="service-entry">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
        <strong>Masters Thesis Research</strong><br>
        Electrical and Electronic Engineering, Yonsei
      </div>
      <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
        Fall 2022
      </div>
    </div>
  </div>

  <!-- Advanced Electrical and Electronic Design Laboratory and Software Practice -->
  <div class="service-entry">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
        <strong>Advanced Electrical and Electronic Design Laboratory and Software Practice</strong><br>
        Electrical and Electronic Engineering, Konkuk
      </div>
      <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
        Fall 2021
      </div>
    </div>
  </div>
</div>

<!-- Research Experience -->
<div class="section-title"><strong>Research Experience</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;">

<div style="display: table; width: 100%;">

  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Research Intern</strong><br>
      Cyber-physical Systems and Security Lab (CyPhy Lab)
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Jan 2022 - Feb 2022
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
      <strong>Research Intern</strong><br>
      SkyAutonet 
    </div>
    <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
      Jul 2021 - Aug 2021
    </div>
  </div>
</div>

<!-- Professional Services -->
<div class="section-title"><strong>Professional Services</strong></div>
<hr style="margin-top: 5px; margin-bottom: 10px;">

<!-- Define a class for the service entries -->
<div class="service-entry">
  <div style="display: table; width: 100%;">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
        <strong>Service Title</strong><br>
        Description of the service
      </div>
      <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
        Date
      </div>
    </div>
  </div>
</div>

<!-- Repeat the service entries with the same structure for each service -->
<div class="service-entry">
  <div style="display: table; width: 100%;">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: top; padding-right: 15px;">
        <strong>Another Service Title</strong><br>
        Description of another service
      </div>
      <div class="date" style="display: table-cell; vertical-align: top; text-align: right;">
        Another Date
      </div>
    </div>
  </div>
</div>

</body>
</html>
