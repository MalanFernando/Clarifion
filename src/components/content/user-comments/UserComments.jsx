import Image from "next/image";
import profile from '../../../../public/profile-user.png'
import { BsPatchCheckFill } from "react-icons/bs";
import { MdStarRate } from 'react-icons/md';

export default function UserComments() {
  return (
    <section className="hidden p-6 gap-4 md:grid">
      <div className="flex items-center gap-4">
        <Image src={profile} alt="profile user photo" width={48} height={48} />
        <div className="w-full grid gap-2">
          <span className="flex gap-1 text-yellow">
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </span>
          <div className="flex gap-2">
            <span className="text-sm font-bold">Ken T.</span>
            <span className="flex gap-3 items-center text-xs text-mint">
              <BsPatchCheckFill className="text-mint"/> Verified Customer
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray text-sm 2xl:text-base">
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </section>
  );
}
