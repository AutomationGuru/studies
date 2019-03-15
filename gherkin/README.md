Ghirkin:
* Programming language used to document the behaviour easily understood by all stakeholders. Goal is to make it human readable
* The Ghrikin files are saved as *.feature file and in text format

A Feature comprises of number of scenariosand each scenario is an example of how a system must behave in a particluar situation.Adding the scenarios we should be able to see the expected behaviour of the feature

Each Scenario works independantly of the other and must be clear

SYNYAX

FEATURE:
feature keywors is whats we begin 
Until any keyword is found next thats the feature 

SCENARIO
Typically a scenario gets a system to a perticular state
Poke it
and examain the new state

they have steps whch use the follwing keyword
Give, but, when,and, then

BACKGROUND
Background allows you to define steps that are common across all scenarios

Feture
background
	given
	when
scenario
	given
	when

DATA TABLE
When each step of ur scenario has different data set use this
	Given product and its price
		|CHAIRS| 100£|
		|SOFA| 100€|
	when i add them to basket
	then i should see the proice




SCENARIO OUTLINE
When scenario have pattern of steps but different inpit value and different expected outcome, use scenari outline. 
Scenario outlines helsp to define the steps one with a example table

SCENARI OUTLINE : name
give
when 
then
Example: table name
| | |
example : table name
| | |

Nest




