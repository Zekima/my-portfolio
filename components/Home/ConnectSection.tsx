"use client"


import { useTranslations } from "next-intl";
import React from "react";

export default function ConnectSection() {
    const t = useTranslations('HomePage.Connect');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append("access_key", "7132710a-31c4-4399-8063-7975d1da8b99");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <div className="flex flex-col space-y-24 pb-72 " id="connect">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>

            <div className="flex gap-4 lg:flex-row flex-col gap-y-24">
                <div className="lg:w-1/2 flex flex-col text-2xl gap-6">
                    <p>{t("P1")}</p>
                    <p>{t("P2")} <span className="underline">christianledaal@gmail.com</span> </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full lg:w-4/5 text-lg">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="name">{t("Name")}</label>
                            <input type="text" name="name" placeholder={t("NamePlaceholder")} className="border p-2 placeholder:text-gray-500" />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="email">{t("Email")}</label>
                            <input type="email" name="email" placeholder={t("EmailPlaceholder")} className="border p-2 placeholder:text-gray-500" />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="message">{t("Message")}</label>
                            <textarea name="message" className="border p-2 min-h-32"></textarea>
                        </div>

                        <button type="submit" className="bg-primary py-3 text-black font-black text-lg">{t("Submit")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}