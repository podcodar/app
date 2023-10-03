import { Image } from "@/shared/components";
import {
  BuildingOfficeIcon,
  LinkIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { User } from "@prisma/client";
import Link from "next/link";

type Props = {
  profileUser: User;
};
function transformUrl(url: string) {
  const parsedUrl = new URL(url);
  return parsedUrl.pathname;
}

export default function Profile({ profileUser }: Props) {
  const infoList = [
    {
      title: "Empresa",
      icon: <BuildingOfficeIcon className="h-6" />,
      content: profileUser.company,
    },
    {
      title: "Cidade",
      icon: <MapPinIcon className="h-6" />,
      content: profileUser.city,
    },
    {
      title: "E-mail",
      icon: <EnvelopeIcon className="h-6" />,
      content: profileUser.email,
    },
    {
      title: "LinkedIn",
      icon: <LinkIcon className="h-6" />,
      content: (
        <Link
          className="truncate"
          href={profileUser.linkedin ?? ""}
          target="_blank"
        >
          {transformUrl(profileUser.linkedin ?? "")}
        </Link>
      ),
    },
    {
      title: "Github",
      icon: <LinkIcon className="h-6" />,
      content: (
        <Link
          className="truncate"
          href={profileUser.github ?? ""}
          target="_blank"
        >
          {transformUrl(profileUser.github ?? "")}
        </Link>
      ),
    },
  ];

  return (
    <div className="p-4 w-full rounded-lg bg-pod-purple">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-1/2 lg:w-full mx-auto items-center min-w-[17rem]">
        <div className="relative rounded-full min-h-[12rem] min-w-[12rem] border-white border-8 mx-auto">
          <Image
            alt={profileUser.name}
            className="rounded-full"
            height={200}
            src={profileUser.avatar}
            width={200}
          />
        </div>
        <div className="grid grid-cols-1 text-white pb-4 lg:pb-0 border-slate-300 border-b lg:border-none">
          <h1 className="text-3xl font-bold tracking-tight mx-auto lg:mx-0">
            {profileUser.socialName ?? profileUser.name}
          </h1>
          <p className="text-slate-300 mx-auto lg:mx-0">
            @{profileUser.username}
          </p>
          <p className="mt-4 text-xl mx-auto lg:mx-0">
            {profileUser.profession}
          </p>
        </div>
        <div className="grid grid-cols-1 text-white pb-4 lg:pb-0 border-slate-300 border-b lg:border-none">
          <ul className="grid grid-cols-1 gap-2 list-none my-auto">
            {infoList.map((item) => {
              return (
                <li
                  className="flex gap-2 w-[280px] md:w-[350px]"
                  key={item.title}
                >
                  <div>{item.icon}</div>
                  <div className="w-[350px] truncate">{item.content}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
