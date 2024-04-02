import './section2Mentor.css'
import {Input} from "@/components/ui/input"
import {AlignJustify, Search} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
const Section2Mentor = () => {
    return (
        <section className="section-2-mentor-wrapper">
            <div className="flex items-center gap-x-10 ">
                <div className="w-auto flex items-center gap-x-2 bg-purple-custom py-1 px-3 rounded-3xl">
                    <Search size={20} color="#ffffff"/>
                    <Input placeholder="Search..."
                           className="w-42 h-7 text-white focus-visible:ring-offset-0 focus-visible:ring-0 bg-purple-custom"/>
                </div>

                <div
                    className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                    Business
                </div>
                <div
                    className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                    Business
                </div>

                <div
                    className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                    Business
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-purple-custom py-1.5 px-3 rounded-3xl relative">
                        <AlignJustify color="#ffffff" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[1000px] bg-purple-300 flex flex-wrap flex-row items-center gap-x-12 gap-y-4 p-5 rounded-2xl right-0 top-2 absolute">
                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Business
                        </div>

                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Computer Science
                        </div>

                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Social Sciences
                        </div>

                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Health & Medicine
                        </div>

                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Arts & Humanities
                        </div>

                        <div
                            className="w-auto text-gray-300 h-9 flex justify-center items-center gap-x-2 bg-purple-custom py-1.5 px-12 rounded-3xl">
                            Technology, Engineer, & Math
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>


            <div className="search-mentor-wrapper">
                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

                <div className="card-mentor">
                    <Avatar className="avatar-mentor w-20 h-20">
                        <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div className="name-mentor">Olivia Cole</div>
                    <div className="card-mentor-up">
                        <div className="text-white uppercase text-xs">marketing specialist</div>
                        <Button variant="outline" className="h-8 rounded-2xl uppercase">View Profile</Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section2Mentor;
