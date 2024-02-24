import React from 'react'
import './TeacherInstructions.css'
const TeacherInstructions = () => {
  return (
    <div>
    <div class="container" style={{backgroundColor:"wheat"}}>
        <h1>Teacher Instructions: Student Feedback System</h1>
        <div class="feedback">
        <h3>Feedback Analysis Guidelines</h3>
        <div class="instruc">
        <p>Please keep the following points in mind while reviewing feedback:</p>
            <ol>
              <li>Consider both positive and constructive feedback as opportunities for growth.</li>
              <li>Pay attention to specific comments about course content and teaching methods.</li>
              <li>Use feedback to make adjustments for better student learning experiences.</li>
              <li>Remember that feedback is provided anonymously or knowingly by students.</li>
              <li>For easily understanding we can have a look through pictorial representation</li>
            </ol>
        </div>
        </div>

        <div class="toc">
            <h3>Table of Contents</h3>
            <ul>
                <li><a href="#view-feedback">i. View  TextFeedback/Suggestions:</a></li>
                <ol>
                    <li><a href="#view-feedback1"> View Feedback for specific section</a></li>
                    <li><a href="#view-feedback3"> View Feedback overall</a></li>
                </ol>
            </ul>
            <ul>
                <li><a href="#view-feedbackg">ii. View  Pictorial feedback in Graph</a></li>
                <ol>
                    <li><a href="#view-feedbackg1"> View Graph for specific section</a></li>
                    <li><a href="#view-feedbackg3"> View Graph overall</a></li>
                </ol>
            </ul>
            </div>
        <div class="content">

            <section id="view-feedback">
                <h3 id='teja'>i. View  TextFeedback/Suggestions:</h3>

                <section id="view-feedback1">
                <h3>1. View Feedback</h3>
                
                <p>
                    To view feedback/suggestion for specific section, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Teacher Dashboard with your credentials.</li>
                    <li>Navigate to the "Feedback" or "View Feedback" section.</li>
                    <li>Select the "section" and click show.</li>
                    <li>TextFeedback/suggestions from students regarding that section will be displayed.</li>
                    <li>To view the student text, we have to click on it, then it will appears in text area.</li>
                </ol>
             </section>
             
             <section id="view-feedback3">
                <h3>2. View  overall Feedback</h3>
                
                <p>
                    To view feedback /suggestion recived from all, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Teacher Dashboard with your credentials.</li>
                    <li>Navigate to the "Feedback" or "View Feedback" section.</li>
                    <li>Select the "overall" and click show.</li>
                    <li>TextFeedback/suggestion from allstudents will be displayed.</li>
                    <li>To view the student text, we have to click on it, then it will appears in text area.</li>
                </ol>
             </section>
            </section>
            <section id="view-feedbackg">
                <h3 id='teja'>ii. View  Pictorial feedback in Graph</h3>
                <section id="view-feedbackg1">
                <h3>1. View Feedback for specific section</h3>
                
                <p>
                    To view graph based on feedback for your section, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Teacher Dashboard with your credentials.</li>
                    <li>Navigate to the "Graph" section..</li>
                    <li>Select the "section" and click show.</li>
                    <li>Graph is displayed from students numerical feedback given by that particular section .</li>
                </ol>
             </section>
             
             <section id="view-feedbackg3">
                <h3>2. View  overall Feedback/rating for the teacher</h3>
                
                <p>
                    To view graph based on feedback recived from all, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Teacher Dashboard with your credentials.</li>
                    <li>Navigate to the "Graph" section.</li>
                    <li>Select the "overall" and click show.</li>
                    <li>Graph is displayed from students numerical feedback.</li>
                </ol>
             </section>
            </section>

        </div>
       <br></br><br></br>
    </div>
    </div>

  )
}

export default TeacherInstructions
