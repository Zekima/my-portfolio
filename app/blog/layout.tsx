export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="no">
            <body>
                {children}
            </body>
        </html>
    );
}