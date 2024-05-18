---
layout: base
title: Projects
permalink: /projects/
---

## *PowDew*

![PowDew](path/to/your/image.png)

*PowDew* aims to verify the authenticity of powdered food products only with a single smartphone. We utilize a smartphone in a novel way to capture the droplet motion (i.e., spreading and penetration).

### Abstract

The prevalence of counterfeit infant formulas worldwide poses serious threats to infant health and safety, a concern highlighted by the notorious Melamine Milk Scandal that affected hundreds of thousands of children.

The primary challenge in detecting counterfeit formulas lies in their sophisticated adulteration and substitution techniques. Such detection is feasible only in laboratory settings, making it nearly impossible for average consumers to test the formula before feeding their infants. To address this problem, we propose *PowDew*, a novel and practical system for detecting counterfeit infant formula that utilizes only a commodity smartphone.

*PowDew* operates by capturing and analyzing the interaction of a water droplet with the powdered formula, focusing on the droplet motion, namely its spreading and penetration. Our insight is that the droplet motions are governed by powder-specific properties such as wettability and porosity. *PowDew* analyzes the subtle differences in droplet motions and infers the formula's authenticity.

To demonstrate *PowDew*'s effectiveness, we implement *PowDew* and conduct comprehensive real-world experiments under varying conditions with different brands of powdered infant formula and adulterants. Our experiments result in a total of 12,000 minutes of video recordings of the droplet motions on various infant formulas, including authentic and altered. Our experiments demonstrate that *PowDew* yields an overall detection accuracy of up to 96.1%.

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
