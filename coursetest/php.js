
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// fixed footer pop up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// bottom to top button code

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// dinesh qwiz box script
const quizData = [
	{
    question: "AutoCAD was developed by php",
	a: "Microsoft Corp.",   	b: "Apple Inc.",
	c: "Autodesk Inc.",	        d: "None of the above",
	correct:"c", 
	},
	{
question: "AutoCAD was first released in .............",
	a: "November 1982",	     	b: "December 1982",
	c: "December 1983",		d: "December 1981",
	correct:"b", 
	},
	{
question: "How many workspaces are available in AutoCAD?",
	a: "2",	     			b: "3",
	c: "4",				d: "5",
	correct:"b",
	}, 
	{
question: "Which of the following workspaces are available in AutoCAD?",
	a: "3D basics",			b: "3D modelling",
	c: "Drafting and Annotation",	d: "All of the above",
	correct:"d",
	},
	{
question: "which is the latest version of autocad software?",
	a: "AutoCAD 2018",		b: "AutoCAD 2019",
	c: "AutoCAD 2020",		d: "AutoCAD 2021",
	correct:"a",
	},
	{
question: "Which of the following is the extension for autocad drawing file?",
	a: "DWG",			b: "ACTD",
	c: "ACD",     			d: "None of the above",
	correct:"c",
	},
	{
question: "How many units are available in AutoCAD?",
	a: "3",				b: "4",
	c: "5",				d: "6",
	correct:"c",
	},
	{
question: "which key is used to obtain properties palette in autocad?",
	a: "Ctrl + 1",			b: "Ctrl + 2",
	c: "Ctrl + 3",			d: "Ctrl + 4",
	correct:"c",
	},
	{
question: "The scale command can be accessed easily by typing …........",
	a: "S",				b: "C",
	c: "SC",			d: "SL",
	correct:"c",
	},
	{
question: "Which of the following is widely used to measure flood variability?",
	a:"FI",				b:"FFI",
	c:"FFMI",			d:"None of the above",
	correct:"c",
	},
	{
question: "To obtain parallel lines, concentric circles and parallel curves _________ is used.",
	a:"Copy",			b:"Fillet",
	c:"Offset",			d:"None of the Above",
	correct:"c",
	},
	{
question: "Which of the following is not the keyboard shortcut of AutoCAD?",
	a:"Alt + B",			b:"Alt + F4",
	c:"Ctrl + P",			d:"Ctrl + F4",
	correct:"c",
	},
	{
question: "The objects should be selected by ............ for stretching any object in AutoCAD?",
	a:"Select all method",		b:"Picking Method",
	c:"Cross window selection method",d:"None of the above",
	correct:"c",
	},
	{
question: "What are the Advantages of AutoCAD?",
	a:"Improve the quality of designs",b:"Increase the productivity of the designer",
	c:"Creates drawings with accuracy and quickly",	d:"All of the above",
	correct:"c",
	},
	{
question:"By which of the following comand, you can draw a rectangle in AutoCAD?",
a:"ARC",	b:"POL",
c:"REC",	d:"CO",
correct:"c",
	},
	{
question: "Which of the following command in AutoCAD is used to create multiple viewports in the layout?",
a:"EATTEDIT",	b:"VPORTS",
c:"QSELECT",	d:"GROUP",
correct:"c",
	},
/*
Q-17. .......... key automatically activates the O snap feature of AutoCAD.
A.	F1	B.	F2
C.	F3	D.	F4

Ans.

Q-18. Which of the following command will allow us to use the Dynamic Input command of this software?
A.	F12	B.	F10
C.	F11	D.	F9

Ans.

Q-19. Which of the following state grid is use to design perspective?
A.	Isometric	B.	Parametric
C.	Pro-Optic	D.	None of the above

Ans.

Q-20. What does AutoCAD stands for?
A.	Automatical Computer Aided Design	B.	Automated Computer Application Design
C.	Automatic Computer Aided Data	D.	None of the Above

Ans.

Q-21. Computer-aided design software is used by .................
A.	Architects	B.	Engineers
C.	Drafters & artists	D.	All of the above
 
Ans.

Q-22. In AutoCAD 2D Modelling, which axis is not accessible for drafting?
A.	X	B.	Y
C.	Z	D.	WCS

Ans.

Q-23. A Polyline can be broken into individual lines and arcs using which of the following command?
A.	BREAK	B.	TRIM
C.	EXPLODE	D.	OVERKILL

Ans.

Q-24. Origin of the AutoCAD drawing space is,
A.	0,0	B.	1,0
C.	0,1	D.	1,1

Ans.

Q-25. Scrolling of mouse can perform which following action?
A.	Zoom in / zoom out	B.	pan & scan
C.	extents / all	D.	scale

Ans.

Q-26. Is there any difference between Command Plot and Print?
A.	plot command prints only big plans	B.	The plot command for CNC (CAM)
C.	No difference	D.	print command can print up to A3 size paper

Ans.

Q-27. Find the false statement in regards with "If an array is made associative".
A.	You can't use Boolean operations on the array elements	B.	To make the array non associative you need to use explode command on it
C.	The array can be edited again by selecting it	D.	The array can't be modified in any way once it is made associative

Ans.

Q-28. An open area can be filled with which of the following gradient:
A.	Gap	B.	Tolerance
C.	Transparency	D.	Open

Ans.

Q-29. The shortcut to start a table is,
A.	T	B.	TA
C.	TBL	D.	TABLE

Ans.

Q-30. What is the shortcut for zoom command?
A.	Z Command	B.	Rotate mouse wheel
C.	ZOOM Command	D.	All of the above

Ans.

Q-31. To select a set of objects in the workspace, what should be done?
A.	By a crossing window drawn from right to left	B.	By a crossing window drawn left to right
C.	Shift + clicking on the objects	D.	None of the above

Ans.

Q-32. A line shows its dimension as 14.52. What is the precision of this line?
A.	[0.0]	B.	[0.00]
C.	[0.000]	D.	Display of length has nothing to do with precision
Ans.

Q-33. Model Tab and Layout Tab can be majorly distinguished as,
A.	The Model tab is used for drawing in 3D and a Layout is used for drawing in 2D	B.	The Model tab is where you create the drawing, and a Layout tab represents the sheet that you will plot or print on
C.	The colour of the background	D.	The Model tab displays the drawing you are copying from and the Layout tab is where you lay out the new drawing

Ans.

Q-34. Shortcut key for Multileader in AutoCAD 2022,
A.	ML	B.	MLN
C.	MLEADER	D.	MULTI

Ans.

Q-35. To bring a particular area of the workspace in focus, what command should be used?
A.	Zoom Extents	B.	Zoom Window
C.	Zoom Dynamic	D.	Zoom All

Ans.

Q-36. What are the various options from left to right and the opposite direction?
A.	Choose a different category of objects	B.	Select objects according to their colour
C.	Select objects according to their position	D.	No difference

Ans.

Q-37. Shortcut for Trim command is,
A.	T	B.	TR
C.	TI	D.	X

Ans.

Q-38. A Boolean operation that is used to select interfering region between solids,
A.	Union	B.	Intersect
C.	Subtract	D.	None of the above

Ans.

Q-39. What command allows us to select objects based on some status?
A.	Properties	B.	Qselect
C.	Pselect	D.	Attributes

Ans.

Q-40. If you change the scale list a project that I have started from 1:50 1:10 then,
A.	You will have to start over	B.	You should not raise the objects already exist (scale) by 5
C.	You will not need to change anything in hitherto methodology	D.	Should be converted into new items that will add based on the new scale

Ans.

Q-41. A line 4mm in length inclined at 75 degrees to the x- axis can be represented as,
A.	will write 0 <75	B.	will write 0 <15
C.	will write 4 <15	D.	will write 4 <75

Ans.

Q-42. How will you create a line representing length 15 units at an angle of 30 degrees with respect to the positive direction of the X-axis and the first point of the line is not at the origin?
A.	30<15	B.	15<30
C.	@30<15	D.	@15<30

Ans.

Q-43. Which of the following options cannot be used to represent a line?
A.	Yards	B.	Parsecs
C.	Microns	D.	Grads

Ans.

Q-44. A fillet command is used to produce,
A.	Sharp corners	B.	Round corners
C.	Both of the above	D.	None of the above

Ans.

Q-45. Which one of the following is not a property of an object?
A.	Line weight	B.	Measure
C.	Hyperlink	D.	Elevation

Ans.

Q-46. In MLine tool editor, symbol tool can be found on which panel?
A.	Tools	B.	Insert
C.	Options	D.	Formatting

Ans.

Q-47. What is the default design workspace in AutoCAD 2022?
A.	AutoCAD Classic	B.	Drafting & Annotation
C.	3D Basics	D.	3D Modelling

Ans.

Q-48. What time (according to the clock) are 180 degrees according to the conventional time?
A.	12 exactly	B.	6 exactly
C.	9 exactly	D.	3 exactly

Ans.

Q-49. Which coordinate option can be used to reset the orientation of UCS to its default?
A.	UCS, World	B.	UCS, Named UCS
C.	UCS, Previous	D.	UCS Icon, Properties

Ans.

Q-50. An object can be obtained from a block by using,
A.	EXPLODE	B.	OVERKILL
C.	REDEFINE	D.	UNGROUP

Ans. 

Q-51. The symbol that shows snap point to the closet point,
A.	With circles and dots in the centre	B.	With two triangles
C.	With three orthogonal	D.	With Diamond

Ans.


Q-52. In order to measure the dimensions of a land, the surveyor uses which of the following system,
A.	No one method	B.	Related cartesian coordinates
C.	Absolute polar coordinates	D.	None of the above

Ans.

Q-53. The command that is used to convert a block into a drawing object,
A.	EXPLODE	B.	OVERKILL
C.	REDEFINE	D.	UNGROUP

Ans.

Q-54. The function of a polar array is to create object,
A.	In a grid pattern	B.	In a circular pattern
C.	In a straight line	D.	All the above

Ans.

Q-55. Fillet in various corners can be created simultaneously using which command,
A.	Loop	B.	Chain
C.	Multiple	D.	Edge

Ans.

Q-56. The command used to convert separate entities into a polyline,
A.	Union	B.	Subtract
C.	Join	D.	Polyline

Ans. 

Q-57. Command used to create a rectangle 8 units in length and 6 units in width, starting not from the origin,
A.	8,6	B.	6,8
C.	@8,6	D.	@6,8

Ans.

Q-58. AutoCAD commands can be accessed in,
A.	Drawing area	B.	Status bar
C.	Tool bars	D.	Command window

Ans.

Q-59. Various methods to access PAN command,
A.	Right click and select PAN from contextual menu	B.	PAN command
C.	Press and hold middle mouse button	D.	All of the above

Ans.

Q-60. The file extension that cannot be accessed by AutoCAD,
A.	Dwg	B.	Dxf
C.	Doc	D.	Dws

Ans.

Q-61. Plagiostomi angle can be created by which angle,
A.	Chamfer	B.	Fillet
C.	Offset	D.	Mirror

Ans.

Q-62. In AutoCAD, polar coordinate is used for creating,
A.	Arc	B.	Ellipse
C.	angular lines	D.	none of the above

Ans.

Q-63. To print the entire project, you will choose to regulate what to plot
A.	Display	B.	Extends
C.	Limits	D.	Window

Ans.

Q-64. The layer that can be deleted from the layer property manager,
A.	Layer 0	B.	Defpoints
C.	Layer containing objects	D.	Frozen layer not containing objects

Ans.

Q-65. The maximum number of layers that a drawing can have?
A.	1	B.	2
C.	As many as depending on the complexity	D.	None of the above

Ans.

Q-66. The hatch pattern used to fil a closed area,
A.	ANSI31	B.	ANGLE
C.	SOLID	D.	Filled area can't be made with hatch command

Ans.

Q-67. Which state grid is used to design perspective?
A.	Parametric	B.	Isometric
C.	Pro-optic	D.	Rectangular

Ans.

Q-68. The position of the camera can be tuned accurately using,
A.	Pan	B.	Zoom
C.	Orbit	D.	Navigation Wheel

Ans.

Q-69. What is the highest value of layer transparency?
A.	100	B.	50
C.	30	D.	90

Ans.

Q-70. An inclined angle can be produced using which command.
A.	<	B.	>
C.	@	D.	#

Ans.

Q-71. The command that is not suitable to start print command,
A.	PRINT	B.	PR
C.	PLOT	D.	ctrl + P

Ans.

Q-72. If I want to draw a line in the direction 6 pm (local time) will give an angle,
A.	-135 degrees	B.	270 degrees
C.	-225 degrees	D.	None of the above

Ans.

Q-73. The number of ways a circle can be created in AutoCAD,
A.	4	B.	5
C.	6	D.	8

Ans.

Q-74. An object has how many snaps in AutoCAD?
A.	1	B.	4
C.	5	D.	Depend on object

Ans.

Q-75. Which factor of hatch command you will change to correct the spacing between hatch lines or pattern?
A.	Pattern	B.	Angle
C.	Scale	D.	Layer

Ans.

Q-76. The extension for AutoCAD drawing file is,
A.	DWG	B.	DWT
C.	DWF	D.	DXF

Ans.

Q-77. What is the usefulness of viewports?
A.	Allows us to see the screen or on paper different views of the same project	B.	Give us the ability to see projects have become a newer version of AutoCAD from our
C.	We can make a change in one part of the plan, without affecting the rest	D.	None of the above

Ans.

Q-78. The shortcut key to enable snap n AutoCAD,
A.	F2	B.	F3
C.	F5	D.	F8

Ans.

Q-79. In AutoCAD, scaling function is used for making an object,
A.	Smaller	B.	Bigger
C.	Either smaller or bigger	D.	None of the above

Ans.

Q-80. Block Control should be used,
A.	To write text block	B.	To fix outer block
C.	To fix dynamic block	D.	To store it in another version of AutoCAD

Ans.

Q-81. Which of the following AutoCAD command does not have a thickness property?
A.	TEXT	B.	MTEXT
C.	LINE	D.	CIRCLE

Ans.

Q-82. Identify the command that does not belong to the Boolean group in AutoCAD,
A.	Union	B.	Subtract
C.	Intersect	D.	Divide

Ans.

Q-83. Rectangle command can be defined using how many commands,
A.	One	B.	Two
C.	Three	D.	Four

Ans.

Q-84. Which of the following tool cannot be used to make 2D views from 3D drawing?
A.	Flatten	B.	Flatshot
C.	Layout Views	D.	Section Plane

Ans.


Q-85. When in absolute Cartesian coordinates have points A (10.8) and B (6.5), then to make a line from A -> B with relative polar coordinates will write,
A.	@ -5 <36.88	B.	@ 4 <30
C.	@ 5 <216,88	D.	@ 3 <60

Ans.

Q-86. An animation video in AutoCAD cannot be created in which of the following format?
A.	3GP	B.	WMV
C.	AVI	D.	MPG

Ans.

Q-87. The shortcut used to save a drawing in AutoCAD,
A.	CTRL + S	B.	ALT + S
C.	SHIFT + S	D.	CTRL + ALT + S

Ans.

Q-88. Print scale 1:100 means that,
A.	The draft is 100 times less expensive than the original	B.	A 3 cm corresponds to a meter
C.	A measure corresponds to 100 cm	D.	None of the above

Ans.

Q-89. AutoCAD file is saved in which format?
A.	DWG	B.	DWT
C.	DWF	D.	DXF

Ans.

Q-90. The shortcut command for a rectangle,
A.	R	B.	RE
C.	REC	D.	RET

Ans.

Q-91. What is the full form of PCD?
A.	Pitch, Circle, dia	B.	Point, circle, dia
C.	Plain, circle, dia	D.	Pitch, circle, diameter

Ans.

Q-92. What is the full form of WCS?
A.	Working coordinate system	B.	Wide circle system
C.	Work coordinate system	D.	Width coordinate system

Ans.

Q-93. How to make circle in Isometric?
Ans.



Q-94. Types of Tolerance? Explain each.
Ans.






Q-95. Difference between tolerance and clearance.
Ans.





Q-96. How to change default shortcut key in AutoCAD?
Ans.





Q-97. How to do extend work with trim command?
Ans.


Q-98. How to make your own linetype in AutoCAD?
Ans.



Q-99. What are the Projection Angles and its type?
Ans.


Q-100. What is the symbol of first angle projection and Second angle projection and explain it.
Ans.
*/



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})