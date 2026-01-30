import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import avatarImg from '@/assets/thibaut_lefrancois.webp';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const statusColors = {
  online: 'bg-green-500',
  away: 'bg-amber-500',
  offline: 'bg-gray-400',
} as const;

export default function Sidebar() {
  const status = useOnlineStatus();

  return (
    <>
      <Avatar className="border-2 border-gray-200" size="xl">
        <AvatarImage src={avatarImg} alt="Thibaut Lefrançois" />
        <AvatarFallback>TL</AvatarFallback>
        <AvatarBadge className={statusColors[status]} />
      </Avatar>

      <h1 className="text-4xl font-bold tracking-tight text-balance">
        Thibaut LEFRANCOIS
      </h1>

      <div className="flex flex-col text-lg font-light tracking-tight text-balance">
        <p className="flex items-center">
          <span className="font-medium">Creative dev</span> : Arko (freelancer)
        </p>
        <p>
          <span className="font-medium">Full-stack dev</span> : Raccourci Agency
        </p>
        <p>
          <span className="font-medium">Passionate player</span> : Frozway
        </p>
      </div>
    </>
  );
}
