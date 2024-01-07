import SectionTitle from "./SectionTitle";
import { Player } from '@lottiefiles/react-lottie-player';

const Contact = () => {
    return (
        <>
            <div className="text-center">
                <SectionTitle heading={'Get in touch'}></SectionTitle>
            </div>
            <div className="flex items-center">
                <div className="lg:w-1/2">
                    <Player
                        src="https://lottie.host/145cf985-3637-4432-88d1-cdc573d77288/nRHCycHlUy.json"
                        // src='https://lottie.host/f81f86a2-6995-467d-86f0-b308f58dabcf/6GBm6nHMaI.json'
                        className="player "
                        loop
                        autoplay
                        style={{ width: '600px' }}
                    />
                </div>

                <div className=" w-1/2 mx-auto p-4">
                    <form className="space-y-12 text-gray-300">

                        <div className="w-full">
                            <input placeholder="name" name="name" type="text" className="w-full  border-b-[2px] py-3  outline-none " />
                        </div>
                        <div className="w-full">
                            <input placeholder="email" name="email" type="email" className="w-full  border-b-[2px] py-3 outline-none " />
                        </div>

                        <div>

                            <textarea placeholder="message" name="massage" rows="5" className="w-full  border-[2px] p-3 rounded "></textarea>
                        </div>
                        <div className="flex justify-center items-center lg:pb-16">
                            <button type="submit" className="mt-8 inline-block rounded bg-btn-clr px-12 py-3 text-sm font-medium text-white transition hover:bg-navy focus:outline-none focus:ring focus:ring-yellow-400">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;