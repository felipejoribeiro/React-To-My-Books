h1 I - Foundations
---

h2 1 - Introduction 

Games are coming a long way. In the beginning these programs and engines were inseparable entities. The software wasn't made to be multi platform or multi purpose. So each game had it's own little engine, highly specialized to the tasks necessary for the game realization. Given the time, developers noted how certain patterns in these codes were present so often and how it was possible to create a framework were all basic functionalities could be reused on multiple titles. And so was born Game engines, programs were games were build on top. This book addresses those low level patterns and aims to provide a detailed overview over the subject, including the topics:

- How real industrial-strength production game engines are architected;
- How to organize game development teams to work in real world products;
- Which major subsystems and design patterns appear on every modern game engine;
- What are the typical requirements for each major subsystem and why;
- Which game subsystems and features are genre- or game-agnostic, and which ones are more specialized;
- Where the engine normally ends and the game begins.

We will explore the inner works of some popular game engines, such as Quake, Unreal and some middleware package like Havok Physics library, OGRE rendering engine and Rad game tools' Granny 3D animation and geometry management toolkit. Besides some awesome proprietary game engines such as the Naughty Dog's one, used to the uncharted and the last of us game series. 

Before we start we're gona review some basic techniques and tools for  proper large scale software development. Such as C and C++ programming languages, Microsoft visual studio, configuration management, revision control, build systems and the diference between physical and logical software architecture.

From math you shall need some linear algebra, three-dimensional vector and matrix math and trigonometry. Also the concepts of real time and event-driven programming would be good for the better understanding.

h3 1.1 - Structure of a typical Game Team

There are basically five fundamental disciplines: engineers, artists, game designers, producers and other management and support staff(marketing, legal, information technology/technical support, administrative, etc...). We will take a brief look at each one:

h4 1.1.1 - Engineers

These guys implement features and tools for the games. They implement the logic and enable visuals by coding the rendering engine or the sound engine and so on so forth. They can be divided on two groups: the run-time ones, that work directly on the engine and the game itself. And the tools programmers, whom work on the tools that allows the rest of the development team to work effectively. Such broad classification englobes collision specialists, sound and rendering teams, and a diversity of specializations. Some specialize in a specific engine, or tool, or feature, like networking, and others prefere to be generalists, tackling all sorts of problems.

Senior engineers also have the responsibility of managing the team from an human perspective aside decision making. The CRO's job is to be a technical director for the entire studio, as well as serving a key executive role in the company.

h4 1.1.2 - Artists

Content is king, they say, and is true. There are a lot of categories in art production. The objective of the technical tema is to share and convey the artistry team's job in the best way possible in a way in witch the user experience is the best possible. In this sense, there are the concept artists that create what the final game will look like, with drawings and montages. 
 
