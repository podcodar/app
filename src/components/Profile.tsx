import { Session } from "next-auth";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  LinkIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

type Props = {
  session: Session | null;
};

export default function Profile({ session }: Props) {
  return (
    <div className="p-4 w-full rounded-lg bg-podPurple">
      <div className="flex flex-col items-center justify-center md:justify-between md:flex-row gap-4 items-center min-w-[270px]">
        <Image
          alt={session!.user!.name as string}
          className="rounded-full h-[200px] w-[200px] object-contain border border-white border-8"
          height={200}
          src={session!.user!.image as string}
          width={200}
        />
        <div className="flex flex-col text-white pb-4 md:pb-0 border-slate-300 w-5/6">
          <h1 className="text-3xl font-bold tracking-tight">
            {session!.user!.name as string}
          </h1>
          <p className="text-slate-300">@nicolasbrandao</p>
          <p className="mt-4 text-xl">Software Engineer</p>
        </div>
        <div className="flex flex-col items-start md:items-center text-white pb-4 md:pb-0 border-slate-300 w-5/6 min-w-[200px]">
          <ul className="flex flex-col gap-2 list-none my-auto md:flex-wrap">
            <li className="flex gap-2">
              <BuildingOfficeIcon className="h-6" />
              <span>Empresa</span>
            </li>
            <li className="flex gap-2">
              <MapPinIcon className="h-6" />
              Cidade
            </li>
            <li className="flex gap-2">
              <EnvelopeIcon className="h-6" />
              E-mail
            </li>
            <li className="flex gap-2">
              <LinkIcon className="h-6" />
              Site pessoal
            </li>
            <li className="flex gap-2">
              <LinkIcon className="h-6" />
              LinkedIn
            </li>
            <li className="flex gap-2">
              <LinkIcon className="h-6" />
              Github
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start md:self-start text-white pb-4 md:pb-0 border-slate-300 w-5/6">
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
