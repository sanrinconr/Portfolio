import reactLogo from "../../assets/images/reactLogo.svg"
import reduxLogo from "../../assets/images/reduxLogo.svg"
import nodeLogo from "../../assets/images/nodeLogo.svg"
import expressLogo from "../../assets/images/expressLogo.svg"
import sequelizeLogo from "../../assets/images/sequelizeLogo.svg"
import postgresqlLogo from "../../assets/images/postgresqlLogo.svg"
import gitLogo from "../../assets/images/gitLogo.svg"


import arrayIcon from "../../assets/images/arrayIcon.svg"
import treeIcon from "../../assets/images/treeIcon.svg"
import hasgTableIcon from "../../assets/images/hashTableIcon.svg"
import linkedListIcon from "../../assets/images/linkedListIcon.svg"
import complexityAnalysisIcon from "../../assets/images/complexityAnalysisIcon.svg"
import sortIcon from "../../assets/images/sortIcon.svg"
import stackQueueIconIcon from "../../assets/images/stackQueueIcon.svg"


import arrayAnimation from "../../assets/theoretical/arrays/arrayAnimation.gif"

const initialState = {
	tools: [
		{
			name: "React",
			img: reactLogo
		},
		{
			name: "Redux",
			img: reduxLogo
		},
		{
			name: "Node",
			img: nodeLogo
		},
		{
			name: "Express",
			img: expressLogo
		},
		{
			name: "Sequelize",
			img: sequelizeLogo
		},
		{
			name: "PostgreSQL",
			img: postgresqlLogo
		},
		{
			name: "Git",
			img: gitLogo
		}
        ],
	theoretical: [
		{
			name: "Matrix, array",
			img: arrayIcon,
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            idea:`The maner to afront this exercise is with the idea of "try all array and find if exist the other number such that the sum is the target".`,
            gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/Arrays/Two%20Sum`,
			animation: arrayAnimation
		},
		{
			name: "Graphs, trees",
			img: treeIcon
		},
		{
			name: "Hash tables",
			img: hasgTableIcon
		},
		{
			name: "Linked lists",
			img: linkedListIcon
		},
		{
			name: "Complexity analysis",
			img: complexityAnalysisIcon
		},
		{
			name: "Search and sort",
			img: sortIcon
		},
		{
			name: "Stacks and queues",
			img: stackQueueIconIcon
		}
        ]
}

export const skillReducer = (state = initialState, action) => {
	switch (action.type) {
	default:
		return state;
	}
};