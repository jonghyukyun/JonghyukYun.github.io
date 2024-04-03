---
layout: base
title: Home
permalink: /home/
---
<div class="content-container">
  <div class="text-container">
    <h2 style="font-size: 2rem;">Jonghyuk Yun</h2>
    <div>
      <p style="font-size: 1.5rem;">Ph.D. Student</p>
      <p style="font-size: 1.5rem;">jhyoun96@yonsei.ac.kr</p>
      <p style="font-size: 1.2rem;"><a href="https://www.cyphy.kaist.ac.kr/">Cyber-Physical Systems and Security (CyPhy) Lab</a></p>
      <p style="font-size: 1.2rem;"><a href="https://ee.yonsei.ac.kr/ee/index.do">School of Electrical and Electronic Engineering</a></p>
      <p style="font-size: 1.2rem;"><a href="https://yonsei.ac.kr/">Yonsei University, Seoul</a></p>
    </div>
    <div style="margin-top: 20px;">
      <a href="https://www.linkedin.com/in/jonghyuk-yun/" target="_blank" style="color: rgba(0, 0, 0, 0.5); text-decoration: none; margin-right: 10px; font-size: 1.2rem;">LinkedIn</a>
      <a href="https://scholar.google.com/citations?user=kxL5C0EAAAAJ&hl=ko" target="_blank" style="color: rgba(0, 0, 0, 0.5); text-decoration: none; font-size: 1.2rem;">Google Scholar</a>
    </div>
  </div>
  <img class="profile-image" src="/assets/current.png" alt="Jonghyuk Yun">
</div>

<!-- Add Line -->
<hr> 

<!-- About Me -->
<p style="font-size: 1.5rem;"><strong>About me</strong></p>

<p style="font-size: 1.2rem;">I am an Ph.D. student at <a href="https://www.cyphy-lab.org/">Cyber-Physical Systems and Security (CyPhy) Lab</a>, supervised by <a href="https://www.junhan.org">Prof. Jun Han</a>. My research focuses on the novel applications of sensors in mobile environments. Specifically, I am keen on developing innovative solutions for security and safety issues by augmenting physics models and sensing modalities. I received my B.S. degree from Electrical and Electronics Engineering at Konkuk University in 2022.</p>

<!-- Add Line -->
<hr> 

<!-- News -->
<p style="font-size: 1.5rem;"><strong>News</strong></p>
<ul style="font-size: 1.2rem;">
  <!-- <li>2024.3
    <ul>
      <li>Our paper "PowDew: Detecting Counterfeit Powdered Food Products using a Commodity Smartphone" is conditionally accpeted at <a href="https://www.sigmobile.org/mobisys/2024/">ACM MobiSys'24!</a>
      </li>
    </ul>
  </li> -->
  <li>2023.12
    <ul>
      <li>I won an excellence award in the system design and practice class held by <a href="http://asrc.yonsei.ac.kr/index.php">Automotive System IC Fusion Human Resource Research Center (ASRC)</a> at Yonsei University.
      </li>
    </ul>
  </li>
  <li>2023.5
    <ul>
      <li>Our demo, "Exploiting Indices for Man-in-the-Middle Attacks on Collaborative Unpooling Autoencoders" is accepted and will appear at <a href="https://www.sigmobile.org/mobisys/2023/">ACM MobiSys'23</a>.</li>
    </ul>
  </li>
  <li>2023.2
    <ul>
      <li>Our poster, "RampScope: Ramp-level Localization of Shared Mobility Devices using Sidewalk Ramps" won the Best Poster Award at ACM HotMobile'23. This poster accompanies our paper also presented at <a href="https://www.sigmobile.org/hotmobile/2023/">ACM HotMobile'23</a>.</li>
    </ul>
  </li>
  <li>2022.12
    <ul>
      <li>Our paper, "RampScope: Ramp-level Localization of Shared Mobility Devices using Sidewalk Ramps" is accepted and will appear at <a href="https://www.sigmobile.org/hotmobile/2023/">ACM HotMobile'23</a>.</li>
    </ul>
  </li>
</ul>


<style>
/* Desktop styles */
.content-container {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 50px;
}
.profile-image {
  height: auto;
  max-width: 30%;
}

/* Mobile styles */
@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .text-container {
    order: 2; /* This ensures the text container moves below the image */
    margin-right: 0; /* Removes the right margin on mobile */
    margin-top: 20px; /* Adds some space between the image and text */
  }
  .profile-image {
    order: 1; /* This ensures the image is above the text */
    max-width: 80%; /* Slightly enlarges the image on mobile */
    margin-bottom: 20px; /* Adds some space below the image */
  }
}
</style>