import Vector2 from "../assets/Vector2.webp";
import rating from '../assets/rating/rating.webp';
import trustpilot from '../assets/trustpilot.webp';
import rating2 from "../assets/rating2.png";
import Person1 from "../assets/person1.webp";
import Person2 from "../assets/Person2.webp";
import Person3 from "../assets/Person3.webp";
import { CheckmarkIcon } from "./CustomSVG";

const testimonials = [
    "Transfer your website using our free automatic website migration tool.",
    "Our agents will guide you in every step of the way.",
    "Your website will be transferred within 24 hours."
];

const clientStories = [
    {
        name: "Sameer Chauhan",
        title: "Freelance Developer",
        story: "Hostinger impressed me with amazing customer experience and effortless migration from my previous hosting provider.",
        img: Person1
    },
    {
        name: "Jake Sinclair",
        title: "Graphic and Web Designer",
        story: "Support matters to me the most. Your specialists were always there to help me immediately whenever needed. Really loved the support!!",
        img: Person2
    },
    {
        name: "Jhon Ortega",
        title: "Entrepreneur",
        story: "I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance.",
        img: Person3
    }
];

function FreeMigration() {
    return (
        <div className="w-full">
            <div className="max-w-[1150px] w-11/12 flex flex-col gap-12 mx-auto justify-around items-center py-20">
                <div className="flex md:flex-row flex-col items-center justify-between gap-20">
                    <div className="flex flex-col md:w-5/12">
                        <h1 className="font-semibold md:text-4xl text-2xl text-[#2F1C6A]">Free Migration</h1>
                        {testimonials.map((text, index) => (
                            <div className="flex flex-row gap-1 pt-6" key={index}>
                                <CheckmarkIcon />
                                <span className="text-[#727272]">{text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="my-auto mx-auto flex items-center md:justify-end justify-center">
                        <img src={Vector2} className="max-w-[624px] w-11/12" alt="Website Migration" />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                    {Array(3).fill().map((_, index) => (
                        <div key={index} className="md:w-11/12 w-full max-w-[360px] bg-[#FAFBFF]">
                            <div className="flex flex-col p-8">
                                <div className="flex flex-col gap-4">
                                    <img src={trustpilot} className="w-8/12" alt="Trustpilot" />
                                    <span className="text-[#2F1C6A]">Testimonial {index + 1}</span>
                                </div>
                                <div className="flex flex-row pt-2 justify-between">
                                    <img src={rating} className="w-6/12" alt="Rating" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="arrow-right" className="w-6 h-6">
                                        <path fill="#673EE6" d="M8.295 16.885L12.875 12.295 8.295 7.705l1.41-1.41 6 6-6 6-1.41-1.41z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-[1150px] w-11/12 flex flex-col gap-4 mx-auto justify-around items-center py-8">
                <h1 className="font-semibold text-4xl text-[#2F1C6A]">Featured Client Stories</h1>
                <div className="flex lg:flex-row flex-col gap-8 justify-between mt-5">
                    {clientStories.map((client, index) => (
                        <div key={index} className="md:w-11/12 w-full max-w-[360px] border border-[#D5DFFF] rounded-lg">
                            <div className="flex flex-col px-8 py-12 gap-10">
                                <div className="flex flex-col gap-6">
                                    <img src={rating2} className="w-6/12" alt="Rating" />
                                    <span className="text-[#2F1C6A] text-md">{client.story}</span>
                                </div>
                                <div>
                                    <a href="#"><span className="text-[#673DE6] font-semibold">Read full story</span></a>
                                </div>
                            </div>
                            <div className="flex flex-row px-8 py-6 gap-2 border-t border-[#D5DFFF] bg-[#F4F5FF]">
                                <div>
                                    <img src={client.img} className="w-16 h-16 rounded-full" alt={client.name} />
                                </div>
                                <div className="my-auto">
                                    <span className="text-[#2F1C6A] text-lg font-semibold">{client.name}</span><br />
                                    <span className="text-[#2F1C6A] pt-1 text-sm">{client.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="font-semibold py-3 mt-5 max-w-[400px] w-11/12 drop-shadow-lg hover:scale-105 transition-transform duration-300 text-[#673DE6] text-lg border-2 border-[#673DE6] rounded-md">
                    Browse More Client Stories
                </button>
                <h1 className="font-semibold md:text-4xl text-2xl mt-20 text-center text-[#2F1C6A]">Join 999999+ Website Owners</h1>
                <button className="font-semibold py-3 mt-5 max-w-[250px] w-11/12 drop-shadow-lg hover:scale-105 transition-transform duration-300 text-white text-lg bg-[#673DE6] rounded-md">
                    Get Started
                </button>
                <div className="flex flex-row gap-1 max-w-[250px] w-11/12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" aria-label="check" className="w-3 h-6">
                        <path fill="#00B090" d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                    </svg>
                    <span className="text-center text-[#4d4d4d] text-sm">Benefit from an exclusive 30-day money-back guarantee</span>
                </div>
            </div>
        </div>
    );
}

export default FreeMigration;
