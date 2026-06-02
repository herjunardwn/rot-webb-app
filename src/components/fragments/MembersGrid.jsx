import MemberCard from "@/components/elements/MemberCard";
import { members } from "@/lib/members";

export default function MembersGrid() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
