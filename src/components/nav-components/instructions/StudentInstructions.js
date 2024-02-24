import React from 'react'
import './StudentInstructions.css'
const Student_instructions = () => {
  return (
    <div>
       <div class="container" style={{backgroundColor:"wheat"}}>
        <br/>
        <h1>Student Instructions: Student Feedback System</h1>
        <div class="feedback">
        <h2>Feedback Guidelines</h2>
        <p>Please keep the following points in mind while providing feedback:</p>
        <ol>
           <li>Be specific and constructive in your comments.</li>
           <li>Focus on the learning experience and provide suggestions for improvement.</li>
           <li>Respect the opinions of others and maintain a positive tone.</li>
           <li>Finally Submit your feedback.</li>
        </ol>
        </div>
        <div class="toc">
            <h2>Table of Contents</h2>
            <ul>
                <li><a href="#submit-anonymous-feedback">1. Submit Anonymous Feedback</a></li>
                <li><a href="#submit-normal-feedback">2. Submit Normal Feedback</a></li>
            </ul>
        </div>

        <div class="content" >

            <section id="submit-anonymous-feedback">
                <h2>1. Submit Anonymous Feedback</h2>
                <p>
                    To submit anonymous feedback for your teacher, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Student Dashboard with your credentials.</li>
                    <li>Navigate to the "Feedback" or "Submit Feedback" section.</li>
                    <li>Choose the option for "Anonymous Feedback".</li>
                    <li>Select the teacher you want to provide feedback for.</li>
                    <li>Fill in the feedback form with your comments/suggestion and ratings.</li>
                    <li>Click "Submit" to save the feedback.</li>
                </ol>
            </section>

            <section id="submit-normal-feedback">
                <h2>2. Submit Normal Feedback</h2>
                <p>
                    To submit normal (non-anonymous) feedback for your courses, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Student Dashboard with your credentials.</li>
                    <li>Navigate to the "Feedback" or "Submit Feedback" section.</li>
                    <li>Choose the option for "Normal" Feedback".</li>
                    <li>Select the teacher you want to provide feedback for.</li>
                    <li>Fill in the feedback form with your comments/suggestion and ratings.</li>
                    <li>Click "Submit" to save the feedback.</li>
                </ol>
            </section>

        </div>
    </div>
    <br></br><br></br>
    </div>
  )
}

export default Student_instructions
