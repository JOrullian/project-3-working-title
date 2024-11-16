import { useState, userParams } from "react"
import { useQuery, useMutation } from "@apollo/client";
import { GET_CATEGORIES } from "../utils/queries";
import { ADD_SKILL } from "../utils/mutations";
import { useNavigate } from "react-router-dom"

import Auth from "../utils/auth";

export default function CreateSkill() {
    const [skillnameText, setSkillnameText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    const { data } = useQuery(GET_CATEGORIES);
    const categories = data?.categories || []

    const [createSkill, { error }] = useMutation(ADD_SKILL);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const navigate = useNavigate()
    if (!token) {
        localStorage.removeItem('id_token');
        navigate('/login')
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(selectedCategory)
        console.log(skillnameText)
        console.log(descriptionText)

        try {
            const { data } = await createSkill({
                variables: {
                    name: skillnameText,
                    description: descriptionText,
                    category: selectedCategory,
                    user: Auth.getProfile().data._id
                },
            });
            console.log(data)

            navigate('/profile')

        } catch (err) {
            console.error(err);
            console.error('Full error:', err);
            console.error('GraphQL errors:', err.graphQLErrors);
            console.error('Network error:', err.networkError);
        }
    };

    const handleCategoryChange = (event) => {
        const { value } = event.target
        setSelectedCategory(value)
    };

    const handleDescriptionChange = (event) => {
        const { value } = event.target
        setDescriptionText(value);
    };

    const handleNameChange = (event) => {
        const { value } = event.target
        setSkillnameText(value)
    };

    return (
        <>
            <div className="create-skill-container">
                <div className="create-skill-form-container">
                    <form id="new-skill-form" onSubmit={handleFormSubmit}>
                        <header className="create-skill-header">
                            <h1>Create a new skill!</h1>
                        </header>
                        <div className="create-skill-body">
                            <input
                                id="skill-name" type="text" className="create-skill-input" placeholder="Skill name..."
                                value={skillnameText}
                                required
                                onChange={handleNameChange}></input>
                            <select
                                id="skill-category" className="create-skill-category-selection"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                required >
                                <option value="">Select a Category</option>
                                {categories.map((category, index) => <option key={index} value={category._id}>{category.name}</option>)}
                            </select>
                            <textarea
                                name="description-field" id="skill-description" className="create-skill-desc" placeholder="Skill description..."
                                value={descriptionText}
                                onChange={handleDescriptionChange}
                                required>
                            </textarea>
                            <div
                                className="availability-container">
                                <h2 className="availability-title">Availability</h2>
                                <div
                                    className="date-line">
                                    <input
                                        type="checkbox"
                                        id="sunday"></input>
                                    <h3>Sunday:</h3>
                                    <input
                                        className="date-input" id="sunday-start-time"
                                        type="time"></input> - <input className="date-input" id="sunday-end-time"
                                            type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="monday"></input>
                                    <h3>Monday:</h3>
                                    <input className="date-input" id="monday-start-time" type="time"></input> - <input className="date-input" id="monday-end-time" type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="tuesday"></input>
                                    <h3>Tuesday:</h3>
                                    <input className="date-input" id="tuesday-start-time" type="time"></input> - <input className="date-input" id="tuesday-end-time" type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="wednesday"></input>
                                    <h3>Wednesday:</h3>
                                    <input className="date-input" id="wednesday-start-time" type="time"></input> - <input className="date-input" id="wednesday-end-time" type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="thursday"></input>
                                    <h3>Thursday:</h3>
                                    <input className="date-input" id="thursday-start-time" type="time"></input> - <input className="date-input" id="thursday-end-time" type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="friday"></input>
                                    <h3>Friday:</h3>
                                    <input className="date-input" id="friday-start-time" type="time"></input> - <input className="date-input" id="friday-end-time" type="time"></input>
                                </div>
                                <div className="date-line">
                                    <input type="checkbox" id="saturday"></input>
                                    <h3>Saturday:</h3>
                                    <input className="date-input" id="saturday-start-time" type="time"></input> - <input className="date-input" id="saturday-end-time" type="time"></input>
                                </div>
                            </div>
                        </div>
                        <footer className="create-skill-footer">
                            <button id="create-skill-btn" className="create-skill-btn">Create Skill</button>
                        </footer>
                    </form>
                </div>
            </div>
        </>
    )
}