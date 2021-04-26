import reactLogo from "../../assets/images/reactLogo.svg"
import reduxLogo from "../../assets/images/reduxLogo.svg"
import nodeLogo from "../../assets/images/nodeLogo.svg"
import expressLogo from "../../assets/images/expressLogo.svg"
import sequelizeLogo from "../../assets/images/sequelizeLogo.svg"
import postgresqlLogo from "../../assets/images/postgresqlLogo.svg"
import gitLogo from "../../assets/images/gitLogo.svg"
import firebaseLogo from "../../assets/images/firebaseLogo.svg"


import arrayIcon from "../../assets/images/arrayIcon.svg"
import treeIcon from "../../assets/images/treeIcon.svg"
import hasgTableIcon from "../../assets/images/hashTableIcon.svg"
import linkedListIcon from "../../assets/images/linkedListIcon.svg"
import sortIcon from "../../assets/images/sortIcon.svg"
import stackQueueIconIcon from "../../assets/images/stackQueueIcon.svg"


import arrayAnimation from "../../assets/theoretical/arrays/arrayAnimation.gif"
import treeAnimation from "../../assets/theoretical/tree/treeAnimation.gif"
import hashAnimation from "../../assets/theoretical/hashTable/3sumAnimation.gif"
import linkedListAnimation from "../../assets/theoretical/linkedList/linkedListAnimation.gif"
import searchAnimation from "../../assets/theoretical/search/searchAnimation.gif"
import stackAnimation from "../../assets/theoretical/stack/stackAnimation.gif"

import reactTool from "../../assets/tools/react/reactTool.png"
import reduxTool from "../../assets/tools/redux/reduxTool.png"
import expressTool from "../../assets/tools/express/expressTool.png"
import sequelizeTool from "../../assets/tools/sequelize/sequelizeTool.png"
import postgresTool from "../../assets/tools/postgresql/postgresqlTool.svg"
import gitTool from "../../assets/tools/git/gitTool.png"

const initialState = {
	tools: [
		{
			name: "React",
			img: reactLogo,
			appImg: reactTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "In this project react has been used to show all the visual interface to the user, the landing page, the section of countries and create new activity",
		},
		{
			name: "Redux",
			img: reduxLogo,
			appImg: reduxTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "Redux has been used to save all relative information of the countries going to be show in visual interface, and finally, redux is used in the country filter "
		},
		{
			name: "Node",
			img: nodeLogo,
			appImg: reactTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "Node has been used as the platform of the backend, in this project has been connect to sequelize and express"

		},
		{
			name: "Express",
			img: expressLogo,
			appImg: expressTool,
			liveDemo: `https://apicountry.herokuapp.com/countries`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "Express is the connection between front-end and back-end, this manage essential two routes /activity and /countries, if you wanna see countries in the backend enter https://apicountry.herokuapp.com/countries?page=0"

		},
		{
			name: "Sequelize",
			img: sequelizeLogo,
			appImg: sequelizeTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "The connection between express and the database, but how can i show you this? with the entity relationship diagram, when the project has a diagram defined, set sequelize is more easy!"

		},
		{
			name: "PostgreSQL",
			img: postgresqlLogo,
			appImg: postgresTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "The place where the data is saved!, the best way to show you how the data is saved is with the relational model, it has been created with https://app.genmymodel.com/"

		},
		{
			name: "Git",
			img: gitLogo,
			appImg: gitTool,
			liveDemo: `https://paises-sanrinconr.vercel.app/`,
			gitLink: `https://github.com/sanrinconr/Countries-app`,
			description: "Git... without git the project has been much more difficult to deploy. This project followed the workflow of creating a branch for every feature, when it's finished merges to the main branch. All is made with pull requests, but because of a migration of the repo, this shows 0 pull requests :(. In the image you can see a little part of the history"

		},
		{
			name: "Firebase",
			img: firebaseLogo,
			appImg: gitTool,
			liveDemo: `https://frases-sanrinconr.firebaseapp.com/`,
			gitLink: `https://github.com/sanrinconr/phrases-firebase`,
			description: "Google takes care of the servers and the developer focuses on developing, and this is incredible !, with firebase i make a project where you can enter words, and this is saved in the firestore. The utility ?, none, but can be fun if many persons as you, write what you are thinking, what are you doing or other thing, next visitors will be this !. Imagine if 100 persons wrote, the result may be curious!"

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
			img: stackQueueIconIcon,
			description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
			idea: `The maner to afront this exercise is with the idea of "use a stack to add open characters, when reach a close character pop the stack and two elements must be the couple open closed ".`,
			gitLink:`https://github.com/sanrinconr/LeetCode-exercises/tree/main/Stack/Valid%20Parentheses`,
			animation: stackAnimation,
			leetCodeLink: `https://leetcode.com/problems/valid-parentheses/`
		}
        ]
}

export const skillReducer = (state = initialState, action) => {
	switch (action.type) {
	default:
		return state;
	}
};