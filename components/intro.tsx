import Image from "next/image"
import profile from "@/public/profile.png"

const intro = () => {

}

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <Image
                    src={profile}
                    alt="profile-image"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"

                    />
                    <span className="absolute text-4xl">
                    🌟
                    </span>
                </div>
            </div>
        </section>
    )
};
