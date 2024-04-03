import avatar from "../../assets/image/avatar.png"
import './mentorProfile.css'
import {Button} from "@/components/ui/button"
import {ChevronRight} from "lucide-react";

const MentorProfile = () => {
    return (
        <>
            <section className="md:hidden block w-full h-full">
                <div className="w-full h-96 relative border-2">
                    <img src={avatar} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute w-full h-full bg-black top-0 opacity-50 z-10"></div>
                    <div className="absolute w-full h-full top-64 pt-4 left-5 z-10 text-white text-4xl font-medium">
                        Olivia Cole
                        <div className="text-white text-xl font-light">University Of Sydney - Class of 2023</div>
                        <div className="text-white text-sm font-light">olivia.cole@gmail.com</div>
                    </div>
                </div>

                <div className="background-blue w-full h-auto p-5">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-medium text-white">About</div>
                        <Button className="h-7 rounded-2xl px-9" variant="outline">Connect</Button>
                    </div>
                    <p className="text-white mt-4 text-justify">
                        Experienced marketing specialist adept at crafting innovative strategies for brand elevation and
                        driving impactful results. Expertise in digital and traditional platforms, with a keen eye for
                        consumer behavior and market trends. Passionate about creativity and committed to delivering
                        measurable success.
                    </p>
                </div>
            </section>
            <section className="hidden md:block md:w-full md:h-full">

                <div className="bg-black w-full h-[900px] relative">
                    <div className="absolute top-24 w-full text-white flex justify-center gap-x-40 items-start">
                        <div
                            className="w-56 h-auto rounded-2xl background-blue z-20 flex flex-col gap-y-5 ">
                            <div className="w-full h-72">
                                <img src={avatar} alt="" className="w-full h-full object-cover rounded-t-2xl"/>
                            </div>

                            <Button className="h-6 ml-7 mt-2 rounded-2xl w-32 text-black px-12 "
                                    variant="outline">Connect</Button>
                            <div className="text-white w-full px-7 pb-5 font-medium">
                                About
                                <p className="font-light mt-2">
                                    Experienced marketing specialist adept at crafting innovative strategies for brand
                                    elevation and driving impactful results.
                                </p>

                                <div className="mt-4 flex flex-row items-center h-auto ">
                                    <div>Show more</div>
                                    <ChevronRight className="mt-1" size={16} strokeWidth={3}/>
                                </div>
                            </div>
                        </div>


                        <div className="text-3xl">
                            <div className="text-white text-6xl font-medium">Olivia Cole</div>
                            <div className="text-white text-xl font-light">University Of Sydney - Class of 2023</div>
                            <div className="text-white text-sm font-light ">olivia.cole@gmail.com
                            </div>
                        </div>

                        <Button className="h-7 rounded-2xl text-black px-9 mt-16"
                                variant="outline">Share
                        </Button>
                    </div>


                    <div className="absolute bottom-0 w-full h-auto background-purple rounded-t-2xl flex pt-5 pb-10">
                        <div className="w-1/3 h-auto"></div>
                        <div
                            className="w-2/3 h-auto flex justify-center items-center  flex-col gap-y-1">
                            <div className="flex items-center pl-28 gap-x-4 w-full mt-10 mb-2">
                                <div
                                    className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl background-blue-dark text-white shadow-custom font-thin text-xs uppercase">Marketing
                                    Strategist
                                </div>

                                <div
                                    className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl background-blue-dark text-white shadow-custom font-thin text-xs uppercase">Marketing
                                    Strategist
                                </div>

                                <div
                                    className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl background-blue-dark text-white shadow-custom font-thin text-xs uppercase">Marketing
                                    Strategist
                                </div>
                            </div>

                            <div className="w-full pl-28">
                                <div className="font-bold text-2xl my-5">What I Offer...</div>
                                <div className="background-blue rounded-3xl px-10 py-5 w-2/3 shadow-custom">
                                    <ul className="text-white list-disc font-light">
                                        <li>Knowledge in Marketing, Entrepreneurship, Communication, and related
                                            fields.
                                        </li>
                                        <li>Proficiency with marketing designs and Adobe Acrobat.</li>
                                        <li>Data analysis, excellent communication and presentation skills.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full pl-28 mt-5">
                                <div className="font-bold text-2xl mt-5 ">What People Say...</div>
                                <div className="flex items-center  gap-x-4 w-full my-5">
                                    <div
                                        className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl border-dark-blue bg-transparent text-dark-blue shadow-custom font-bold text-xs uppercase">All
                                        Reviews
                                    </div>

                                    <div
                                        className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl border-dark-blue bg-transparent text-dark-blue shadow-custom font-bold text-xs uppercase"> Helpful
                                    </div>

                                    <div
                                        className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl border-dark-blue bg-transparent text-dark-blue shadow-custom font-bold text-xs uppercase">Friendly
                                    </div>

                                    <div
                                        className="px-5 w-auto text-center h-9  flex justify-center items-center rounded-3xl border-dark-blue bg-transparent text-dark-blue shadow-custom font-bold text-xs uppercase">Professional
                                    </div>
                                </div>
                                <div className="background-blue rounded-3xl px-10 py-5 w-2/3 shadow-custom">
                                    <ul className="text-white list-disc font-light ">
                                        <li>Knowledge in Marketing, Entrepreneurship, Communication, and related
                                            fields.
                                        </li>
                                        <li>Proficiency with marketing designs and Adobe Acrobat.</li>
                                        <li>Data analysis, excellent communication and presentation skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default MentorProfile;
