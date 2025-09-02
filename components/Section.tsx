export default function Section(props: { id?: string; title?: string; children: React.ReactNode }) {
    const { id, title, children } = props;
    return (
        <section id={id} className="py-8">
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            <div className="mt-3">{children}</div>
        </section>
    );
}
