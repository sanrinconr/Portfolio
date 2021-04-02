import reactLogo from "../../assets/images/reactLogo.svg"
import reduxLogo from "../../assets/images/reduxLogo.svg"
import nodeLogo from "../../assets/images/nodeLogo.svg"
import expressLogo from "../../assets/images/expressLogo.svg"
import sequelizeLogo from "../../assets/images/sequelizeLogo.svg"
import postgresqlLogo from "../../assets/images/postgresqlLogo.svg"
import gitLogo from "../../assets/images/gitLogo.svg"

const initialState = [
    {name:"React",img:reactLogo},
    {name:"Redux",img:reduxLogo},
    {name:"Node",img:nodeLogo},
    {name:"Express",img:expressLogo},
    {name:"Sequelize",img:sequelizeLogo},
    {name:"PostgreSQL",img:postgresqlLogo},
    {name:"Git",img:gitLogo}
    ]

export const skillReducer = (state = initialState, action) => {
	switch (action.type) {
	default:
		return state;
	}
};