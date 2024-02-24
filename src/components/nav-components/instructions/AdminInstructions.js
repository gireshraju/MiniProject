import React from 'react'
import './AdminInstructions.css'

const AdminInstructions = () => {
  return (
    <div>
        <div class="container" style={{backgroundColor:"wheat"}}>
        <h1>Admin Instructions: Student Feedback System</h1>

        <div class="toc">
            <h2>Table of Contents</h2>
            <ul>
                <li><a href="#view-feedback"> i. Adding/ Creating Users:</a></li>
                <ol>
                    <li><a href="#view-feedback1"> Student </a></li>
                    <li><a href="#view-feedback3"> Teacher</a></li>
                </ol>
            </ul>
            <ul>
                <li><a href="#view-feedbacku">ii. Updating Users:</a></li>
                <ol>
                    <li><a href="#view-feedbacku1"> Student </a></li>
                    <li><a href="#view-feedbacku3"> Teacher</a></li>
                </ol>
            </ul>
            <ul>
                <li><a href="#view-feedbackd">iii. Deleteing Users:</a></li>
                <ol>
                    <li><a href="#view-feedbackd1"> Student </a></li>
                    <li><a href="#view-feedbackd3"> Teacher</a></li>
                </ol>
            </ul>
        </div>

        <div class="content">

            <section id="view-feedback">
                <h3 id='teja' >i. Adding/creating Users:</h3>

                <section id="view-feedback1">
                <h3>1. Adding/Creating Student</h3>
                
                <p>
                    To add student, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Add user" section.</li>
                    <li>Select the user type as "Student" .</li>
                    <li>Now specify his ID which is unique</li>
                    <li>Now select the section in which student have to add and click on submit.</li>
                </ol>
             </section>
             
             <section id="view-feedback3">
                <h3>2. Adding/Creating Teacher</h3>
                
                <p>
                    To add teacher, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Add user" section.</li>
                    <li>Select the user type as "teacher" .</li>
                    <li>Now specify his ID which is unique</li>
                    <li>Now select the section in which teacher have to add and click on submit.</li>
                </ol>
             </section>
            </section>
            <section id="view-feedbacku">
                <h3 id='teja'>ii.Updating Users:</h3>

                <section id="view-feedbacku1">
                <h3>1. Updating Student</h3>
                
                <p>
                    To update student, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Update user" section.</li>
                    <li>Select the user type as "Student" .</li>
                    <li>Now specify his ID which is unique</li>
                    <li>Now select the section in which student have to update and click on update.</li>
                </ol>
             </section>
             
             <section id="view-feedbacku3">
                <h3>2. Updating Teacher</h3>
                
                <p>
                    To update teacher, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Add user" section.</li>
                    <li>Select the user type as "teacher" .</li>
                    <li>Now specify his ID which is unique</li>
                    <li>Now select the section in which teacher have to update and click on update.</li>
                </ol>
             </section>
            </section>
            <section id="view-feedbackd">
                <h3 id='teja'>iii. Deleting Users:</h3>

                <section id="view-feedbackd1">
                <h3>1. Deleting Student</h3>
                
                <p>
                    To delete student, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Delete user" section.</li>
                    <li>Select the user type as "Student" .</li>
                    <li>Now specify his ID which is unique and click on delete.</li>
                    
                </ol>
             </section>
             
             <section id="view-feedbackd3">
                <h3>2. Deleting Teacher</h3>
                
                <p>
                    To delete teacher, follow these steps:
                </p>
                <ol>
                    <li>Log in to the Admin Dashboard with your credentials.</li>
                    <li>Navigate to the "Delete user" section.</li>
                    <li>Select the user type as "teacher" .</li>
                    <li>Now specify his ID which is unique and click on delete.</li>
                </ol>
             </section>
            </section>
            

        </div>
    </div>
    <br></br><br></br>
    </div>
  )
}

export default AdminInstructions
