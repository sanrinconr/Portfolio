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
import treeAnimation from "../../assets/theoretical/tree/treeAnimation.gif"
import hashAnimation from "../../assets/theoretical/hashTable/3sumAnimation.gif"
import linkedListAnimation from "../../assets/theoretical/linkedList/linkedListAnimation.gif"
import searchAnimation from "../../assets/theoretical/search/searchAnimation.gif"


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
			animation: arrayAnimation,
			leetCodeLink: `https://leetcode.com/problems/two-sum/`
		},
		{
			name: "Graphs, trees",
			img: treeIcon,
			description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.`,
			idea:`The maner to afront this exercise is with the idea of "Insert the two arrays in a tree (log(n)), after, get a array result of inorden and get the medium of this array, return this value".`,
			gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/Binary%20search/Median%20of%20Two%20Sorted%20Arrays`,
			animation:treeAnimation,
			leetCodeLink: `https://leetcode.com/problems/median-of-two-sorted-arrays/`
		},
		{
			name: "Hash tables",
			img: hasgTableIcon,
			description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.`,
			idea:`The idea is based in the third number is the result of the sum of two other numbers, with this in mind, the process was: sum the actual element of first "for" and second "for", then if hashtable has the inverse (with -), the triplet has been discovered!`,
			gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/HashTable/3Sum`,
			animation:hashAnimation,
			leetCodeLink:`https://leetcode.com/problems/3sum/`,
		},
		{
			name: "Linked lists",
			img: linkedListIcon,
			description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.`,
			idea:`The maner to afront this exercise is with the idea of "sum the two actual nodes, push the result in a array, and go to the next of every list until finish. Finally use this result array to create new linked list".`,
			gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/LinkedList/Add%20two%20numbers`,
			animation:linkedListAnimation,
			leetCodeLink:`https://leetcode.com/problems/add-two-numbers/`
		},
		{
			name: "Complexity analysis",
			img: complexityAnalysisIcon
		},
		{
			name: "Search and sort",
			img: sortIcon,
			description: `Given a string s, find the length of the longest substring without repeating characters.`,
			idea: `The maner to afront this exercise is with the idea of "sum the two actual nodes, push the result in a array, and go to the next of every list until finish. Finally use this result array to create new linked list".`,
			gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/Strings/Longest%20Substring%20Without%20Repeating%20Characters`,
			animation:searchAnimation,
			leetCodeLink: `https://leetcode.com/problems/longest-substring-without-repeating-characters/`
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