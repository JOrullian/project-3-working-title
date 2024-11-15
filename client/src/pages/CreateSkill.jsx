import { useEffect } from "react"

export default function CreateSkill() {

    

    return (
        <>
            <div className="create-skill-container">
                <div className="create-skill-form-container">
                    <form id="new-skill-form">
                        <header className="create-skill-header">
                            <h1>Create a new skill!</h1>
                        </header>
                        <div className="create-skill-body">
                            <input id="skill-name" type="text" className="create-skill-input" placeholder="Skill name..." required></input>
                            <select id="skill-category" className="create-skill-category-selection" required></select>
                            <textarea id="skill-description" className="create-skill-desc" placeholder="Skill description..." required></textarea>
                            <div className="availability-container">
                                <h2 className="availability-title">Availability</h2>
                                <div className="date-line">
                                    <input type="checkbox" id="sunday"></input>
                                    <h3>Sunday:</h3>
                                    <input className="date-input" id="sunday-start-time" type="time"></input> - <input className="date-input" id="sunday-end-time" type="time"></input>
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