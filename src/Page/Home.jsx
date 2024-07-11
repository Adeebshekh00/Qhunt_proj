import React from "react";
// import { Link } from "react-router-dom";
import HighlighText from "../components/core/HighlighText";
import CTABUTTON from "../Page/Button";
import Banner from "../assets/images/home-video.mp4";
import Codeblocks from "../components/core/Codeblocks";
import Footer from "../components/common/Footer";
const  Home = () =>{
    return (
        <div>
        <div className="relative mx-auto flex flex-col w-11/12  max-w-maxContent items-center text-white justify-between">
        {/* section1 */}
         <div className="text-center text-4xl font-semibold mt-7">Empower your knowledge With 
            <HighlighText text=" Q-HUNT"></HighlighText>
         </div>

         <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300" >Welcome to Q-HUNT, your ultimate destination for fun and engaging quizzes! Whether you're looking to test your knowledge, learn something new!!
         </div>
         <div className="flex flex-row gap-7 mt-8">
            <CTABUTTON active={true} linkto={"/signup"}>
                  Take Quiz
            </CTABUTTON>
            <CTABUTTON active={false} linkto={"/signup"}>
                Create Quiz
            </CTABUTTON>

         </div>

         <div className="mx-3 my-12 w-11/12 h-11/12 shadow-blue-200 ">
            <video
            muted
            loop
            autoPlay>
                <source src={Banner} type="video/mp4"></source>

            </video>
         </div>

         {/* codesection 1 */}
         <div>
            <Codeblocks
            position={"lg:flex-row"}
            heading={
                <div className="text-4xl font semibold">
                    Unlock Your 
                    <HighlighText text={" Potential "}></HighlighText>
                    with our quizes
                </div>
            }
            subheading={"Challenge yourself, compete with friends, and track your progress as you climb the leaderboard."}
            ctabtn1={
                {
                    btntext:"try it yourself",
                    linkto:"/signup",
                    active:true
                }
            }
            ctabtn2={
                {
                    btntext:"learn more",
                    linkto:"/login",
                    active:false
                }
            }
            codeblock={'Computer&&IT \n Electronics \n Botany \nMachinery \n Chemicals \n Circuits \nAI \n DeepLearning \nDesign&&Develop \nCybersecurity \nCloudNetworking'}
            codecolor={"text-yellow-25"}
            ></Codeblocks>
         </div>
         {/* codesetion 2 */}
         <div>
            <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
                <div className="text-4xl font semibold">
                    Create 
                    <HighlighText text={" Quiz "}></HighlighText>
                    for students
                </div>
            }
            subheading={"Join us today and discover a world of trivia and learning at your fingertips!"}
            ctabtn1={
                {
                    btntext:"try it yourself",
                    linkto:"/signup",
                    active:true
                }
            }
            ctabtn2={
                {
                    btntext:"create more",
                    linkto:"/login",
                    active:false
                }
            }
            codeblock={'Circuits \nAI \n DeepLearning \nDesign&&Develop \nCybersecurity \nCloudNetworking \nComputer&&IT \n Electronics \n Botany \nMachinery \n Chemicals '}
            codecolor={"text-yellow-25"}
            ></Codeblocks>
         </div>
     </div>
        
     <Footer />
        </div>
     
    )
};

export default Home;
