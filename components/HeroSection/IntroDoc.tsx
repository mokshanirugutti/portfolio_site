import WordRotate from "../ui/word-rotate";
import { SocialsDoc } from "./SocialsDoc";

export default function IntroDoc() {
    return (
        <div className="border border-teal-200 rounded-3xl shadow-md px-7 py-3 flex justify-between items-center w-[85%]  mx-auto flex-wrap">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold ">Moksha Nirugutti</h1>
                
                    <WordRotate words={['FrontEnd Developer','Backend Developer' ,'FullStack Developer']} className="text-lg font-bold "/>
                     
            </div>
            <div className="">
                <SocialsDoc/>
            </div>
        </div>
    );
}