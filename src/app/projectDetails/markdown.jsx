import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from 'remark-gfm';
import Button from '@/lib/UIComponents/Button';
import Styles from "./markdown.module.css";

// https://mdxjs.com/playground/
// https://mdxjs.com/table-of-components/

export default function Markdown({ rawSource }) {
    const [mdxSource, setMdxSource] = useState(null);

    // Serialization
    useEffect(() => {
        
        async function processMDX() {
        const serialized = await serialize(rawSource, {
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
        });
        setMdxSource(serialized);
        }

        processMDX();
    }, [rawSource]);

    if (!mdxSource) return <p>Loading...</p>;

    return (
        <div className={`${Styles.markdown} u-layout_flex-column gap-l`}>
            <MDXRemote {...mdxSource} components={{ Button, Image }} />
        </div>
    )
}

function Image({src, width=256, height=256, alt="", title=""}){
    const cleanSrc = src.slice(0, -4) + '.' + src.slice(-3);
    const imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${cleanSrc}`
    return <img src={imageUrl} width={width}  title={title} alt={alt} style={{maxWidth: "100%", aspectRatio: width / height, objectFit: "cover"}}/>
}