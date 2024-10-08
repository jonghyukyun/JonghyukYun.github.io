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
      <p style="font-size: 1.5rem;">jonghyuk.yun@kaist.ac.kr</p>
      <p style="font-size: 1.2rem;"><a href="https://www.cyphy.kaist.ac.kr/">Cyber-Physical Systems and Security (CyPhy) Lab</a></p>
      <p style="font-size: 1.2rem;"><a href="https://cs.kaist.ac.kr/">School of Computing</a></p>
      <p style="font-size: 1.2rem;"><a href="https://kaist.ac.kr/kr/">KAIST, Daejeon</a></p>
    </div>
    <div style="margin-top: 20px;">
      <a href="https://www.linkedin.com/in/jonghyuk-yun/" target="_blank" style="text-decoration: none; margin-right: 20px; font-size: 1.2rem;">LinkedIn</a>
      <a href="https://scholar.google.com/citations?user=kxL5C0EAAAAJ&hl=ko" target="_blank" style="text-decoration: none; margin-right: 20px; font-size: 1.2rem;">Google Scholar</a>
      <a href="https://drive.google.com/file/d/1C_rXQkROTQj_1lglNde4ivFKlUcDAWi2/view?usp=sharing" target="_blank" style="text-decoration: none; font-size: 1.2rem;">C.V.</a>
    </div>
  </div>
  <img class="profile-image" src="/assets/current.png" alt="Jonghyuk Yun">
</div>

<!-- Add Line -->
<hr> 

<!-- About Me -->
<p style="font-size: 1.5rem;"><strong>About me</strong></p>

<p style="font-size: 1.2rem;">I am an Ph.D. student at <a href="https://www.cyphy-lab.org/">Cyber-Physical Systems and Security (CyPhy) Lab</a>, supervised by <a href="https://www.junhan.org">Prof. Jun Han</a>. My research interest lies in the novel use of sensors within mobile environments to tackle challenges pertinent to public health safety. In particular, I am keen on developing new solutions for security and safety issues related to public health by augmenting physics models and integrating diverse sensing modalities. I received my B.S. degree in Electrical and Electronics Engineering from Konkuk University (2022) and my M.S. degree in Electrical and Electronics Engineering from Yonsei University (2024).</p>

<!-- Add Line -->
<hr> 

<!-- News -->
<p style="font-size: 1.5rem;"><strong>News</strong></p>
<ul style="font-size: 1.2rem;">
  <li>2024.6
    <ul>
      <li><strong><span style="color:red">(NEW)</span></strong> Our paper "<i>PowDew</i>: Detecting Counterfeit Powdered Food Products using a Commodity Smartphone" won the <strong><span style="color:red">Best Paper Award 🏆 </span></strong> at <a href="https://www.sigmobile.org/mobisys/2024/">ACM MobiSys'24!</a>
      </li>
    </ul>
  </li>
  <li>2024.4 
    <ul>
      <li><strong><span style="color:red">(NEW)</span></strong> Our poster "Towards Counterfeit Powdered Food Products Detection using a Commodity Smartphone" is accepted and will appear at <a href="https://www.sigmobile.org/mobisys/2024/">ACM MobiSys'24!</a>
      </li>
      <li><strong><span style="color:red">(NEW)</span></strong> Our paper "<i>PowDew</i>: Detecting Counterfeit Powdered Food Products using a Commodity Smartphone" is accepted and will appear at <a href="https://www.sigmobile.org/mobisys/2024/">ACM MobiSys'24!</a>
      </li>
    </ul>
  </li>
  <li>2023.12
    <ul>
      <li>I won an excellence award 🏆 in the system design and practice class held by <a href="http://asrc.yonsei.ac.kr/index.php">Automotive System IC Fusion Human Resource Research Center (ASRC)</a> at Yonsei University.
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
      <li>Our poster, "<i>RampScope</i>: Ramp-level Localization of Shared Mobility Devices using Sidewalk Ramps" won the Best Poster Award 🏆 at ACM HotMobile'23. This poster accompanies our paper also presented at <a href="https://www.sigmobile.org/hotmobile/2023/">ACM HotMobile'23</a>.</li>
    </ul>
  </li>
  <li>2022.12
    <ul>
      <li>Our paper, "<i>RampScope</i>: Ramp-level Localization of Shared Mobility Devices using Sidewalk Ramps" is accepted and will appear at <a href="https://www.sigmobile.org/hotmobile/2023/">ACM HotMobile'23</a>.</li>
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