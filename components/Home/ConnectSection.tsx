import { useTranslations } from "next-intl";

export default function ConnectSection() {
    const t = useTranslations('HomePage.Connect');

    return (
        <div className="flex flex-col space-y-24 pb-72">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>

            <div className="flex ">
                <div className="w-1/2 flex flex-col text-3xl gap-6">
                    <p>Got a new idea you want to explore or simply want to chat? Drop me an email, and I'll get back to you within a day!</p>
                    <p>Not a fan of contact forms? You can reach me directly at <span className="underline">christianledaal@gmail.com</span> </p>
                </div>

                <div className="w-1/2">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}