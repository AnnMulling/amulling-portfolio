import Image from "next/image"
import profile from "@/public/profile.png"

const intro = () => {

}

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div>
                    <Image
                    src={profile}
                    alt="profile-image"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    />
                </div>
            </div>
        </section>
    )
};
