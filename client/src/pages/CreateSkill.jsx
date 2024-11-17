import { useState, useEffect } from "react"
import { useQuery, useMutation } from "@apollo/client";
import { GET_CATEGORIES } from "../utils/queries";
import { ADD_SKILL } from "../utils/mutations";
import { useNavigate } from "react-router-dom"
import BackArrow from "../assets/back-arrow.svg"

import Auth from "../utils/auth";

export default function CreateSkill() {
    const [skillnameText, setSkillnameText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [checkedDays, setCheckedDays] = useState('')

    const { data } = useQuery(GET_CATEGORIES);
    const categories = data?.categories || []

    const [createSkill, { error }] = useMutation(ADD_SKILL);

    const navigate = useNavigate()
    const refreshPage = () => {
        navigate(0);
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        localStorage.removeItem('id_token');
        navigate('/login')
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(checkedDays)

        try {
            const { data } = await createSkill({
                variables: {
                    name: skillnameText,
                    description: descriptionText,
                    category: selectedCategory,
                    timeAvailable: JSON.stringify(Object.keys(checkedDays)),
                    user: Auth.getProfile().data._id
                },
            });

            navigate('/profile')
            refreshPage()

        } catch (err) {
            console.error(err);
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

    const handleCheckedChange = (event) => {
        setCheckedDays({ ...checkedDays, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        console.log("checkedDays", checkedDays);
    }, [checkedDays]);

    const checkboxes = [
        {
            name: 'Sunday',
            value: 'Sunday'
        },
        {
            name: 'Monday',
            value: 'Monday'
        },
        {
            name: 'Tuesday',
            value: 'Tuesday'
        },
        {
            name: 'Wednesday',
            value: 'Wednesday'
        },
        {
            name: 'Thursday',
            value: 'Thursday'
        },
        {
            name: 'Friday',
            value: 'Friday'
        },
        {
            name: 'Saturday',
            value: 'Saturday'
        },
    ]

    return (
        <>
            <div className="create-skill-container">
                <div className="create-skill-form-container">
                    <form id="new-skill-form" onSubmit={handleFormSubmit}>
                        <header className="create-skill-header">
                            <img
                                className="create-skill-backarrow"
                                src={BackArrow}
                                alt="Back"
                                onClick={() => navigate(-1)}
                            />
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
                                {checkboxes.map((day, index) => (
                                    <div className="date-line" key={index}>
                                        <input type="checkbox" name={day.value} onChange={handleCheckedChange}></input>
                                        <h3>{day.name}</h3>
                                    </div>
                                ))}
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