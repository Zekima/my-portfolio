import { useTranslations } from "next-intl";

export default function EducationSection() {
    const t = useTranslations('HomePage.Education');
    const NotableGrades = t.raw("NotableGrades.Items")
    return (
        <div className="flex flex-col space-y-24">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>

            <div className="flex gap-4">
                <div className="w-1/2 bg-secondary h-64 flex justify-center items-center">
                    <img src="./images/usn-logo.webp" alt="" width={350}/>
                </div>
                <div className="w-1/2 bg-primary h-64 text-black text-center flex items-center justify-center flex-col gap-4">
                    <p className="text-2xl font-medium max-w-96">{t("Grade")}</p>
                    <p className="text-xl">{t("GraduationDate")}</p>
                </div>
            </div>

            <div className="space-y-8">
                <p className="text-2xl">{t("NotableGrades.Title")}</p>
                {NotableGrades.map((grade: string) => (
                    <div key={grade} className="border-b-2 py-3 font-light text-xl flex justify-between">
                        <p>{grade}</p>
                        <p>A</p>
                    </div>
                ))}
            </div>


        </div>
    );
}