import Accordion from "@/components/Accordion";

export default function Page() {
  //Need to make the data an separated file.
  const items = [
    {
      id: "pd1",
      label: "Checklist 1",
      content: "Yes that the first one",
    },
    {
      id: "pd2",
      label: "Checklist 2",
      content: "Yes that the second one",
    },
    {
      id: "pd3",
      label: "Checklist 3",
      content: "Yes that the third one",
    },
    {
      id: "pd4",
      label: "Checklist 4",
      content: "Yes that the fourth one",
    },
    {
      id: "pd5",
      label: "Checklist 5",
      content: "Yes that the fifty one",
    },
  ];
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Accordion items={items} />
          </div>
        </main>
      </div>
    </>
  );
}
