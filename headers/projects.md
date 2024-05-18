---
layout: base
title: Projects
permalink: /projects/
---

## LiquidHash

![LiquidHash](path/to/your/image.png)

**LiquidHash** aims to verify the authenticity of liquid food products in their original bottles using only smartphone cameras. We leverage observed bubble characteristics - size, shape, and speed - to infer liquid authenticity.

### Abstract

We are witnessing a surge in the reported cases of counterfeit fluid products in the market including olive oil, honey, and alcohol. Counterfeiters often adulterate these liquids by replacing a large portion of the authentic content with cheaper substitutes, like mixing olive oil with sunflower oil or alcohol with potentially lethal methanol. Exacerbating the problem, the counterfeits are packaged and sealed to factory standards, rendering it nearly impossible for consumers to differentiate them by sight. Likewise, various works (e.g., NIR) rely on chemical signatures that are hard to deploy in regular households or daily supermarket use. To overcome these limitations, we propose LiquidHash, a novel computer vision-based solution to detect counterfeits in unopened containers. Our key idea is to use the unique motion signature of naturally-occurring bubbles as video frames while observing the bottle. LiquidHash works by recording and analyzing the video of a manually flipped or shaken bottle from inside the bottle’s cap. We implemented LiquidHash and evaluated its accuracy by detecting counterfeit variants under varying conditions with a total of more than 500 minutes of video recording and observed an overall detection accuracy of up to 96%.

### Demonstration

We envision that LiquidHash could be adopted by an average user with a simple bottle flipping.

1. Start Flipping
2. Record bubbles using smartphone camera
3. Achieve better performance and safety with a bottle cap accessory
4. Proposed bottle cap accessory

### Illustration of Selected Technical Challenges

To make LiquidHash work, we encountered several technical challenges. We illustrate two of them here.

#### (1) Noise in Measuring Bubble Characteristics: Inconsistent Bubble Trajectories

There are multiple sources of noise in measuring bubble characteristics, including rotation motion, camera placement, inconsistent bubble shape, and inconsistent bubble trajectories. We illustrate inconsistent bubble trajectories here.

- Erratic bubble trajectories arise when liquid variations and uneven bubble trajectories enter the initial frames.
- Even desirable events and regular bubble trajectories.
- To tackle this challenge, we utilize image processing techniques to select and process input video frames to contain only steady frames, i.e., frames containing bubbles moving in uniform and regular trajectories.

#### (2) Minute Difference in Bubble Characteristics

The difference in bubble characteristics between authentic and adulterated liquid content could be extremely minute. In the following example, we can hardly see the difference between (1) extra virgin olive oil and (2) extra virgin olive oil adulterated with 30% sunflower oil.

1. Extra Virgin Olive Oil
2. Extra Virgin Olive Oil adulterated with 30% Sunflower Oil
3. Minute Difference in Bubble Characteristics

To tackle this challenge, we utilize computer vision techniques to segment bubble regions and obtain unique bubble trajectories across frames. The system draws bubble features representing bubble characteristics, mainly size, shape, and speed, to optimize for machine learning.

### Publications

- Detecting Counterfeit Liquid Food Products in Sealed Bottles Using a Smartphone Camera, InfoSys'17
- LiquidHash: Using Smartphone Cameras to Detect Counterfeit Liquid Food Products, InfoSys'21

<!-- Add Line -->
<hr>
