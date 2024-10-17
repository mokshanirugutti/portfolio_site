import WorkCard from "./WorkCard";


export default function WorkExperience() {
    return <div className="w-full min-h-screen grid place-content-center">
        
        
        <div className="flex flex-wrap justify-center gap-6 items-center">
            <WorkCard company="Kampkode" role="Full Stack Intern" description="Developed repsonive and animated webpages " link="https://kampkode.tech"/>
            <WorkCard company="FreeLancer" role="Full Stack Developer" description="Created a web page edtior useing reacjs and firebase"/>
        </div>
        
    </div>;
}