import { Session } from "next-auth";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  LinkIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { getUserSession } from "@/entities/users";

type Props = {
  session: Session | null;
  username: string;
};

const infoList = [
  { title: "Empresa", icon: <BuildingOfficeIcon className="h-6" /> },
  { title: "Cidade", icon: <MapPinIcon className="h-6" /> },
  { title: "E-mail", icon: <EnvelopeIcon className="h-6" /> },
  { title: "Site pessoal", icon: <LinkIcon className="h-6" /> },
  { title: "LinkedIn", icon: <LinkIcon className="h-6" /> },
  { title: "Github", icon: <LinkIcon className="h-6" /> },
];

export default function Profile({ session, username }: Props) {
  const { name, image } = getUserSession(session);

  <div className="max-w-[200px] max-h-[200px] flex flex-1">
    <Image
      alt={name}
      className="h-full w-full object-cover"
      height={200}
      src={image}
      width={200}
    />
  </div>;

  return (
    <div className="p-4 w-full rounded-lg bg-podPurple">
      <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-4 items-center min-w-[270px]">
        <div className="relative rounded-full min-h-[200px] min-w-[200px] border border-white border-8">
          {image ? (
            <div className="max-w-[200px] max-h-[200px] flex flex-1">
              <Image
                alt={name}
                className="rounded-full h-full w-full object-cover"
                height={200}
                src={image}
                width={200}
              />
            </div>
          ) : (
            <UserIcon className="text-white" />
          )}
        </div>
        <div className="flex flex-col text-white pb-4 lg:pb-0 border-slate-300 w-5/6">
          <h1 className="text-3xl font-bold tracking-tight">{username}</h1>
          <p className="text-slate-300">@nicolasbrandao</p>
          <p className="mt-4 text-xl">Software Engineer</p>
        </div>
        <div className="flex flex-col items-start lg:items-center text-white pb-4 lg:pb-0 border-slate-300 w-5/6 min-w-[200px]">
          <ul className="flex flex-col gap-2 list-none my-auto lg:flex-wrap">
            {infoList.map((item) => {
              return (
                <li className="flex gap-2" key={item.title}>
                  {item.icon}
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-start lg:self-start text-white pb-4 lg:pb-0 border-slate-300 w-5/6">
          <h1 className="text-xl">Conquistas</h1>
          <div className="flex flex-wrap">
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
