(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e){e.exports=JSON.parse('{"basics":{"name":"Liudas Panavas","picture":"headshot.jpg","label":"","headline":"","summary":"I am a CS PhD student at the Data Visualization Lab at Northeastern University advised by Cody Dunne. My research focuses on explaiable AI for object detection algorithms as well as visualization for private data. My goal is to help everyday users evaluate and assess the utility of complicated model outputs. If this area of research interests you, please reach out to me for more information or to set up collaborations.","website":"https://lpanavas.github.io/","blog":"","yearsOfExperience":5,"email":"","region":"Boston, Massachusetts","location":{},"phone":"","profiles":[{"network":"Scholar","url":"https://scholar.google.com/citations?user=lgscvVoAAAAJ&hl=en","iconName":"scholar"},{"network":"GitHub","username":"lpanavas","url":"https://github.com/lpanavas","iconName":"github"},{"network":"Linkedin","url":"https://www.linkedin.com/in/liudas-panavas-122067104/","username":"@Liudas Panavas","iconName":"linkedin"}]},"skills":[{"name":"Javascript","level":"Proficient","rating":3,"yearsOfExperience":3,"keywords":[]},{"name":"Python","level":"Proficient","rating":4,"yearsOfExperience":4,"keywords":[]}],"selectedprojects":[{"title":"Set Visualization for Object Detection Model Comparison","summary":"We developed a system that leverages set visualizations to facilitate model-to-model comparisons in object detection, offering a nuanced analysis of unique strengths and weaknesses, thereby streamlining the model selection process and providing insights obscured by traditional ground-truth-based evaluation metrics.","image":"setmlvis.png","link":"https://drive.google.com/file/d/1n67DYBx2umxzp3ge0iocp-JH9Ul1en6U/view?usp=drive_link"},{"title":"Visualization for Differential Privacy Practioners: Interview Study","summary":"We conducted interviews with 18 professionals to explore the role and challenges of visualization in differential privacy implementation, identifying five stages of deployment, key actors, and potential applications, and subsequently proposed four research directions to address existing gaps in visual tools for both differential privacy experts and domain specialists.","image":"DPInterviews.png","link":"https://osf.io/htxqv?view_only=1a5c7d7553c840ab9f125d88bc13946f"},{"title":"Auditing the EU AI Act","summary":"Our interactive survey assesses public opinion on the EU\'s AI Act, identifying discrepancies between legislative and public risk perceptions in technologies like deep fakes and election manipulation","image":"EUAudit.png","link":"http://ec2-3-17-65-53.us-east-2.compute.amazonaws.com/"},{"title":"Visual Utility of Differentially Private Scatterplots","summary":"Investigating the visual utility of scatterplots under a variety of differential privacy mechanisms to provide guidance for data curators wishing to display sensitive data.","image":"scatterplotPoster.png","link":"https://osf.io/5t68s/"},{"title":"PROTECT Database Interface","summary":"Creating a revamped database interface to allow PROTECT researchers to get a sense of the data with privacy preserving visualizations","image":"ProtectData.png","link":"https://arecibo.ece.neu.edu/dictionary/diz_test/client/build/ "},{"title":"Children\'s Graphical Perception","summary":"We conducted a classic graphical perception study on a population of children aged 8\u201312 and college-aged adults to determine how accurately participants judge differences of particular graphical encodings.","image":"CGPFigure.png","link":"https://osf.io/r3dy2/"},{"title":"OmicSynth Gene Expression Explorer","summary":"We developed omicSynth, a visualization tool that enables biologists to explore correlations between specific genes and neurodegenerative diseases based on selected biological tests, offering features like stacked bar graphs, sorting, scented widgets for data filtering, and an unlinked parallel coordinates and table view for gene-specific analysis..","image":"omicSynth.PNG","link":"https://neu-cs-7250-s21.github.io/project-group-03-omicsynth/"}],"projects":[{"title":"Object Detection Algorithm Evaluation","summary":"","entries":[{"title":"A Visual Analytics System to Evaluate and Compare Multiple Object Detection Algorithms","html":[{"p":"Object detection algorithms are important for a variety of people. These algorithms output bounding boxes that are compared against ground truth bounding boxes. A variety of metrics have been created to evaluate the efficacy of the algorithms in capturing the specified objects. These metrics can be linked to tasks and provide useful information for comparing algorithms."},{"p":"Aggregate metrics begin to provide information on how the models underperform but do not describe why. Additionally, these metrics do not provide a way to conduct an exploratory analysis and evaluation of the model outputs."},{"image":{"src":"setmlvis.png","caption":"Prototype visual analytics system to investigate object detection algorithms for drones developed at Northeastern.","width":720}},{"p":"To help fix this problem  we propose a system that expands, decomposes, and compares common evaluation metrics to help users explore and identify the failure cases they are interested in. We will explore ways of describing and grouping images together to allow insight into what inputs cause failures and why they may cause those failures. This system helps close the loop for model evaluators and provides actionable insights into how to improve the model and how to choose the model best suited for you."}]}]},{"title":"Privacy Preserving Data Visualization","summary":"Investigating the visual utility of scatterplots under a variety of differential privacy mechanisms to provide guidance for data curators wishing to display sensitive data.","entries":[{"title":"Visual Utility of Privacy Preserving Scatterplots","html":[{"p":"There is a lot of data that is being acquired that is not allowed to be accessed by the public. People still want to use this data to learn from it and find new insights. Data curators are charged with being the go between the public and the data owners. Often, the public has to request the data or go through an approval process to get the data from the data curator. This is time consuming and creates friction which prevents the data analyst from drawing insights from the data."},{"image":{"src":"teaserPaper.png","caption":"Image from paper \'Challenges of Visualizing Differentially Private Data\' that captures the private output of two different algorithms. Both algorithms have samequery based error but produce different visual results.                ","width":720}},{"p":"Many analyses are done on the interaction between two variables. Scatterplots are a common way to get a sense of interesting patterns and distributions between two variables. Releasing scatterplots without privacy addition is not possible because the points correspond to individuals. Other privacy additions such as anonymity or jittering the data do not necessarily preserve the privacy of the individuals. Differential privacy is a mechanism that does guarantee privacy against a broad range of attacks in a quantifiable way. We can apply differential privacy to scatterplots to release the data in a privacy preserving way."},{"p":"Different algorithms can produce scatter plots that have the same average range or count error but produce very different visual representations. To fix this problem we have experts evaluate the utility of the private scatterplots. Using these metrics we compare 5 popular differential privacy algorithms across a range of data sets, tasks, bins sizes, and privacy levels. We match the visual characteristics to certain tasks users may want to complete with scatterplots to help data curators discern which type of algorithm is best for them to use when presenting private data visually."},{"p":"Our end goal is to provide a table where users can quickly look at their data structure, task importance, data size, and privacy guarantee and get a sense of which algorithm will likely perform best for them based on expert judgements. We can think of this as a practical visual guide to selecting the best algorithm for a certain set of criteria. "}]}]}],"publications":{"journal":[],"conference":[{"title":"Visual utility evaluation of differentially private scatterplots (Poster)","authors":"Panavas, L., Crnovrsanin, T., Adams,  J., Sargavad, A., Tory, M., Ullman, J., & Dunne, C.","venue":"IEEE VIS: Visualization & Visual Analytics (VIS) ","year":"2022","url":"https://osf.io/5t68s/","image":"Panavas2022VisualUtilityEvaluation.png"},{"title":"Juvenile Graphical Perception: A Comparison between Children and Adults","authors":"Panavas, L., Worth, A., Crnovrsanin, T., Sathyamurthi, T., Cordes, S., Borkin, M. A., & Dunne, C.","venue":"Conference on Human Factors in Computing Systems (CHI) ","year":"2022","url":"https://files.osf.io/v1/resources/r3dy2/providers/osfstorage/62280a0c558e6007162a1e5f?format=pdf&action=download&direct&version=1","image":"CGPFigure.png"}]},"work":[{"title":"Differential Privacy Jitter","type":"Notebook","url":"https://colab.research.google.com/drive/1qWOAmJDVRnSm33v3WEB8Kp5FnAoRJp-j?usp=sharing","image":"jitter.png","summary":"This notebooks shows why jittering scatterplot data or binning is not enough to protect privacy.","date":"2022-02-02","tags":["Differential Privacy","Privacy","Data Visualization","Scatterplot","Jitter"],"technologies":["Python","Jupyter","Colab","diffprivlib"],"project":"Differential Privacy Visualization"},{"title":"Differential Privacy Formal Definition","type":"Notebook","url":"https://colab.research.google.com/drive/14vpkg5onWzMbGZyUrh7wbWrnSOx7Mr5m?usp=sharing","image":"fomalDefinition.png","summary":"In this notebook I want to try to visually explain the formal definition of differential privacy and relate it to scatterplots.","date":"2022-21-06","tags":["Differential Privacy","Privacy","Data Visualization"],"technologies":["Python","Jupyter","Colab","diffprivlib"],"project":"Differential Privacy Visualization"},{"title":"Count and Epsilon Relationship","type":"Notebook","url":"https://colab.research.google.com/drive/1jJzU9KFZiIQjk_Udn4oDNkCO1560arjR?usp=sharing","image":"countEpsilonPlay.gif","summary":"This notebooks shows interactively the relationship between count and epsilon for histograms.","date":"2023-21-06","tags":["Differential Privacy","Privacy","Data Visualization","Scatterplot","Jitter"],"technologies":["Python","Jupyter","Colab","diffprivlib","Plotly","Dash"],"project":"Differential Privacy Visualization"},{"title":"Differential Privacy Scenarios","type":"Website","url":"https://diff-privacy-customization.vercel.app/","image":"scenarios.PNG","summary":"This website uses the openAI api to create realistic differential privacy risk scenarios for user input. Created using React, openAI api, and hosted on Vercel.","date":"2023-10-06","tags":["Differential Privacy","Privacy","Risk"],"technologies":["React","API","openAI","Vercel"],"project":"Differential Privacy Visualization"},{"title":"Risk Classification of AI technologies by EU AI act","type":"Website","url":"https://high-risk-classifier.vercel.app/","image":"riskAIClassification.PNG","summary":"This website takes in five different aspects of an AI technology and classifies it as high risk or not based on the EU AI act. The app inputs this into a prompt engineereed directly from the EU AI act to get a correct classification.","date":"2023-10-07","tags":["AI","Responsible AI","EU AI Act"],"technologies":["React","API","openAI","Vercel"],"project":"Responsible AI"},{"title":"Differential Privacy Education Website","type":"Website","url":"https://lpanavas.github.io/differentialPrivacyLine/","image":"privacyplotWebsite.gif","summary":"Work in Progress: The goal of this site is to allow people to examine different differential privacy parameters and understand the privacy and accuracy tradeoff.","date":"2023-10-12","tags":["Differential Privacy","Privacy","Education"],"technologies":["React","D3"],"project":"Differential Privacy Visualization"},{"title":"Responsible AI survey","type":"Website","url":"http://ec2-3-17-65-53.us-east-2.compute.amazonaws.com/","image":"EUAudit.png","summary":"Our interactive survey assesses public opinion on the EU\'s AI Act, identifying discrepancies between legislative and public risk perceptions in technologies like deep fakes and election manipulation.","date":"2023-01-09","tags":["AI","Responsible AI","EU AI Act"],"technologies":["React","Express","AWS","MongoDB"],"project":"Responsible AI"},{"title":"Animated Conversation and Score Game","type":"Website","url":"https://lpanavas.github.io/scoreComparisonSetPercentageSplit/","image":"interactiveEU.gif","summary":"Prototype: This website was experimenting with a conversational chat feature in a game and trying out a gamifaction element where participants had to correctly guess the percentage of public that agrees with them.","date":"2023-30-06","tags":["AI","Responsible AI","EU AI Act"],"technologies":["React","Animation"],"project":"Responsible AI"},{"title":"Drag and Drop Game","type":"Website","url":"https://lpanavas.github.io/RAICardGame/","image":"raiCardGame.gif","summary":"Prototype: This website was trying to make a game of ordering different AI technologies by most to least acceptable.","date":"2023-01-06","tags":["AI","Responsible AI","EU AI Act"],"technologies":["React"],"project":"Responsible AI"},{"title":"Emotion Analysis Website","type":"Website","url":"https://lpanavas.github.io/EmotionAnalysis/videoAnalysis.html","image":"emotionAnalysis.gif","summary":"Prototype: This website was using emotion analysis models to detect emotions in videos and display the results.","date":"2021-01-06","tags":["Object Detection","Emotion Analysis"],"technologies":["Javascript","D3","OpenCV","Object Detection"],"project":"Side Projects"},{"title":"Data Visualization Network","type":"Website","url":"https://lpanavas.github.io/HuskyNetwork/","image":"huskyNetwork.png","summary":"This website shows the the data visualization network at Northeastern University. It was created using D3 and the force directed graph layout.","date":"2021-01-01","tags":["Networks"],"technologies":["Javascript","D3"],"project":"Side Projects"},{"title":"Binaural Sound in VR","type":"Experiment","url":"https://github.com/lpanavas/BinauralSound","image":"vrExperiment.gif","summary":"This study was made in VR using Unity and C#. It was an experiment to see if binaural sound could be used to help people navigate in VR for pop out effects.","date":"2020-01-12","tags":["Virtual Reality"],"technologies":["Unity","C#"],"project":"Side Projects"},{"title":"Supplemental materials for \'Visual Utility of Privacy Preserving Scatterplots\'","type":"Experiment","url":"https://github.com/VisDunneRight/DiffPrivacyScatterplotUtility/tree/master","image":"dpScatterplotStimuli.png","summary":"A collection of all the stimuli and analysis for the paper \'Visual Utility of Privacy Preserving Scatterplots\'. This includes a variety of notebooks to generate differentially private scatterplots.","date":"2022-01-06","tags":["Scatterplot","Differential Privacy","Privacy","Statistical Analysis"],"technologies":["Python","Jupyter","Colab","diffprivlib"],"project":"Papers"},{"title":"Website to examine private scatterplots","type":"Website","url":"https://visdunneright.github.io/Privacy-Plot-Viewer/","image":"privateScatterplot.gif","summary":"The results of the paper \'Visual Utility of Privacy Preserving Scatterplots\' are displayed on this website. This website allows users to explore the differentially private scatterplots and compare them to the original scatterplot.","date":"2022-01-11","tags":["Scatterplot","Differential Privacy","Privacy"],"technologies":["Javascript","React"],"project":"Papers"},{"title":"Study website to gather data on private scatterplots","type":"Website","url":"https://visdunneright.github.io/UserStudyScatter/","image":"userStudyWebsite.png","summary":"A website that can be used to gather data for many study types. Code can be found here: https://github.com/VisDunneRight/UserStudyScatter.","date":"2022-01-10","tags":["Scatterplot","Differential Privacy","Privacy"],"technologies":["Javascript","React"],"project":"Papers"},{"title":"Notebook to investigate dimensionality reduction on time series data.","type":"Notebook","url":"https://colab.research.google.com/drive/1_jO5AKabiK3q4ejecWOmoUn_MKGP9nw0?usp=sharing","image":"timeSeriesSyntheticData.gif","summary":"This notebook explores how we can use dimensionality reduction with data preprocessing to examine differences in time series data. The goal here was to see if this technique could work for evaluating synthetic time series data visually.","date":"2022-10-12","tags":["Synthetic Data","Time Series","Dimensionality Reduction"],"technologies":["Python","Jupyter","Colab","Dimensionality Reduction","Plotly"],"project":"Side Projects"},{"title":"Study website to gather data on private scatterplots","type":"Notebook","url":"https://colab.research.google.com/drive/1ZeyW2mWWOpDWZFsOyMStzZgEaKqQSBML?usp=sharing","image":"syntheticGunData.png","summary":"Prototype: This notebook explored the ability to generate synthetic data using Y-data synthetics library. Because of the way the data is preprocessed by the algorithm, the data does not match the original data.","date":"2022-12-12","tags":["Synthetic Data","Time Series"],"technologies":["Python","Jupyter","Colab","Synythetic Data","Plotly"],"project":"Side Projects"},{"title":"Notebook exploring Gretel Time Series Synthetic Data","type":"Notebook","url":"https://colab.research.google.com/drive/1iMxl6ZdZlkiUmkwS16rCaPWKe-9EGO1u?usp=sharing","image":"timeSeriesVisuals.png","summary":"This notebook created synthetic time series data using Gretel Time Series Synthetic Data. It then explored how the data could be visualized to see if it was useful for data analysis.","date":"2021-12-12","tags":["Time Series","Synthetic Data"],"technologies":["Python","Jupyter","Colab","Plotly","Synythetic Data"],"project":"Side Projects"},{"title":"Notebook exploring a private scatterplot visual","type":"Notebook","url":"https://colab.research.google.com/drive/1rFUch4C4UdDC5QCrdAscymg0vJnHcDCJ?usp=sharing","image":"visualizationB.png","summary":"This notebook was exploring how a private scatterplot was generated that inspired the paper \'Visual Utility of Privacy Preserving Scatterplots\'. I examined how the privacy accuracy tradeoff worked for a smaller dataset.","date":"2021-12-12","tags":["Differential Privacy","Scatterplot"],"technologies":["Python","Jupyter","Colab","diffprivlib"],"project":"Papers"}],"CV":[{"location":"LiudasPanavasResume.pdf"}],"press":[],"languages":[],"interests":[],"references":[]}')},42:function(e,t,a){e.exports=a.p+"static/media/LiudasPanavasResume.1b7e2074.pdf"},43:function(e,t,a){e.exports=a(64)},48:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var i,r,n,o,s,l,c,u,p=a(1),m=a.n(p),d=a(18),h=a.n(d),g=a(16),f=(a(48),a(34)),y=a(6),v=a(69),b=a(70),E=a(12),w=a(13),P=(Object(w.a)(b.a.Link)(i||(i=Object(E.a)(["\n  padding-bottom: 0px;\n  font-weight: bold;\n"]))),Object(w.a)(b.a.Link)(r||(r=Object(E.a)(["\n  color: rgba(0, 0, 0, 1);\n  padding-top: 0px;\n  padding-bottom: 0px;\n"])))),k=Object(w.a)(g.c)(n||(n=Object(E.a)(["\n  text-decoration: none;\n  color: #000000 !important;\n  font-weight: bold;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n"]))),A=(w.a.span(o||(o=Object(E.a)(["\n  @media (max-width: 425px) {\n    display: none;\n  }\n"]))),[{name:"Home",path:"/"},{name:"Work",path:"/work"},{name:"Publications",path:"/publications"},{name:"Projects",path:"/projects"},{name:"CV",path:"/CV"}]),x=function(){Object(y.f)();return m.a.createElement(v.a,{fluid:"true",expand:"lg"},m.a.createElement(v.a.Brand,{style:{fontSize:"2rem"},href:"/"},"Liudas Panavas"),m.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),m.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},m.a.createElement(b.a,{className:"ml-auto"},A.map((function(e,t){return m.a.createElement(b.a.Item,{key:t,className:"flex-column"},m.a.createElement(k,{to:e.path}," ",e.name),e.subpath&&e.subpath.map((function(e){return m.a.createElement(P,{element:g.c,href:"#"+e.path,key:e.name},e.name)})))})))))},S=a(26),D=a(40),j=function(e){var t=e.media;return m.a.createElement("div",{className:"col-6 col-md"},m.a.createElement("ul",{className:"list-unstyled text-small"},m.a.createElement("li",null,m.a.createElement("div",null,m.a.createElement(S.a,null),m.a.createElement("a",{className:"text-muted"}," panavas.l[at]northeastern.edu"))),t.profiles.map((function(e,t){return m.a.createElement("li",{key:t},m.a.createElement("a",{key:t,className:"text-muted",href:e.url},m.a.createElement("div",null,function(){switch(e.iconName){case"github":return m.a.createElement(D.a,null);case"linkedin":return m.a.createElement(S.c,null);case"scholar":return m.a.createElement(S.b,null)}}(),"\xa0",e.network)))}))))},I=function(e){var t=e.user.basics;return m.a.createElement(m.a.Fragment,null,m.a.createElement("hr",null),m.a.createElement(j,{media:t}),m.a.createElement("div",{className:"col-6 col-md"}))},C=a(41),V=function(e){var t=e.user,a=e.children;return m.a.createElement(m.a.Fragment,null,m.a.createElement(C.a,null,m.a.createElement(x,null),m.a.createElement("div",null,a),m.a.createElement(I,{user:t})))},T=w.a.h3(s||(s=Object(E.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]))),N=w.a.p(l||(l=Object(E.a)(["\n  white-space: pre-wrap;\n"]))),O=(w.a.span(c||(c=Object(E.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  border-radius: 2px;\n  font-weight: bold;\n"]))),a(66)),U=a(67),z=a(71),R=a(30),W=(a(62),function(e){var t=e.items;return m.a.createElement(O.a,null,t.map((function(e,t){return m.a.createElement(U.a,{md:4,key:t,className:"d-flex"},m.a.createElement(z.a,{className:"flex-grow-1",style:{marginBottom:"20px"}},m.a.createElement(z.a.Img,{variant:"top",src:e.image}),m.a.createElement(z.a.Body,null,m.a.createElement(z.a.Title,null,e.title),m.a.createElement(z.a.Text,null,e.summary),m.a.createElement(z.a.Link,{href:e.link},"Details"))))})))}),J=function(e){var t=e.user;return m.a.createElement(V,{user:t},m.a.createElement(O.a,null,m.a.createElement(U.a,null,m.a.createElement(R.a,{src:"headshot.jpg",width:400,style:{paddingTop:"40px"}}),m.a.createElement(j,{media:t.basics})),m.a.createElement(U.a,null,m.a.createElement("div",null,m.a.createElement(T,null,"About Me"),m.a.createElement(N,null,"I am currently in search of an ",m.a.createElement("b",null,"internship")," \ud83d\udcbc for the Summer of 2024."),m.a.createElement(N,null,"I am a CS PhD student at the"," ",m.a.createElement("a",{href:"https://visualization.khoury.northeastern.edu/#/"},"Northeastern University Data Visualization Lab")," ","advised by"," ",m.a.createElement("a",{href:"https://visualization.khoury.northeastern.edu/people/Cody-Dunne/"},"Cody Dunne"),". I have presented work at top tier conferences in human-computer interaction (ACM CHI 2022) and data visualization (IEEE Vis 2022). I have experience prototyping and deploying visual analytics software as well as running quantitative and qualitative evaluations of user experiences."),m.a.createElement(N,null," ","My research focuses on explainable AI for object detection algorithms as well as"," ",m.a.createElement("a",{href:"https://visdunneright.github.io/Privacy-Plot-Viewer/"},"visualization for differentially private data"),". My goal is to help everyday users evaluate and assess the utility of complicated model outputs. If this area of research interests you, please reach out to me for more information or to set up collaborations."),m.a.createElement(N,null,"I've had the privilege to work with amazing collaborators at research institutions and corporate labs. Notably, I interned at"," ",m.a.createElement("a",{href:"https://social-dynamics.net/"},"Nokia Bell Labs"),", where I engineered a cloud-based survey to gather public sentiment on EU AI policy. Concurrently, I served as an"," ",m.a.createElement("a",{href:"https://opendp.org/blog/meet-2023-opendp-fellows-pauline-maury-laribiere-and-liudas-panavas"},"OpenDP Fellow")," ","at Harvard University's Privacy Tools Project, conducting practitioner interviews to pinpoint challenges in the field of differential privacy. I have also worked with collaborators from"," ",m.a.createElement("a",{href:"https://rachelcummings.com/"},"Columbia University"),","," ",m.a.createElement("a",{href:"https://www.melanietory.com/"},"the Roux Institute"),", and"," ",m.a.createElement("a",{href:"https://groups.cs.umass.edu/asarv/"},"UMass Amherst"),".")))),m.a.createElement(O.a,null,m.a.createElement("div",null,m.a.createElement(T,null,"Selected Projects"),m.a.createElement(W,{items:t.selectedprojects}))))},M=a(68),L=a(72),B=function e(t){var a=t.ele;if(a.p)return m.a.createElement(U.a,{xs:18,md:12},m.a.createElement("p",null,a.p));if(a.link){var i=a.link;return m.a.createElement(U.a,{xs:18,md:12},i.text,m.a.createElement(M.a,{variant:"link",href:i.url},i.linkText))}if(a.image){var r=a.image;return m.a.createElement(U.a,{xs:12,md:8},m.a.createElement(L.a,null,m.a.createElement(L.a.Image,{height:r.height?r.height:"100%",width:r.width?r.width:"100%",src:r.src}),m.a.createElement(L.a.Caption,null,r.caption)))}if(a.video){var n=a.video;return m.a.createElement(U.a,{xs:9,md:4},m.a.createElement("iframe",{width:n.width?n.width:"100%",height:n.height?n.height:"100%",src:n.src,frameBorder:"0",allow:n.allow,allowFullScreen:!0}))}return a&&a.length>1?m.a.createElement(m.a.Fragment,null,a.map((function(t){return m.a.createElement(e,{ele:t})}))):m.a.createElement("p",null,"else")},F=function(e){var t=e.entry;return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,null,m.a.createElement("h5",null,t.title)),t.html.map((function(e){return m.a.createElement(O.a,{className:"justify-content-md-center"},m.a.createElement(B,{ele:e}))})))},G=function(e){var t=e.user;return m.a.createElement(V,{user:t},t.projects.map((function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,null,m.a.createElement("h1",null,e.title)),m.a.createElement(O.a,null,m.a.createElement("p",null,e.summary)),e.entries.map((function(e){return m.a.createElement(F,{entry:e})})))})))},q=Object(w.a)(R.a)(u||(u=Object(E.a)(["\n    transition: transform .2s;\n    &:hover {\n        position: relative;\n        transform: scale(2);\n        z-index: 1;\n    }\n"]))),H=function(e){var t=e.text,a=void 0===t?"":t;return m.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.replace("Panavas, L",(function(e,t){return"<b>Panavas, L</b>"}))}})},_=function(e){var t=e.papers;return m.a.createElement(m.a.Fragment,null,t.map((function(e){return m.a.createElement(O.a,null,m.a.createElement(U.a,{xs:3,md:2},m.a.createElement(q,{src:e.image,thumbnail:!0})),m.a.createElement(U.a,{xs:12,md:8},m.a.createElement("h4",null,e.title),m.a.createElement("p",null,m.a.createElement(H,{text:e.authors}),e.venue,e.year),m.a.createElement("p",null,e.url?m.a.createElement("a",{href:e.url},"PDF"):null,e.supplement?m.a.createElement("a",{href:e.url}," Supplement"):null,e.video?m.a.createElement("a",{href:e.url}," Video"):null,e.previewvideo?m.a.createElement("a",{href:e.previewvideo}," Preview Video"):null,e.code?m.a.createElement("a",{href:e.url}," Code"):null)))})))},K=function(e){var t=e.user;return m.a.createElement(V,{user:t},m.a.createElement("div",null,m.a.createElement(T,{id:"conference"},"Publications"),m.a.createElement(_,{papers:t.publications.conference})))},Z=a(23),Q=(a(63),function(){for(var e="BCDEF".split(""),t="#",a=0;a<6;a++)t+=e[Math.floor(Math.random()*e.length)];return t}),Y=function(e){var t=e.user,a=Object(p.useState)([]),i=Object(Z.a)(a,2),r=i[0],n=i[1];return Object(p.useEffect)((function(){var e=t.work.map((function(){var e=Q(),t=Q();return"linear-gradient(to bottom right, ".concat(e,", ").concat(t,")")}));n(e)}),[t]),m.a.createElement(V,{user:t},"This is a collection of my work. While working on academic papers there is often many iterations of notebooks, websites, or writing that is lost in the process. All that comes out is one final paper from 8 months of work. Here I want to highlight some of the those steps or random side projects that I've done. They may not all be well documented or curated but they were all interesting and fun to make.",m.a.createElement("div",{className:"card-container"},t.work.map((function(e,t){return m.a.createElement("div",{className:"card",key:t},m.a.createElement("img",{src:e.image,alt:e.title,className:"card-image"}),m.a.createElement("div",{className:"hover-content",style:{background:r[t]}},m.a.createElement("div",{className:"card-title"},e.title),m.a.createElement("div",{className:"card-summary"},e.summary),m.a.createElement("a",{href:e.url,className:"card-link"},"Link")))}))))},$=a(42),X=a.n($),ee=function(e){var t=e.user;return console.log(X.a),m.a.createElement(V,{user:t},m.a.createElement("object",{data:"./LiudasPanavasResume.pdf",type:"application/pdf",width:"100%",height:"800rem"},m.a.createElement("p",null,"Alternative text - include a link"," ",m.a.createElement("a",{href:"./LiudasPanavasResume.pdf"},"to the PDF!"))))},te=function(e){var t=e.user;return m.a.createElement(g.a,null,m.a.createElement(y.c,null,m.a.createElement(y.a,{exact:!0,path:"/"},m.a.createElement(J,{user:t})),m.a.createElement(y.a,{exact:!0,path:"/Work"},m.a.createElement(Y,{user:t})),m.a.createElement(y.a,{exact:!0,path:"/publications"},m.a.createElement(K,{user:t})),m.a.createElement(y.a,{exact:!0,path:"/projects"},m.a.createElement(G,{user:t})),m.a.createElement(y.a,{exact:!0,path:"/CV"},m.a.createElement(ee,{user:t})),m.a.createElement(y.a,{path:"*"},m.a.createElement(J,{user:t}))))};var ae=function(){return m.a.createElement(te,{user:f})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(g.b,null,m.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.18a748e6.chunk.js.map