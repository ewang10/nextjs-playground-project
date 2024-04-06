import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostHeader from './post-header';
import Image from 'next/image';
import classes from './post-content.module.css';

function PostContent({ post }) {
    const { slug, image, title, content } = post;
    const imagePath = `/images/posts/${slug}/${image}`;

    const customRenderers = {
        p({ node, children }) {
            if (node.children[0].tagName === 'img') {
                const image = node.children[0].properties;
                const { alt, src } = image;

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${slug}/${src}`}
                            alt={alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{children}</p>
        },
        code(code) {
            const { children, className, node, ...rest } = code;
            const match = /language-(\w+)/.exec(className || '');

            return (
                <SyntaxHighlighter
                    {...rest}
                    style={atomDark}
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                />
            )
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;