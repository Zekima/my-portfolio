"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ConnectSection() {
    const t = useTranslations("HomePage.Connect");
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.append("access_key", "7132710a-31c4-4399-8063-7975d1da8b99");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const [submitResponse] = await Promise.all([
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: json,
                }),
                new Promise((resolve) => setTimeout(resolve, 1000)),
            ]);

            const result = await (submitResponse as Response).json();
            if (result.success) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section 
            className="flex flex-col space-y-24 pb-72" 
            id="connect"
            aria-labelledby="connect-section-title"
        >
            <div>
                <h2 id="connect-section-title" className="text-4xl font-medium">{t("Title")}</h2>
                <div className="border-b-2 py-3" role="presentation" />
            </div>

            <div className="flex gap-4 lg:flex-row flex-col gap-y-24">
                <div className="lg:w-1/2 flex flex-col text-2xl gap-6">
                    <p>{t("P1")}</p>
                    <p>
                        {t("P2")}{" "}
                        <a 
                            href="mailto:christianledaal@gmail.com"
                        className="underline hover:text-primary focus:text-primary transition-colors focus:bg-black focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label={t("EmailAriaLabel") || "Send email to Christian Ledaal"}
                        >
                            christianledaal@gmail.com
                        </a>
                    </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-full lg:w-4/5 text-lg"
                        aria-label={t("FormAriaLabel") || "Contact form"}
                        noValidate
                    >
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="name" className="font-medium">{t("Name")}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t("NamePlaceholder")}
                                    className="border p-2 placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                required
                                aria-required="true"
                                autoComplete="name"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="email" className="font-medium">{t("Email")}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t("EmailPlaceholder")}
                                className="border p-2 placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                required
                                aria-required="true"
                                autoComplete="email"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="message" className="font-medium">{t("Message")}</label>
                            <textarea
                                id="message"
                                name="message"
                                className="border p-2 min-h-32 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                required
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-primary h-[52px] text-background font-medium text-lg transition-all duration-100 hover:opacity-85 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center"
                            aria-busy={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">{t("Submitting")}</span>
                                </>
                            ) : (
                                t("Submit")
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="text-green-600" role="status">
                                {t("SubmitSuccess")}
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600" role="alert">
                                {t("SubmitError")}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}