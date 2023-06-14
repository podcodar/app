import { Image } from "@/shared/components";
import {
  BuildingOfficeIcon,
  LinkIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { User } from "@prisma/client";

type Props = {
  profileUser: User;
};

const infoList = [
  { title: "Empresa", icon: <BuildingOfficeIcon className="h-6" /> },
  { title: "Cidade", icon: <MapPinIcon className="h-6" /> },
  { title: "E-mail", icon: <EnvelopeIcon className="h-6" /> },
  { title: "Site pessoal", icon: <LinkIcon className="h-6" /> },
  { title: "LinkedIn", icon: <LinkIcon className="h-6" /> },
  { title: "Github", icon: <LinkIcon className="h-6" /> },
];

export default function Profile({ profileUser }: Props) {
  return (
    <div className="p-4 w-full rounded-lg bg-pod-purple">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-1/2 lg:w-full mx-auto items-center min-w-[17rem]">
        <div className="relative rounded-full min-h-[12rem] min-w-[12rem] border-white border-8 mx-auto">
          <Image
            alt={profileUser.name}
            className="rounded-full"
            height={200}
            src={profileUser.avatar as string}
            width={200}
          />
        </div>
        <div className="grid grid-cols-1 text-white pb-4 lg:pb-0 border-slate-300 border-b lg:border-none">
          <h1 className="text-3xl font-bold tracking-tight mx-auto lg:mx-0">
            {profileUser.name}
          </h1>
          <p className="text-slate-300 mx-auto lg:mx-0">
            @{profileUser.username}
          </p>
          <p className="mt-4 text-xl mx-auto lg:mx-0">Software Engineer</p>
        </div>
        <div className="grid grid-cols-1 text-white pb-4 lg:pb-0 border-slate-300 border-b lg:border-none">
          <ul className="grid grid-cols-1 gap-2 list-none my-auto">
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
        <div className="grid grid-cols-1 justify-start lg:self-start text-white pb-4 lg:pb-0 border-slate-300">
          <h1 className="text-xl">Conquistas</h1>
          <div className="flex flex-wrap">
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
            <StarIcon className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
