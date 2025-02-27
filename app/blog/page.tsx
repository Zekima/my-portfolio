import { getPayload } from "payload";
import config from "@/payload.config";


export default async function BlogPage() {
    const payload = await getPayload({ config });
    const media = await payload.find({
        collection: 'media',
    });

    return (
        <div>
            {media.docs.map((doc) => 
                <div key={doc.id}>
                    <img src={doc.url || ''} width={190} height={100} alt={doc.alt || ''} />
                </div>
            )}
        </div>
    )
}